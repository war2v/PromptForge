import { WaitlistForm } from "@/components/forms/waitlist";
import { ModeToggle } from "@/components/providers/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { EngineExampleCard } from "@/components/waitlist/components";
import { ArrowDownAZ, LayoutDashboard, Menu, SquareCode } from "lucide-react";

import Link from "next/link";

export default function WaitlistPage() {
  const workFlowCardData = [
    {
      title: "Initialization",
      description: "Initial Idea",
    },
    {
      title: "Requirements",
      description: "Functional Requirements",
    },
    {
      title: "Calibration",
      description: "Calibrate Engineering Direction",
    },
    {
      title: "Prompt Generation",
      description: "Create Initial Prompts",
    },
    {
      title: "Review",
      description: "Test & Evaluate",
    },
    {
      title: "Targeted Recalibration",
      description: "Adjust for Better Prompt Generation",
    },
  ];

  return (
    <div className="px-15 pb-50 h-screen" suppressHydrationWarning>
      <header className="pt-15 pb-8 uppercase border-b">
        <div className="flex items-center gap-2  ">
          <div className="flex items-center gap-2">
            <SquareCode className="text-emerald-700" />
            <h1 className="font-bold">PromptForge_</h1>
          </div>
          <div className="flex w-full gap-2 justify-end items-center text-muted-foreground text-sm">
            <h1>[ sys.spec.v0.0.0.1 ]</h1>

            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu className="text-muted-foreground" />
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
          <h4>{">"}_ Specification & Testing Platform</h4>
        </Badge>

        <div className="pt-5 pb-2">
          <h1 className="text-6xl text-emerald-400">
            Precision{" "}
            <span className="text-neutral-400">Engineering for</span>{" "}
          </h1>
          <h1 className="text-6xl text-muted-foreground">
            AI Prompts & Agents.
          </h1>
        </div>
      </section>

      <section className="py-10 border-b">
        <div className="flex flex-col gap-10">
          <p className="text-muted-foreground text-lg w-2/3">
            Transform vague user ideas into structured, testable, and
            version-controlled instructions for AI systems and agents.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {workFlowCardData.map((item) => (
              <Card
                key={item.title}
                className="group p-2 rounded-sm text-muted-foreground hover:bg-emerald-900 transition duration-500 "
              >
                <div className="flex flex-col gap-2 group-hover:text-neutral-100 transition duration-500">
                  <h4>{item.title}</h4>
                  <h5 className="text-sm group-hover:text-emerald-100 text-emerald-500 transition duration-500">
                    {item.description}
                  </h5>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <EngineExampleCard />
      </section>

      <WaitlistForm />

      <section id="footer" className="flex  items-end py-15 text-xs">
        <div className="flex flex-col gap-2 justify-center w-full">
          <h1 className="text-muted-foreground text-xs">PromptForge_</h1>
          <h1 className="text-muted-foreground text-xs">
            © 2026 PromptForge. All rights reserved.
          </h1>
        </div>
        <div className="flex flex-col gap-2 items-end justify-center w-full">
          <h1 className="text-muted-foreground text-xs">
            API (coming soon...)
          </h1>
        </div>
      </section>
    </div>
  );
}
