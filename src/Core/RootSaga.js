import Dashboard from '../Pages/Dashboard/Store/Dashboard.saga';
import Login from '../Pages/Login/Store/Login.saga';
import Register from '../Pages/Register/Store/Register.saga';
import UserProfile from '../Pages/UserProfile/Store/UserProfile.saga';
import Notification from '../Components/Header/Components/Notifications/Store/Notification.saga';

export default [
  Dashboard,
  Login,
  Register,
  UserProfile,
  Notification,
].flat();