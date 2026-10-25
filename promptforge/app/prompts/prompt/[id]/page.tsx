import { ProjectContainer } from "@/components/project/ProjectContainer";
import { Suspense } from "react";
import PromptPageContent from "./_componets/PromptPageContent";

interface PromptPageProps {
    params: Promise<{id: string}>;
}

export default async function PromptPage({ params }: PromptPageProps) {
    
    return (
        <Suspense>
            <PromptPageContent params={params}/>
        </Suspense>
        
    );
}