import { InfoBar } from "@/components/general/InfoBar";
import { Nav } from "@/components/general/Nav";
import { Suspense } from "react";
import PromptPageContent from "./_componets/WorkSpaceContent";


export default function RootLayout({ children, params }: {children: React.ReactNode, params: Promise<{ id: string }>}) {


  return (
    
        
        <div className="h-screen flex flex-col">
          <InfoBar/>
            <Suspense>
                <div className="flex h-full">
                  <Nav/>
                  <PromptPageContent params={params}>
                    {children}
                  </PromptPageContent>
                </div>
            </Suspense>
        </div>

    
  );
}
