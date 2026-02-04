import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact all4Ps | B2B Growth & Marketing Strategy Agency",
  description:
    "Contact all4Ps to discuss B2B growth, marketing strategy, SEO, and go-to-market execution.",
  alternates: {
    canonical: "https://www.all4ps.co/contact",
  },
  openGraph: {
    title: "Contact all4Ps | B2B Growth & Marketing Strategy Agency",
    description:
      "Start a conversation with all4Ps about B2B growth, marketing strategy, SEO, and GTM execution.",
    url: "https://www.all4ps.co/contact",
    siteName: "all4Ps",
    images: [
      {
        url: "https://www.all4ps.co/images/og/contact-page.png",
        width: 1200,
        height: 630,
        alt: "Contact all4Ps",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact all4Ps | B2B Growth & Marketing Strategy Agency",
    description:
      "Talk to all4Ps about B2B growth, marketing strategy, SEO, and go-to-market execution.",
    images: ["https://www.all4ps.co/images/og/contact-page.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactClient />

      {/* ================= Contact Page Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact all4Ps",
            url: "https://www.all4ps.co/contact",
            description:
              "Get in touch with all4Ps to discuss B2B growth, marketing strategy, SEO, and go-to-market execution.",
            mainEntity: {
              "@type": "Organization",
              name: "all4Ps",
              url: "https://www.all4ps.co",
              logo: "https://www.all4ps.co/images/logo-black.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business Inquiries",
                email: "grow@all4ps.co",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />
    </>
  );
}
