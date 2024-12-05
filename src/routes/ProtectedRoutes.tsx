import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from '../pages/Dashboard/Dashboard';
import AssignDocumentTypesRoutes from './AssignDocumentTypesRoutes';
import AssignmentRoutes from './AssignmentRoutes';
import ConfigurationRoutes from './ConfigurationRoutes';
import AccessDenied from '../pages/Errors/AccessDenied';

const ProtectedRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<div>Loading protected routes...</div>}>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assign-document-types/*" element={<AssignDocumentTypesRoutes />} />
        <Route path="assignments/*" element={<AssignmentRoutes />} />
        <Route path="configuration/*" element={<ConfigurationRoutes />} />
        <Route path="*" element={<AccessDenied />} />
      </Routes>
    </Suspense>
  );
};

export default ProtectedRoutes;
