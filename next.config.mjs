/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The migrated CRA codebase uses plain <img> tags with assets served from
  // /public/assets. Image optimization via next/image is an opt-in follow-up
  // (see MIGRATION_REPORT.md). No remote image domains are required because the
  // only remote images live inside CSS background-image rules.
};

export default nextConfig;
