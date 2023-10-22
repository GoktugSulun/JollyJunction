import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { LoginSagaActions } from '../../Pages/Login/Store/Login.saga';
import _ from 'lodash';
import Loading from '../Components/Loading/Loading';
import { FullSizeLoadingWrapper } from '../Components/Pages/FullSizeLoadingWrapper.style';

const RouteList = () => {
   const token = localStorage.getItem('token');
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.Login);

   useEffect(() => {
      if (_.isEmpty(user) && token) {
         const user_id = localStorage.getItem('user_id');
         dispatch(LoginSagaActions.getUser({ user_id }));
      }
   }, [user, token]);

   if (!user?.id) {
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
            <Route path="/" element={<Dashboard />} />
         </Route>
         <Route path="*" element={<div> Page Not Found! </div>} />
      </Routes>
   );
};

export default RouteList;
