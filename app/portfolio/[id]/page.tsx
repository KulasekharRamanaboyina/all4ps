import { CASE_STUDIES } from "../../constants";
import ClientPageUI from "../[id]/ClientPageUI";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params; // ✅ REQUIRED IN NEXT 16

  const client = CASE_STUDIES.find((c) => c.id === id);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Client Not Found</h1>
      </div>
    );
  }

  return <ClientPageUI client={client} />;
}
