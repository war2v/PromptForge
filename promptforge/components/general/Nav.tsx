"use client"

import { Code, Code2, Folder, LayoutTemplate, Settings } from "lucide-react"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

export const Nav = () => {
    const pathname = usePathname()
    console.log(pathname)

    const projects = [{}]

    const navbar = [
        {
            title: "Prompts",
            item_count: projects.length,
        },
        {
            title: "Templates",
            item_count: 24,
        },
        {
            title: "Settings",
            item_count: 0,
        }
    ]

  
    const project = [
        {
            stage: "Initial Idead"
        }
    ]

    return (
        <nav className="p-5 w-1/3 h-screen dark:bg-primary dark:dark:">
            <div id="Icon" className="flex items-center gap-4">
                <Code2 className="bg-red-400 rounded-lg" size={50}/>
                <div>
                    <h1 className="text-lg font-bold dark:text-white font-mono uppercase">PromptForge_</h1>
                    <h4 className="text-muted-foreground font-jakarta">Engineering Suite</h4>
                </div>
            </div>
            <div className="flex flex-col pt-10 border-b border-muted-foreground/30 mb-10 pb-5">
                <div className="px-2">
                    <h1 className="text-xs uppercase font-mono">workspace</h1>
                </div>
                
                <div className="flex flex-col w-full">
                    {navbar.map((item, index) => (
                        <Button 
                            key={index}
            
                            size="lg"  
                            
                        
                            className={`flex gap-2 py-6 my-2 bg-muted-foreground/10 text-black dark:text-default hover:bg-emerald-600/50 ${
                                pathname === '/prompts' || pathname.startsWith('/prompts/') && item.title === 'Prompts' ? "bg-emerald-600/50" 
                                : 
                                pathname === '/templates' || pathname.startsWith('/templates/') && item.title === 'Templates' ? "bg-emerald-600/50" 
                                : 
                                pathname === '/settings' || pathname.startsWith('/settings/') && item.title === 'Settings' ? "bg-emerald-600/50" : "" }
                                `}
                            >
                            <Folder/>
                            <h2>{item.title}</h2>
                            <div className={`flex w-full justify-end `}> 
                                <h5 className={`${item.title === 'Settings' ? "hidden" : ""}`}>{item.item_count}</h5>
                            </div>
                        </Button>
                    ))}
                    
                   
                </div>
            </div>
            <div>
                <h1 className="text-sm  pb-2">Pipeline Stages</h1>
                <div className="flex flex-col p-5 bg-muted-foreground/10 rounded-lg gap-4">
                    <div>
                        <h1>Initial Idea</h1>
                    </div>
                    <div>
                        <h1>Info Gathering</h1>
                    </div>
                    <div>
                        <h1>Review</h1>
                    </div>
                    <div>
                        <h1>Generation</h1>
                    </div>
                    <div>
                        <h1>Review</h1>
                    </div>
                </div>

            </div>
        </nav>
    )
}