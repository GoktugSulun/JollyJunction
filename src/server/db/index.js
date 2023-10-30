import { JSONPreset } from 'lowdb/node';

export const postsDB = await JSONPreset('./db/posts.json', { posts: [] });
export const usersDB = await JSONPreset('./db/users.json', { users: [] });
export const commentsDB = await JSONPreset('/db/comments.json', { comments: [] });
export const notificationsDB = await JSONPreset('/db/notifications.json', { notifications: [] });