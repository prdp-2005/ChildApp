// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Other configurations can be added here
});

const nextConfig = {
  // Additional Next.js config options can go here
};

module.exports = withPWA(nextConfig);
