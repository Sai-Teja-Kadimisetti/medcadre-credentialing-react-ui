import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/Auth/Login'));
const ForgotPassword = React.lazy(() => import('../pages/Auth/ForgotPassword'));
const SignUp = React.lazy(() => import('../pages/Auth/SignUp'));
const ResetPassword = React.lazy(() => import('../pages/Auth/ResetPassword'));
const NotFound = React.lazy(() => import('../pages/Errors/NotFound'));

const AuthRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading auth routes...</div>}>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="sign-up/:signUpVerificationCode" element={<SignUp />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AuthRoutes;
