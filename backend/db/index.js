import { JSONFilePreset } from 'lowdb/node';

export const postsDB = await JSONFilePreset('./db/posts.json', { posts: [] });
export const usersDB = await JSONFilePreset('./db/users.json', { users: [] });
export const commentsDB = await JSONFilePreset('./db/comments.json', { comments: [] });
export const notificationsDB = await JSONFilePreset('./db/notifications.json', { notifications: [] });
export const likesDB = await JSONFilePreset('./db/likes.json', { likes: [] });
export const savesDB = await JSONFilePreset('./db/saves.json', { saves: [] });
export const friendsDB = await JSONFilePreset('./db/friends.json', { friends: [] });
export const advertisementsDB = await JSONFilePreset('./db/advertisements.json', { advertisements: [] });