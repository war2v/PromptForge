import { ProjectContainer } from "@/components/project/ProjectContainer";
import { Suspense } from "react";
import PromptPageContent from "./_componets/PromptPageContent";


interface PromptPageProps {
  params: Promise<{ id: string }>;
}

export default async function PromptPage({ params }: PromptPageProps) {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex">
        <Suspense>
          <PromptPageContent params={params} />
        </Suspense>
      </div>
    </div>
  );
}
