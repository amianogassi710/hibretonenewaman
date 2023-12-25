/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/tax-credits-calculator/:path*',
        destination: 'http://127.0.0.1:8000/:path*', // Your FastAPI endpoint
      },
      {
        source: '/assessments/:path*',
        destination: 'http://127.0.0.1:8000/:path*', // Your FastAPI endpoint
      },
      // Add more rewrites as needed
    ];
  },
};

module.exports = nextConfig;
