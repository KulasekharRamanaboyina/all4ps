import type { Metadata } from "next";
import { CASE_STUDIES } from "../../constants";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; // ✅ REQUIRED IN NEXT 16

  const client = CASE_STUDIES.find((c) => c.id === id);

  if (!client) {
    return {
      title: "Case Study | all4Ps",
      description:
        "B2B growth case study by all4Ps – marketing that drives revenue.",
    };
  }

  const title = `${client.client} Case Study | all4Ps`;
  const description = client.description;
  const url = `https://www.all4ps.co/portfolio/${id}`;
  const image = `https://www.all4ps.co/images/og/${id}-hero.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "all4Ps",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
