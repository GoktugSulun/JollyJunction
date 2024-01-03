import { JSONFilePreset } from 'lowdb/node';
import path from 'path';

const __dirname = path.resolve();

export const postsDB = await JSONFilePreset(__dirname + '/db/posts.json', { posts: [] });
export const usersDB = await JSONFilePreset(__dirname + '/db/users.json', { users: [] });
export const commentsDB = await JSONFilePreset(__dirname + '/db/comments.json', { comments: [] });
export const notificationsDB = await JSONFilePreset(__dirname + '/db/notifications.json', { notifications: [] });
export const likesDB = await JSONFilePreset(__dirname + '/db/likes.json', { likes: [] });
export const savesDB = await JSONFilePreset(__dirname + '/db/saves.json', { saves: [] });
export const friendsDB = await JSONFilePreset(__dirname + '/db/friends.json', { friends: [] });
export const advertisementsDB = await JSONFilePreset(__dirname + '/db/advertisements.json', { advertisements: [] });