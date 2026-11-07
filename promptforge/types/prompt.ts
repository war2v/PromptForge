//prompt.ts

export type PromptStrategy = 
| 'zero-shot'
| 'one-shot'
| 'few-shot'
| 'chain-of-thought'
| 'self-consistency'
| 'tree-of-thought'
| 'scratchpad'
| 'prompt-chaining'
| 'meta-prompting'
| 'instruction-tuning'
| 'reinforcement-learning-from-human-feedback'

export type TargetModel = 
| "chatgpt-3.5-turbo"
| "claude-2"
| "gemini-1.5"
| "model-agnostic"

export type Stage = 
| 'initial-idea'
| 'interpretation'
| 'clarification'
| 'strategy-selection'
| 'blueprint-creation'

export interface PromptVariable {
    name: string;
    description: string;
    defaultValue: string;
    required: boolean;
}

export interface PromptVariant {
    id: string;
    name: string;
    content: string;
    strategy: PromptStrategy;
    version: number;
    variables: PromptVariable[];
}

export interface PromptVersion {
    id: string;
    version: number;
    content: string;
    createdAt: string;
}

export interface PromptProject {
  id: string | null; // uuid
  created_at: string | null; // timestamp with time zone
  original_idea: string | null;
  task_specification: Record<string, any> | null; // jsonb
  calibration_specification: Record<string, any> | null; // jsonb
  current_stage: string | null;
  status: string | null;
  updated_at: string | null;
  user_id: string; // uuid
}