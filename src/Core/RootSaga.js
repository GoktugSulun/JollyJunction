import Dashboard from '../Pages/Dashboard/Store/Dashboard.saga';
import Login from '../Pages/Login/Store/Login.saga';
import Register from '../Pages/Register/Store/Register.saga';
import Notification from '../Components/Header/Components/Notifications/Store/Notificaiton.saga';

export default [
   Dashboard,
   Login,
   Register,
   Notification,
].flat();