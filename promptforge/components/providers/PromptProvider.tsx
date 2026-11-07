
import { createContext, ReactNode, useContext, useState } from "react";
import { PromptProject } from "@/types/prompt";

interface PromptContextType {
    promptId: string | null;
    currentStage: string | null;
    status: string | null;
    userId: string | null;
    taskSpecification: Record<string, any> | null;
    calibrationSpecification: Record<string, any> | null;
    createdAt: string | null;
    updatedAt: string | null;
    original_idea: string | null;

    setPromptId: (id: string | null) => void;
    setCurrentStage: (newStage: string | null) => void;
    setStatus: (status:string | null) => void;
    setUserId: (userId: string | null) => void;
    setOriginalIdea: (original_idea: string | null) => void;
    setTaskSpecification: (taskSpecification: Record<string, any> | null) => void;
    setCalibrationSpecification: (calibrationSpecification: Record<string, any> | null) => void;
    setCreatedAt: (createdAt: string | null) => void;
    setUpdatedAt: (updatedAt: string | null) => void;
    allData: () => PromptProject
    
}

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export function usePrompt() {
    const context = useContext(PromptContext);

    if (!context) {
        throw new Error("usePrompt must be used within a PromptProvider");
    }

    return context;
}

interface PromptProviderProps {
    children: ReactNode;
}

export function PromptProvider({ children }: PromptProviderProps) {
    const [promptId, setPromptId] = useState<string | null>(null);
    const [currentStage, setCurrentStage] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [taskSpecification, setTaskSpecification] = useState<Record<string, any> | null>(null);
    const [calibrationSpecification, setCalibrationSpecification] = useState<Record<string, any> | null>(null);
    const [original_idea, setOriginalIdea] = useState<string | null>(null);
    const [createdAt, setCreatedAt] = useState<string | null>(null);
    const [updatedAt, setUpdatedAt] = useState<string | null>(null);

    const allData = () => {
        const projectData: PromptProject = {
            id: promptId,
            current_stage: currentStage,
            status: status,
            user_id: userId ? userId : "a2be8005-ffb4-49e3-b967-417f76fd0bd3",
            task_specification: taskSpecification,
            calibration_specification: calibrationSpecification,
            original_idea: original_idea,
            created_at: createdAt ? createdAt : "Sat 07 Nov 2026 15:49:39 GMT-0600",
            updated_at: updatedAt,
        }

        return projectData
    }
   

    return (
        <PromptContext.Provider
            value={{
                promptId,
                currentStage,
                status,
                userId,
                taskSpecification,
                calibrationSpecification,
                createdAt,
                updatedAt,
                original_idea,
                setPromptId,
                setCurrentStage,
                setStatus,
                setUserId,
                setTaskSpecification,
                setCalibrationSpecification,
                setCreatedAt,
                setUpdatedAt,
                setOriginalIdea,
                allData
            }}
        >
            {children}
        </PromptContext.Provider>
    );
}
