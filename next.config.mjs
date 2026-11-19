/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: false },
  outputFileTracingIncludes: { "/**": ["./src/content/generated/**/*"] },
};
export default nextConfig;
