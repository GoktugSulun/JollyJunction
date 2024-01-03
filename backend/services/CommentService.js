import NotificationEnums from '../constants/Enums/NotificationEnums.js';
import { commentsDB } from '../index.js';
import LikeService from './LikeService.js';
import NotificationService from './NotificationService.js';
import PostService from './PostService.js';
import UserService from './UserService.js';

class CommentService {
  static async getAll() {
    const { comments } = commentsDB.data;
    try {
      return {
        type: true,
        message: 'All comments has been fetched',
        data: comments
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
      const { comments } = commentsDB.data;
      const { id } = req.params;
      const data = comments.find((obj) => obj.id === parseInt(id));
      if (!data) {
        return {
          type: false,
          message: `Comment with id ${id} couldn't find`
        };
      }
      
      const commentService = await UserService.getById({ ...req, params: { id: data.user_id } });
      if (!commentService.type) {
        return {
          type: false,
          message: commentService.message
        };
      }

      const result = { ...data, user: commentService.data };
      return {
        type: true,
        message: `Comment with id ${id} has been fetched`,
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
   * @query = page, limit, post_id, is_removed
  */
  static async get(req, res) {
    try {
      const { comments } = commentsDB.data;
      const { page, limit, ...queries } = req.query;

      const filteredData = comments.filter((obj) => {
        return Object.entries(queries).every(([key, value]) => {
          return value !== undefined ? String(obj[key]) === value : true;
        });
      });
      const sortedData = [...filteredData].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 
      const slicedData = sortedData.slice(startIndex, endIndex);

      const data = await Promise.all(slicedData.map(async(obj) => {
        const userDetail = await UserService.getById({ ...req, params: { id: obj.user_id }});
        return { ...obj, user: userDetail?.data };
      }));

      return {
        type: true,
        message: 'Comments has been fetched',
        data
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
      const { id: authorizedUserId } = req.user;
      const { comments } = commentsDB.data;
      const nextId = Math.max(...comments.map(comment => comment.id), 0) + 1;
      const data = req.body;
      data.id = nextId;
      data.user_id = authorizedUserId;
      data.likes = [];
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
      data.is_removed = false;
      comments.push(data);
      await commentsDB.write();

      const createdData = await CommentService.getById({ ...req, params: { id: data.id } });
      if (!createdData.type) {
        return {
          type: false,
          message: "Couldn't fetch created data"
        };
      }

      const user = await UserService.getById({ ...req, params: { id: data.user_id }});
      const result = { ...createdData.data, user: user.data };

      const postService = await PostService.getById({ ...req, params: { id: data.post_id } });
      if (!postService.type) {
        return {
          type: false,
          message: postService.message
        };
      }

      //* if user makes a comment for a post who is not created by himself/herself, then create a notification
      if (postService.data.user_id !== authorizedUserId) {
        const notificationService = await NotificationService.create({ 
          ...req,
          body: { 
            receiver_id: postService.data.user_id,
            sender_id: authorizedUserId,
            type: NotificationEnums.COMMENTED_POST,
            post_id: data.post_id
          } 
        });
  
        if (!notificationService.type) {
          return {
            type: false,
            message: notificationService.message
          };
        }
      }
      
      return {
        type: true,
        message: 'Comment is created',
        data: result
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
      const { id: authorizedUserId } = req.user;
      const commentService = await LikeService.createForComment(req, res);
      if (!commentService.type) {
        return {
          type: false,
          message: commentService.message
        };
      }

      const { id, like } = req.body;

      //* If user likes or withdraw like for her/him comment, don't create or delete notification
      if (commentService.data.user_id === authorizedUserId) {
        return {
          type: true,
          message: commentService.message,
          data: commentService.data
        };
      }

      //* User likes a comment, create a notification for it
      if (like) {
        const commentService = await CommentService.getById({ ...req, params: { id }});
        if (!commentService.type) {
          return {
            type: false,
            message: commentService.message
          };
        }

        const notificationService = await NotificationService.create({ 
          ...req,
          body: {
            sender_id: authorizedUserId,
            receiver_id: commentService.data.user_id,
            type: NotificationEnums.LIKED_COMMENT,
            post_id: commentService.data.post_id
          } 
        });
        if (!notificationService.type) {
          return {
            type: false,
            message: notificationService.message
          };
        }
      } 
      
      //* User withdraw her/his like for a comment, delete this notification
      if (!like) {
        //* Find target notification
        const notificationService = await NotificationService.get({
          ...req,
          query: {
            is_removed: false,
            type: NotificationEnums.LIKED_COMMENT,
            receiver_id: commentService.data.user_id,
            sender_id: authorizedUserId
          }
        });
        if (!notificationService.type) {
          return {
            type: false,
            message: notificationService.message
          };
        }

        //* Delete target notification
        const deleteNotificationService = await NotificationService.delete({ ...req, body: { notification_ids: [notificationService.data.notifications[0].id] } });
        
        if (!deleteNotificationService.type) {
          return {
            type: false,
            message: deleteNotificationService.message
          };
        }
      }

      return {
        type: true,
        message: commentService.message,
        data: commentService.data
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
      const { id: authorizedUserId } = req.user;
      const { comments } = commentsDB.data;
      
      const index = comments.findIndex((obj) => obj.id === parseInt(id));
      if (index === -1) {
        return {
          type: false,
          message: `Comment with id ${id} couldn't find`
        };
      }

      const commentData = { ...comments[index], is_removed: true };
      comments.splice(index, 1, commentData);
      await commentsDB.write();

      //* if user delete a comment for his/her post.
      if (authorizedUserId === comments[index].post_id) {
        return {
          type: true,
          message: 'Comment is removed'
        };
      }

      //* if user delete a comment for a post which is created by another user.
      //* Find target post firstly
      const postService = await PostService.getById({ ...req, params: { id: comments[index].post_id } });
      if (!postService.type) {
        return {
          type: false,
          message: postService.message
        };
      }

      //* Find target notification
      const notificationService = await NotificationService.get({
        ...req,
        query: {
          is_removed: false,
          type: NotificationEnums.COMMENTED_POST,
          receiver_id: postService.data.user_id,
          sender_id: authorizedUserId
        }
      });
      if (!notificationService.type) {
        return {
          type: false,
          message: notificationService.message
        };
      }

      //* Delete target notification
      if (notificationService.data.notifications?.[0]?.id) {
        const deleteNotificationService = await NotificationService.delete({ 
          ...req,
          body: { 
            notification_ids: [notificationService.data.notifications[0].id] 
          }
        });
        
        if (!deleteNotificationService.type) {
          return {
            type: false,
            message: deleteNotificationService.message
          };
        }
      }
      
      return {
        type: true,
        message: 'Comment is removed'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async edit(req, res) {
    try {
      const { id, comment } = req.body;
      const { comments } = commentsDB.data;
      
      const index = comments.findIndex((obj) => obj.id === parseInt(id));
      if (index === -1) {
        return {
          type: false,
          message: `Comment with id ${id} couldn't find`
        };
      }
      
      const commentData = { ...comments[index], comment, updated_at: new Date() };
      comments.splice(index, 1, commentData);
      await commentsDB.write();

      return {
        type: true,
        message: 'Comment is edited'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
}
  
export default CommentService;