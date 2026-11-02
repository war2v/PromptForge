"use client";

import { Suspense } from "react";
import { PromptProvider } from "../providers/PromptProvider";

interface ProjectContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ProjectContainer = ({
  children,
  className,
}: ProjectContainerProps) => {
  return (
    <PromptProvider>
      <div className={className}>{children}</div>
    </PromptProvider>
  );
};
