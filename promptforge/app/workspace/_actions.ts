import { supabase } from "@/lib/supabase"
import { PromptProject } from "@/types/prompt"


export const saveData = async (project_data: PromptProject) => {
    console.log(project_data)
    
    const  { data, error } = await supabase
        .from("prompts")
        .insert([
            { "original_idea": project_data.original_idea},
            { "user_id": project_data.user_id}
        ])
        .select()

        console.log(data)

    return 

}