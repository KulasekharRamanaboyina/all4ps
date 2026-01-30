import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | all4Ps – B2B Growth Case Studies",
  description:
    "Explore real B2B growth case studies by all4Ps. See how we help SaaS, tech, and industrial companies drive pipeline, revenue, and brand clarity.",
  alternates: {
    canonical: "https://www.all4ps.co/portfolio",
  },
  openGraph: {
    title: "Portfolio | all4Ps",
    description: "Real B2B growth case studies. No fluff.",
    url: "https://www.all4ps.co/portfolio",
    type: "website",
    images: [
      {
        url: "https://www.all4ps.co/images/portfolio/unbox-hero.jpg",
        width: 1200,
        height: 630,
        alt: "all4Ps Portfolio",
      },
    ],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
