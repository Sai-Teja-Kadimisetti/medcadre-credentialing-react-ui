import React from 'react';
import { AI_API_URL, API_URL, S3_BUCKET_URL } from './utils/env';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Environment Information</h1>
      <ul>
        <li><strong>API URL:</strong> {API_URL}</li>
        <li><strong>S3 Bucket URL:</strong> {S3_BUCKET_URL}</li>
        <li><strong>AI API URL:</strong> {AI_API_URL}</li>
      </ul>
    </div>
  );
};

export default App;
