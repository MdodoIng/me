import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGithubPages = Boolean(process.env.IS_GITHUB_PAGES ?? false);


const nextConfig: NextConfig = {
  /* config options here */

  output: isGithubPages ? "export" : "standalone",

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
