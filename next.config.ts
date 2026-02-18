// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {};

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // prevents extra trailing slash redirects
  trailingSlash: false,

  async redirects() {
    return [
      // 1️⃣ Redirect WWW → non-WWW
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.all4ps.co",
          },
        ],
        destination: "https://all4ps.co/:path*",
        permanent: true, // SEO permanent redirect
      },

      // 2️⃣ Force HTTP → HTTPS
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://all4ps.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
