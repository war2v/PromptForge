"use client";

import { usePrompt } from "@/components/providers/PromptProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PromptProject } from "@/types/prompt";
import Link from "next/link";

export default function WorkspacePage() {

    const {  
        userId,
        setUserId,
       
    } = usePrompt();

    


    

  return (
    <div className="p-5 flex flex-col w-full items-center justify-center text-neutral-700 bg-neutral-100 dark:bg-primary dark:text-white">
      <Button onClick={() => {}}>Create New Prompt</Button>

      <div className="flex items-center justify-center">
        <Input placeholder="Test: Set userID" className="my-5 w-1/2" onChange={((e) => {setUserId(e.target.value)})}/>
        <Button>Save</Button>
      </div>

      <Button>
        <Link href={"/workspace/prompts"}>View All Prompts</Link>
      </Button>
      <Button>
        <Link href={"/workspace/templates"}>Explore Templates</Link>
      </Button>
      <h1>{userId}</h1>
    </div>
  );
}
