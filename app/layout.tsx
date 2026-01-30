// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   icons: {
//     icon: "/favicon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Manrope:wght@700;800&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "all4Ps | B2B Growth & Marketing Strategy Agency",
  description:
    "We help SaaS, tech, and industrial companies drive pipeline and revenue through intentional B2B marketing.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ================= Google Fonts ================= */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Manrope:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {/* ================= Header ================= */}
        <Navbar />

        {/* ================= Page Content ================= */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
