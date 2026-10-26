"use client"

import { joinWaitlist } from "@/app/actions/waitlist";
import { Form } from "@base-ui/react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

export const WaitlistForm = () => {
    const [email, setEmail] = useState<string | null>(null)
    const [role, setRole] = useState<string | null>(null)
    const [first_name, setFirstName] = useState<string | null>(null)
    const [last_name, setLastName] = useState<string | null>(null)

    const onSubmit = () => {

        if (email && role && first_name && last_name) 
            joinWaitlist(email, role, first_name, last_name)
        else{
            //make toast
            console.log("Enter all information")
        }
    }
    

    

    return (
        <section className="pb-15  border-b">
            <Form action={(() => onSubmit())} className="flex flex-col border bg-accent/50 p-5 rounded-lg gap-5">
                <h1 className="text-xl font-semibold">Sign Up For Early Access!</h1>
                <h3 className="text-muted-foreground text-sm">Join our waitlist of AI Engineers and Enthusiasts building structured prompts.</h3>
                <div className="flex flex-col ">
                    <Label htmlFor="first_name" className="text-muted-foreground text-sm">First Name</Label>
                    <Input onChange={(e) => {setFirstName(e.target.value)}} required name="first_name" type="text" className="p-4 mb-5 rounded" id="first_name" placeholder="Frank"/>  
                    <Label htmlFor="last_name" className="text-muted-foreground text-sm">Last Name</Label>
                    <Input onChange={(e) => {setLastName(e.target.value)}} required name="last_name" type="text" className="p-4 mb-5 rounded" id="last_name" placeholder="Ryan"/>  
                    <Label htmlFor="email" className="text-muted-foreground text-sm">Email Address</Label>
                    <Input onChange={(e) => {setEmail(e.target.value)}} required name="email" type="email" className="p-4 mb-5 rounded" id="email" placeholder="developer@domain.com"/>
                    <Label htmlFor="role" className="text-muted-foreground text-sm">Select your role</Label>
                    <select onChange={(e) => {setRole(e.target.value)}} required name="role" id="role" defaultValue="Select a Role" className="p-2 bg-input/50 rounded text-muted-foreground text-sm border">
                        <option value="ai-developer">AI Developer</option>
                        <option value="engineer">Engineer</option>
                        <option value="product-manager">Product Manager</option>
                        <option value="prompt-architect">Prompt Architect</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <Button type="submit" variant="outline" className="rounded my-3 p-5 dark:text-white">Request Access <ArrowRightIcon /></Button>
            </Form>
        </section>
    );
}