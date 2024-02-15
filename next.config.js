/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],

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
      {
        source: '/business-problem-triage/:path*',
        destination: 'http://127.0.0.1:8000/search/:path*'
      },
      {
        source: '/auth/:path*',
        destination: 'http://8.134.196.184:8000/:path*', // Your FastAPI endpoint
      },
    ];
  },
};

module.exports = nextConfig;
