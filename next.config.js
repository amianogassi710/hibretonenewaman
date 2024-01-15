/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/tax-credits-calculator/:path*',
        destination: 'https://tax-credits-calculator-backend.vercel.app/:path*', // Your FastAPI endpoint
      },
      {
        source: '/assessments/:path*',
        destination: 'https://entrepreneurial-assessments-backend.vercel.app/:path*', // Your FastAPI endpoint
      },
      {
        source: '/grants/:path*',
        destination: 'https://grantfinder-backend-fastapi.onrender.com/grants/:path*', // Your FastAPI endpoint
      },
      // Add more rewrites as needed
      
    ];
  },
};

module.exports = nextConfig;
