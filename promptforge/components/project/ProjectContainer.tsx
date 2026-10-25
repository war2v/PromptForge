"use client"

interface ProjectContainerProps{
    children: React.ReactNode;
    id: string;
}

export const ProjectContainer = ({children, id}: ProjectContainerProps) => {
  

    return (
        <div>
            {children}
        </div>
    );
}