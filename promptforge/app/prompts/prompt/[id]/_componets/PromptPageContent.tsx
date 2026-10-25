import { ProjectContainer } from "@/components/project/ProjectContainer";

interface PromptPageContentProps{
    params: Promise<{ id: string}>
}

export default async function PromptPageContent({params}: PromptPageContentProps){
    const { id } = await params

    return (
        <ProjectContainer id={id}>
            Container for project: {id}
        </ProjectContainer>
    );
}