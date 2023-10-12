import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import ProtectedRoute from './ProtectedRoute';

const RouteList = () => {
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
