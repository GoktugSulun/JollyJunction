import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAllowed, redirectPath }) => {
   const token = localStorage.getItem('token');

   if (!token) {
      return <Navigate to="/login" replace />;
   }

   if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
   }

   return (
      <>
         <Outlet />
      </>
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