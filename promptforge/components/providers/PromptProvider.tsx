
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

    changePromptData: (data: PromptProject) => void;
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
    const [createdAt, setCreatedAt] = useState<string | null>(null);
    const [updatedAt, setUpdatedAt] = useState<string | null>(null);

    const changePromptData = (data: PromptProject) => {
        setPromptId(data.id);
        setCurrentStage(data.current_stage);
        setStatus(data.status);
        setUserId(data.user_id);
        setTaskSpecification(data.task_specification);
        setCalibrationSpecification(data.calibration_specification);
        setCreatedAt(data.created_at);
        setUpdatedAt(data.updated_at);
    };

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
                changePromptData,
            }}
        >
            {children}
        </PromptContext.Provider>
    );
}
