import { ProjectContainer } from "@/components/project/ProjectContainer";
import { supabase } from "@/lib/supabase";

interface PromptPageContentProps {
  params: Promise<{ id: string }>;
}

export default async function PromptPageContent({
  params,
}: PromptPageContentProps) {
  const fakePromptData = {
    id: "123",
    current_stage: "initial_idea",
    status: "active",
    user_id: "user123",
    task_specification: { task: "example task" },
    calibration_specification: { calibration: "example calibration" },
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-02T00:00:00Z",
  };

  //const { id } = await params

  /*

    const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        throw new Error(`Error fetching prompt: ${error.message}`)
    }
    */

  return (
    <ProjectContainer className="flex w-full h-screen text-neutral-700 bg-neutral-100 dark:bg-primary dark:text-white">
      <div className="flex flex-col w-full h-full  bg-green-300 dark:bg-primary dark:text-white">
        content for prompt
      </div>
    </ProjectContainer>
  );
}
