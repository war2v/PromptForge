import { InfoBar } from "@/components/general/InfoBar";
import { Nav } from "@/components/general/Nav";
import { Suspense } from "react";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
        <InfoBar/>
        <body className="min-h-full flex flex-col">
            <Suspense>
                <div className="flex">
                  <Nav/>
                  {children}
                </div>
            </Suspense>
        </body>

    </div>
  );
}
