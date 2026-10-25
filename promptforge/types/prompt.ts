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
  id: string;
  title: string;
  originalIdea: string;
  interpretation: string;
  clarificationAnswers: Record<string, string>;
  primaryStrategy: PromptStrategy;
  secondaryStrategies: PromptStrategy[];
  role: string;
  targetModel: TargetModel;
  tone: string[];
  responseLength: string;
  outputFormat: string;
  constraints: string[];
  context: string;
  successCriteria: string;
  variants: PromptVariant[];
  selectedVariantId: string | null;
  versions: PromptVersion[];
  createdAt: string;
  updatedAt: string;
}