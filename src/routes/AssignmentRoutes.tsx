import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const CreateAssignment = React.lazy(() => import('../pages/Assignments/CreateAssignment'));
const AllCandidateDetails = React.lazy(() => import('../pages/Assignments/AllCandidates'));
const ExpiryDocumentList = React.lazy(() => import('../pages/Assignments/ExpiredDocuments'));
const NotFound = React.lazy(() => import('../pages/Errors/NotFound'));

const AssignmentRoutes: React.FC = () => {

  return (
    <Suspense fallback={<div>Loading assignments...</div>}>
      <Routes>
        <Route path="create" element={<CreateAssignment />} />
        <Route path="all-candidates" element={<AllCandidateDetails />} />
        <Route path="expiry-documents" element={<ExpiryDocumentList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AssignmentRoutes;
