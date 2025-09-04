// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;





import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Cloudinary support
      },
      {
        protocol: "https",
        hostname: "ibb.co", // ✅ ImgBB support
      },
      {
        protocol: "http",
        hostname: "localhost", // ✅ local dev images
      },
    ],
  },
};

export default nextConfig;

