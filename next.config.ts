// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {};

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.all4ps.co",
          },
        ],
        destination: "https://all4ps.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
