const settings = {
    environment: process.env.NODE_ENV,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    auth: {
      secret: process.env.AUTH_SECRET || 'your_secret',
    },
  }
  export default settings
  
  export const isDevEnvironment = settings.environment === 'development'
  