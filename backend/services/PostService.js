import { commentsDB, postsDB, savesDB, likesDB, usersDB, friendsDB, notificationsDB } from '../index.js';
import LikeService from './LikeService.js';
import NotificationService from './NotificationService.js';
import SaveService from './SaveService.js';
import NotificationEnums from '../constants/Enums/NotificationEnums.js'

export const canBeFriendHandler = (user_id, authorizedUserId) => {
  const { notifications } = notificationsDB.data;
  const { friends } = friendsDB.data;
  const isMe = authorizedUserId === user_id;
  const isFriend = !!friends.find((friendObj) => friendObj.user_id === authorizedUserId)
    ?.friends?.find((obj) => obj.friend_id === user_id && !obj.is_removed);
  if (isMe || isFriend) {
    return false;
  }

  const didSendRequestForFriendship = !!notifications.find((notificationObj) => 
    notificationObj.sender_id === authorizedUserId 
      && notificationObj.receiver_id === user_id 
      && notificationObj.type === NotificationEnums.REQUEST_FOR_FRIENDSHIP
      && !notificationObj.is_removed
  );
  if (didSendRequestForFriendship) {
    return { sender_id: authorizedUserId };
  }

  const didGetRequestForFriendship = !!notifications.find((notificationObj) => 
    notificationObj.sender_id === user_id 
      && notificationObj.receiver_id === authorizedUserId 
      && notificationObj.type === NotificationEnums.REQUEST_FOR_FRIENDSHIP
      && !notificationObj.is_removed
  );
  
  if (didGetRequestForFriendship) {
    return { sender_id: user_id };
  }

  return true;
};

const getPostDetail = (data, authorizedUserId) => {
  const { likes } = likesDB.data;
  const { saves } = savesDB.data;
  const { comments } = commentsDB.data;
  const { users } = usersDB.data;
  return (
    {
      ...data,
      likes_count: likes.filter((likeObj) => likeObj.post_id === data.id).length,
      comments_count: comments.filter((commentObj) => commentObj.post_id === data.id && !commentObj.is_removed).length,
      liked: !!likes.find((likeObj) => likeObj.user_id === authorizedUserId && likeObj.post_id === data.id),
      saved: !!saves.find((saveObj) => saveObj.user_id === authorizedUserId && saveObj.post_id === data.id),
      user: users.find((userObj) => userObj.id === data.user_id),
      canBeFriend: canBeFriendHandler(data.user_id, authorizedUserId)
    }
  );
};

class PostService {
  static async getAll() {
    // TODO: bir sürü key eksik onları ekle
    try {
      const { posts } = postsDB.data;
      return {
        type: true,
        message: 'All Posts has been fetched',
        data: posts
      };
    } catch (error) {
      return {
        type: false,
        message: error.message,
      };
    }
  }

  static async getById(req, res) {
    try {
      const { posts } = postsDB.data;
      const { id } = req.params;
      const data = posts.find((obj) => obj.id === Number(id));
      if (!data) {
        return {
          type: false,
          message: `Post with id ${id} couldn't find. It may have been deleted`,
        };
      }

      const result = getPostDetail(data, req.user.id);
      return {
        type: true,
        message: `Post with id ${id} has been fetched`,
        data: result
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
  /**
   * @query = page, limit
  */
  static async get(req, res) {
    try {
      const { posts } = postsDB.data;
      const { page = 1, limit = 10, user_id, is_removed } = req.query;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 

      const filteredData = posts.filter((obj) => {
        return Object.entries({ user_id, is_removed }).every(([key, value]) => {
          return value !== undefined ? String(obj[key]) === value : true;
        });
      });

      // const filteredData = user_id ? posts.filter((obj) => obj.user_id === parseInt(user_id)) : [...posts];

      const sortedData = [...filteredData].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      const data = sortedData.slice(startIndex, endIndex);
      const result = data.map((obj) => ( getPostDetail(obj, req.user.id) ));

      return {
        type: true,
        message: 'Posts has been fetched',
        data: result
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async create(req, res) {
    try {
      //* create a new post
      const { posts } = postsDB.data;
      const nextId = Math.max(...posts.map(post => post.id), 0) + 1;
      const data = JSON.parse(req.body.data);
      data.id = nextId;
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
      data.is_removed = false;
      data.files = req.files?.map((fileObj) => {
        const slices = fileObj.filename.split('.');
        const name = slices.slice(0, -1).join('.');
        const type = slices.at(-1);
        return { name, type };
      }) || [];
      posts.push(data);
      await postsDB.write();

      // //* get post that created
      const createdData = await PostService.getById({ ...req, params: { id: data.id } });
      if (!createdData.type) {
        return {
          type: false,
          message: "Couldn't fetch created data"
        };
      }
      return {
        type: true,
        message: 'Post created',
        data: createdData.data
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async like(req, res) {
    try {
      const { likes } = likesDB.data;
      const currentState = [...likes];
      const likeResult = await LikeService.createForPost(req, res);

      const { like, post_id } = req.body;
      if (!like) {
        return {
          type: likeResult.type,
          message: likeResult.message
        };
      }

      const postResult = await PostService.getById({ ...req, params: { id: post_id }});
      if (!postResult.type) {
        return {
          type: false,
          message: postResult.message
        };
      }
      
      const receiver_id = postResult.data.user.id;

      if (receiver_id !== req.user.id) {
        const notificationResult = await NotificationService.create({ ...req, body: { receiver_id, type: NotificationEnums.LIKED_POST, post_id } }, res);
        if (!notificationResult.type) {
          likesDB.data = { likes: currentState }; //* reset likes data
          await likesDB.write();
          return {
            type: false,
            message: notificationResult.message
          };
        }
      }

      return {
        type: true,
        message: likeResult.message
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async save(req, res) {
    try {
      const result = await SaveService.create(req, res);
      return {
        type: result.type,
        message: result.message
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const { posts } = postsDB.data;

      const index = posts.findIndex((obj) => obj.id === parseInt(id));
      if (index === -1) {
        return {
          type: false,
          message: `Post with id ${id} couldn't find`,
        };
      }

      const postData = { ...posts[index], is_removed: true, updated_at: new Date().toString() };
      posts.splice(index, 1, postData);
      await postsDB.write();

      return {
        type: true,
        message: 'Post deleted'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
}
  
export default PostService;