/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.balaan.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
