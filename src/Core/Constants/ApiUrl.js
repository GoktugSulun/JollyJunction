export const ApiUrl = Object.freeze({
  //* Init
  getInit: '/Init/get',

  //* User
  getAllUsers: '/User/getAll',
  getUserById: '/User/getById',
  createUser: '/User/create',

  //* Post
  getAllPosts: '/Post/getAll',
  getPostById: '/Post/getById',
  getPosts: '/Post/get',
  deletePost: '/Post/delete',
  createPost: '/Post/create',
  likeUnlikePost: '/Post/like',
  saveUnsavePost: '/Post/save',

  //* Notificaiton
  getNotifications: '/Notification/get',
  markNotificationsSeen: '/Notification/seen',
  markNotificationsRead: '/Notification/read',
  deleteNotifications: '/Notification/delete',
  friendship: '/Notification/friendship',
  addFriend: '/Notification/addFriend',
  cancelFriendshipRequest: '/Notification/cancel',
  acceptFriendship: '/Notification/acceptFriendship',

  //* Friend
  getFriends: '/Friend/get',
  deleteFriend: '/Friend/delete',

  //* Comment
  getAllComments: '/Comment/getAll',
  getCommentById: '/Comment/getById',
  getComments: '/Comment/get',
  createComment: '/Comment/create',
  likeComment: '/Comment/like',
  deleteComment: '/Comment/delete',
  editComment: '/Comment/edit',

});