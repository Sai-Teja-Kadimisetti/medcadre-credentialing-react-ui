import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import NotFound from '../pages/Errors/NotFound';
import ProtectedRoutes from './ProtectedRoutes';

const ForgotPassword = React.lazy(() => import('../pages/Auth/ForgotPassword'));
const SignUp = React.lazy(() => import('../pages/Auth/SignUp'));
const ResetPassword = React.lazy(() => import('../pages/Auth/ResetPassword'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/*" element={<ProtectedRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
