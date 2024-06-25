/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: false,
  images: {
    domains: ["cdn2.thecatapi.com"],
  },
};

export default nextConfig;
