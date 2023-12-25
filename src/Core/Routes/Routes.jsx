import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
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
import Settings from '../../Pages/Settings/Settings';
import PostModal from '../../Components/PostModal/PostModal';

const RouteList = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const location = useLocation();
  const postDetailModal = location.state?.postDetailModal;
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  useEffect(() => {
    if (!authorizedUser?.id && token) {
      dispatch(AppConfigSagaActions.getInit());
    }
  }, [authorizedUser?.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const scrollTo = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', scrollTo);
    return () => {
      window.removeEventListener('beforeunload', scrollTo);
    };
  }, []);

  if (!authorizedUser?.id && token) {
    return (
      <FullSizeLoadingWrapper>
        <Loading size={80} />
      </FullSizeLoadingWrapper>
    );
  }

  return (
    <>
      <Routes location={postDetailModal || location}>
        <Route element={<ProtectedRoute isPrivate  redirectPath="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed />}>
          <Route element={<Layout /> }>
            <Route path="/" element={<Dashboard />} />
            <Route path="/post/:id" element={<PostModal />} />
            <Route path="/profile/:user/:id" element={<UserProfile />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<div> Page Not Found! </div>} />
      </Routes>
      {
        postDetailModal && <Routes>
          <Route path="/post/:id" element={<PostModal />} />
        </Routes>
      }
    </>
  );
};

export default RouteList;
