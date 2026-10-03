import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const basePath = isGithubPages ? "/nutrition2027" : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,

  assetPrefix: basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;