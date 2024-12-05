import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const UniversalDocumentConfig = React.lazy(() => import('../pages/AssignDocumentTypes/UniversalDocumentConfig'));
const CustomerDocumentConfig = React.lazy(() => import('../pages/AssignDocumentTypes/CustomerDocumentConfig'));
const FacilityNameDocumentConfig = React.lazy(() => import('../pages/AssignDocumentTypes/FacilityNameDocumentConfig'));
const FacilityStateDocumentConfig = React.lazy(() => import('../pages/AssignDocumentTypes/FacilityStateJobTitleConfig'));
const FacilityStateJobTitleConfig = React.lazy(() => import('../pages/AssignDocumentTypes/FacilityStateJobTitleConfig'));
const JobTitleDocumentConfig = React.lazy(() => import('../pages/AssignDocumentTypes/JobTitleDocumentConfig'));
const ParserDocumentConfig = React.lazy(() => import('../pages/AssignDocumentTypes/ParserDocumentConfig'));
const NotFound = React.lazy(() => import('../pages/Errors/NotFound'));

const AssignDocumentTypesRoutes: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading document types...</div>}>
            <Routes>
                <Route path="universal" element={<UniversalDocumentConfig />} />
                <Route path="customer" element={<CustomerDocumentConfig />} />
                <Route path="facility-name" element={<FacilityNameDocumentConfig />} />
                <Route path="facility-state" element={<FacilityStateDocumentConfig />} />
                <Route path="facility-state-job-title" element={<FacilityStateJobTitleConfig />} />
                <Route path="job-title" element={<JobTitleDocumentConfig />} />
                <Route path="parser" element={<ParserDocumentConfig />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AssignDocumentTypesRoutes;
