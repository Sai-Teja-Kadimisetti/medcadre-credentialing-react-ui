const getEnvVariable = (key: string, defaultValue = ''): string => {
    return process.env[key] || defaultValue;
};

export const API_URL = getEnvVariable('REACT_APP_API_URL');
export const S3_BUCKET_URL = getEnvVariable('REACT_APP_S3_BUCKET_URL');
export const AI_API_URL = getEnvVariable('REACT_APP_AI_API_URL');
