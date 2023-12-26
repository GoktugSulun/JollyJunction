import React, { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainWrapper } from '../Components/Pages/MainWrapper.style';
import Header from '../../Components/Header/Header';
import SettingsModal from '../../Components/SettingsModal/SettingsModal';
import SuspenseFallback from './SuspenseFallback';

const ProtectedRoute = ({ isAllowed, redirectPath, state, isPrivate }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (isPrivate) {
    if (!token) {
      return (
        <Suspense fallback={<SuspenseFallback />}>
          <Outlet />
        </Suspense>
      );
    }
    return <Navigate to={redirectPath} replace state={state} />;
  }

  if (!token) {
    localStorage.setItem('targetLocation', location.pathname);
    return <Navigate to="/login" replace state={state} />;
  }

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={state} />;
  }

  return (
    <MainWrapper>
      <Header />
      <Suspense fallback={<SuspenseFallback height="calc(100vh - 90px)" />}>
        <Outlet />
      </Suspense>
      <SettingsModal />
    </MainWrapper>
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool,
  isPrivate: PropTypes.bool,
  redirectPath: PropTypes.string,
  state: PropTypes.any,
};

ProtectedRoute.defaultProps = {
  isAllowed: true,
  isPrivate: false,
  redirectPath: '/login',
  state: null
};