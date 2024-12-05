import React from 'react';
import { Routes, Route } from 'react-router-dom';

const ApplicationConfig = React.lazy(() => import('../pages/Configuration/ApplicationConfig'));
const CustomerConfig = React.lazy(() => import('../pages/Configuration/CustomerConfig'));
const FacilityConfig = React.lazy(() => import('../pages/Configuration/FacilityConfig'));
const JobTitleConfig = React.lazy(() => import('../pages/Configuration/JobTitleConfig'));
const FieldValueConfig = React.lazy(() => import('../pages/Configuration/FieldValueConfig'));
const DocumentParserConfig = React.lazy(() => import('../pages/Configuration/DocumentParserConfig'));
const NotificationConfig = React.lazy(() => import('../pages/Configuration/NotificationConfig'));
const ValidationFieldsConfig = React.lazy(() => import('../pages/Configuration/ValidationFieldsConfig'));
const DocumentTypesConfig = React.lazy(() => import('../pages/Configuration/DocumentTypesConfig'));
const NotFound = React.lazy(() => import('../pages/Errors/NotFound'));

const ConfigurationRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading configuration...</div>}>
      <Routes>
        <Route path="application" element={<ApplicationConfig />} />
        <Route path="notification" element={<NotificationConfig />} />
        <Route path="customer" element={<CustomerConfig />} />
        <Route path="facility" element={<FacilityConfig />} />
        <Route path="job-title" element={<JobTitleConfig />} />
        <Route path="field-value" element={<FieldValueConfig />} />
        <Route path="document-parser" element={<DocumentParserConfig />} />
        <Route path="validation-fields" element={<ValidationFieldsConfig />} />
        <Route path="document-types" element={<DocumentTypesConfig />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default ConfigurationRoutes;
