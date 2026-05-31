/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/lawn-treatment", destination: "/#program", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#quote-form", permanent: true }
    ];
  }
};

export default nextConfig;
