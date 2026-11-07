"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@base-ui/react/form";
import Link from "next/link";
import { usePrompt } from "@/components/providers/PromptProvider";
import { ArrowUp } from "lucide-react";
import { saveData } from "../_actions";
import { PromptProject } from "@/types/prompt";
import { useRouter } from "next/navigation";


export default function PromptsPage() {
    const router = useRouter()
    const{
        promptId,
        setOriginalIdea,
        allData
    } = usePrompt();

    const onSubmit = async (projectData: PromptProject) => {
        const {data, error} = await saveData(projectData);
        router.push(`/workspace/${id}`)
    }

   
  return (
    <div className="p-5 flex flex-col w-full items-center justify-center text-neutral-700 bg-neutral-100 dark:bg-primary dark:text-white">
        <Form className="w-full flex items-center justify-center gap-2">
            <Input placeholder="What type of agent would you like to build?" className="my-5 w-1/2" onChange={((e) => {setOriginalIdea(e.target.value)})}/>
            <Button type="button" onClick={() => onSubmit(allData())}><ArrowUp/></Button>
        </Form>
        <Button>Explore Prompt Templates</Button>
    </div>
  );
}
