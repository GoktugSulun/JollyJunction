import { JSONPreset } from 'lowdb/node';

export const postsDB = await JSONPreset('./db/posts.json', { posts: [] });
export const usersDB = await JSONPreset('./db/users.json', { users: [] });
export const commentsDB = await JSONPreset('./db/comments.json', { comments: [] });
export const notificationsDB = await JSONPreset('./db/notifications.json', { notifications: [] });
export const likesDB = await JSONPreset('./db/likes.json', { likes: [] });
export const savesDB = await JSONPreset('./db/saves.json', { saves: [] });
export const friendsDB = await JSONPreset('./db/friends.json', { friends: [] });