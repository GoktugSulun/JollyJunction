import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
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

// MODAL
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
    /*
      * Reset scroll and start page from the top when page is reload or path is changed
      * Dont do it when postDetailModal exists, ...
      * ... Because it causes to intersect for the first element of posts and if it has a video, it causes "use effect in Video compoenent for dashboard post" to work incorrectly
    */
    if (!postDetailModal) {
      window.scrollTo(0, 0);
    }
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
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};

export default RouteList;
