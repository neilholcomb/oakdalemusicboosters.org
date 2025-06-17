// Configuration utility for environment variables
// This handles both local development and Vercel deployment

export const config = {
  square: {
    accessToken: process.env.SQUARE_ACCESS_TOKEN || '',
    applicationId: process.env.SQUARE_APPLICATION_ID || '',
    environment: process.env.SQUARE_ENVIRONMENT || 'sandbox', // 'sandbox' or 'production'
  },
} as const;

// Validation function to check if required environment variables are set
export const validateSquareConfig = () => {
  const { accessToken, applicationId } = config.square;

  if (!applicationId) {
    throw new Error('SQUARE_APPLICATION_ID environment variable is required');
  }

  if (!accessToken) {
    throw new Error('SQUARE_ACCESS_TOKEN environment variable is required');
  }

  return true;
};

// Helper to check if we're in development mode
export const isDevelopment = 'development' === process.env.NODE_ENV;
