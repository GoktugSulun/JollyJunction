<<<<<<< HEAD
import DashboardSaga from '../Pages/Dashboard/Store/Dashboard.saga';

export default [
   DashboardSaga,
=======
import Dashboard from '../Pages/Dashboard/Store/Dashboard.saga';
import Login from '../Pages/Login/Store/Login.saga';
import Register from '../Pages/Register/Store/Register.saga';
import UserProfile from '../Pages/UserProfile/Store/UserProfile.saga';
import Notifications from '../Pages/Notifications/Store/Notifications.saga';
import PostModal from '../Components/PostModal/Store/PostModal.saga';
import AppConfig from './Store/AppConfig.saga';

export default [
  Dashboard,
  Login,
  Register,
  UserProfile,
  Notifications,
  PostModal,
  AppConfig,
>>>>>>> 0452f2104a19d0a98bf9eeeece832c5cb872d4bf
].flat();