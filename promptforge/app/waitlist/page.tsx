import { ModeToggle } from "@/components/providers/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowDownAZ, ArrowDownIcon, ArrowRightIcon, LayoutDashboard, Menu, SquareCode } from "lucide-react";
import Form from 'next/form'
import Link from "next/link";

export default function WaitlistPage() {
  return (
    <div className="px-15 pb-50 h-screen" suppressHydrationWarning>
      <header className="pt-15 pb-8 uppercase border-b">
        <div className="flex items-center gap-2  ">
          <div className="flex items-center gap-2">
            <SquareCode className="text-green-700"/>
            <h1 className="font-bold">PromptForge_</h1>
          </div>
          <div className="flex w-full gap-2 justify-end items-center text-muted-foreground text-sm">

            <h1>[ sys.spec.v0.0.0.1 ]</h1>

            <ModeToggle/>

            <DropdownMenu>
              <DropdownMenuTrigger >
               
                  <Menu className="text-muted-foreground"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/#">Developers</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      
      <section className="pt-10 border-b">

        <Badge className="rounded px-3 py-3">
          <h4>{'>'}_ Specification & Testing Platform</h4>
        </Badge>

        <div className="pt-5 pb-2">
          <h1 className="text-6xl">Precision Engineering for</h1>
          <h1 className="text-6xl text-muted-foreground">AI Prompts & Agents.</h1>
        </div>
      </section>

      <section className="py-10 border-b">
        <div className="flex flex-col gap-10">
          <p className="text-muted-foreground text-lg w-2/3">
            Transform vague user ideas into structured, testable, and version-controlled 
            instructions for AI systems and agents. 
          </p>

          <div className="grid grid-cols-3 gap-4">
            <Card className="p-2 rounded-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                <h4>01 / Initialization</h4>
                <h5 className="text-sm text-green-700">Initial Idea</h5>
              </div>
            </Card>
            <Card className="p-2 rounded-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                <h4>02 / Requirements</h4>
                <h5 className="text-sm text-green-700">Functional Requirements</h5>
              </div>
            </Card>
            <Card className="p-2 rounded-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                <h4>03 / Calibration</h4>
                <h5 className="text-sm text-green-700">CalibrateEngineering Direction</h5>
              </div>
            </Card>
            <Card className="p-2 rounded-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                <h4>04 / Prompt Generation</h4>
                <h5 className="text-sm text-green-700">Create Initial Prompts</h5>
              </div>
            </Card>
            <Card className="p-2 rounded-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                <h4>05 / Review</h4>
                <h5 className="text-sm text-green-700">Test & Evaluate</h5>
              </div>
            </Card>
            <Card className="p-2 rounded-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                <h4>06 / Targeted Recalibration / Fine-Tuning</h4>
                <h5 className="text-sm text-green-700">Adjust for Better Prompt Generation</h5>
              </div>
            </Card>
          </div>
        </div>
      </section>

      

      <section>
        <Card className="flex flex-col gap-5 p-10 my-10 rounded-lg">
            <div className="flex items-center gap-2 border-b pb-5">
                <div className="flex items-center gap-2 w-full">
                    <LayoutDashboard size={18}/>
                    <h1>Prompt Transformation Engine</h1>
                </div>
                <div className="w-full flex justify-end">
                    Advanced Engineering
                </div>
            </div>
            
            <div className="flex flex-col gap-2">
                <h1 className="text-xs font-semibold">Select Sample Vague Input:</h1>
                <div className="flex gap-2 mb-4">
                    <Button variant="outline" className="rounded text-xs">Support Bot</Button>
                    <Button variant="outline" className="rounded text-xs">Code Reviewer</Button>
                    <Button variant="outline" className="rounded text-xs">Data Extractor</Button>
                </div>
                <h1 className="text-xs font-semibold">Vague Request (Raw Input):</h1>
                <Input className="border border-muted-foreground rounded" disabled placeholder={"Make a bot that responds to customer complaints"} />
            </div>
            <div className="flex flex-col items-center w-full gap-1 mt-5 border-t pt-5">
                <div className="flex w-full gap-2 justify-center">
                    <ArrowDownAZ size={15} className="text-emerald-600 animate-bounce"/>
                </div>
                <div className="flex w-full gap-2 items-center">
                    <h1 className="w-full text-xs text-emerald-700">PromptForge Specification Output:</h1>
                    <div className="flex justify-end w-full ">
                        <div className="bg-emerald-700/10 rounded p-1 text-xs text-emerald-600">
                            <h1>JSON Schema Validated</h1>
                        </div>
                    </div>
                    
                </div>
                <div className="dark:bg-black  w-full border dark:border-emerald-950 rounded p-5 text-emerald-600">
                    <>{'{}'}</>
                </div>
            </div>
        </Card>
      </section>

    <section className="pb-15  border-b">
        <Form action={""} className="flex flex-col border bg-accent/50 p-5 rounded-lg gap-5">
            <h1 className="text-xl font-semibold">Sign Up For Early Access!</h1>
            <h3 className="text-muted-foreground text-sm">Join our waitlist of AI Engineers and Enthusiasts building structured prompts.</h3>
          <div className="flex flex-col ">
            <Label htmlFor="email" className="text-muted-foreground text-sm">Email Address</Label>
            <Input className="p-4 mb-5 rounded" id="email" placeholder="developer@domain.com"/>
            <Label htmlFor="role" className="text-muted-foreground text-sm">Select your role</Label>
            <select className="p-2 bg-input/50 rounded text-muted-foreground text-sm border" id="role">
              <option value="">Select Role</option>
              <option value="ai-developer">AI Developer</option>
              <option value="engineer">Engineer</option>
              <option value="product-manager">Product Manager</option>
              <option value="prompt-architect">Prompt Architect</option>
            </select>
          </div>
          <Button variant="outline" className="rounded my-3 p-5 dark:text-black">Request Access <ArrowRightIcon /></Button>
        </Form>
    </section>

      <section id="footer" className="flex  items-end py-15 text-xs">
        <div className="flex flex-col gap-2 justify-center w-full">
          <h1 className="text-muted-foreground text-xs">PromptForge_</h1>
          <h1 className="text-muted-foreground text-xs">© 2026 PromptForge. All rights reserved.</h1>
        </div>
        <div className="flex flex-col gap-2 items-end justify-center w-full">
          <h1 className="text-muted-foreground text-xs">API (coming soon...)</h1>
        </div>
      </section>
    </div>
  );
}
