// Import Next.js types (if needed) for TypeScript compatibility
import type { NextConfig } from "next";
const withPWA = require('next-pwa')({
  dest: 'public',
});

// Export the configuration with any additional Next.js settings
const nextConfig: NextConfig = {
  // Add other Next.js configurations here if needed
};

module.exports = withPWA(nextConfig);
