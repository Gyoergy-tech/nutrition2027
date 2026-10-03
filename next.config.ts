import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGithubPages ? "/nutrition2027" : "",
  assetPrefix: isGithubPages ? "/nutrition2027/" : "",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;