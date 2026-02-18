import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import VisibilityTitle from "./components/VisibilityTitle";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";

/* ================= FONT SETUP (FIXED) ================= */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

/* ================= METADATA ================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://all4ps.co"),

  title: "all4Ps | B2B Growth & Marketing Strategy Agency",
  description:
    "We help SaaS, tech, and industrial companies drive pipeline and revenue through intentional B2B marketing.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "all4Ps | B2B Growth & Marketing Strategy Agency",
    description:
      "We help SaaS, tech, and industrial companies drive pipeline and revenue through intentional B2B marketing.",
    url: "https://all4ps.co",
    siteName: "all4Ps",
    type: "website",
    images: [
      {
        url: "https://all4ps.co/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">
        {/* ================= Google Analytics ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WF2VTZ5Z21"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WF2VTZ5Z21');
  `}
        </Script>

        {/* ================= Header ================= */}
        <Navbar />
        <VisibilityTitle />

        {/* ================= Page Content ================= */}
        <main className="pt-16">{children}</main>

        <ScrollTopButton />
        <Footer />

        {/* ================= Organization Schema ================= */}

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "all4Ps",
              url: "https://all4ps.co",
              logo: "https://all4ps.co/images/logo-black.png",
              description:
                "all4Ps is a B2B growth and marketing strategy agency helping SaaS, tech, and industrial companies drive pipeline and revenue.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business Inquiries",
                email: "grow@all4ps.co",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.linkedin.com/company/all4ps",
                "https://www.instagram.com/all4ps",
                "https://twitter.com/all4ps",
                "https://www.facebook.com/all4ps",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
