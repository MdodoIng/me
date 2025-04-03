import type { NextConfig } from "next";
import { isGithubPages } from "./libs/helpers";

const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
  /* config options here */

  // output: isGithubPages ? "export" : "standalone",

  images: {
    unoptimized: true,
  },
  experimental: {
    viewTransition: true,
  },
  ...(isProd &&
    isGithubPages && {
      basePath: "/me",
      assetPrefix: "/me",
    }),
};

export default nextConfig;
