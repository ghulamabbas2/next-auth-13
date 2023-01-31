/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb://localhost:27017/next13-auth",
    NEXTAUTH_SECRET: "codingwithabbas",

    GOOGLE_CLIENT_ID:
      "865030625249-8t2mrqdcp0rm50apatkfmav8uhicl1b0.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

    GITHUB_ID: "b4d18396ed3611d8f8ac",
    GITHUB_SECRET: "1779a43f7d4d4f3256197e8575242acf325cb569",
  },
};

module.exports = nextConfig;
