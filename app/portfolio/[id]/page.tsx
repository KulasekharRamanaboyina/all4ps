import { CASE_STUDIES } from "../../constants";
import ClientPageUI from "../[id]/ClientPageUI";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const client = CASE_STUDIES.find((c) => c.id === id);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Client Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <ClientPageUI client={client} />

      {/* ================= Case Study Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            name: `${client.client} Case Study`,
            url: `https://www.all4ps.co/portfolio/${id}`,
            description: client.description,
            about: {
              "@type": "Service",
              name: "B2B Marketing Services",
            },
            provider: {
              "@type": "Organization",
              name: "all4Ps",
              url: "https://www.all4ps.co",
              logo: "https://www.all4ps.co/images/logo-black.png",
            },
            audience: {
              "@type": "Audience",
              audienceType: "B2B companies",
            },
          }),
        }}
      />
    </>
  );
}
