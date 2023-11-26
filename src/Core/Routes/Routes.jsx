import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../Components/Loading/Loading';
import { FullSizeLoadingWrapper } from '../Components/Pages/FullSizeLoadingWrapper.style';
import { AppConfigSagaActions } from '../Store/AppConfig.saga';

// PAGES
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import UserProfile from '../../Pages/UserProfile/UserProfile';
import Notifications from '../../Pages/Notifications/Notifications';
import Layout from '../../Pages/Layout/Layout';

const RouteList = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  useEffect(() => {
    if (!authorizedUser?.id && token) {
      dispatch(AppConfigSagaActions.getInit());
    }
  }, [authorizedUser?.id, token]);

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
      </Route>
      <Route path="*" element={<div> Page Not Found! </div>} />
    </Routes>
  );
};

export default RouteList;
