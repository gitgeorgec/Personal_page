/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/Personal_page" : "",
  output: "export",
};

module.exports = nextConfig;
