import React, { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainWrapper } from '../Components/Pages/MainWrapper.style';
import Header from '../../Components/Header/Header';
import SettingsModal from '../../Components/SettingsModal/SettingsModal';

const ProtectedRoute = ({ isAllowed, redirectPath }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <MainWrapper>
      <Header />
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
      <SettingsModal />
    </MainWrapper>
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool,
  redirectPath: PropTypes.string
};

ProtectedRoute.defaultProps = {
  isAllowed: true,
  redirectPath: '/login',
};