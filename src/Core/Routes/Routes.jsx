import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import Loading from '../Components/Loading/Loading';
import { FullSizeLoadingWrapper } from '../Components/Pages/FullSizeLoadingWrapper.style';
import { AppConfigSagaActions } from '../Store/AppConfig.saga';

// PAGES
const Dashboard = lazy(() => import('../../Pages/Dashboard/Dashboard'));
const Login = lazy(() => import('../../Pages/Login/Login'));
const Register = lazy(() => import('../../Pages/Register/Register'));
const UserProfile = lazy(() => import('../../Pages/UserProfile/UserProfile'));
const Notifications = lazy(() => import('../../Pages/Notifications/Notifications'));
const Layout = lazy(() => import('../../Pages/Layout/Layout'));
const Settings = lazy(() => import('../../Pages/Settings/Settings'));

const RouteList = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const location = useLocation();
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  useEffect(() => {
    if (!authorizedUser?.id && token) {
      dispatch(AppConfigSagaActions.getInit());
    }
  }, [authorizedUser?.id, token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!authorizedUser?.id && token) {
    return (
      <FullSizeLoadingWrapper>
        <Loading size={80} />
      </FullSizeLoadingWrapper>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute isAllowed />}>
        <Route element={<Layout /> }>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:user/:id" element={<UserProfile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<div> Page Not Found! </div>} />
    </Routes>
  );
};

export default RouteList;
