# PromptForge

PromptForge is an early-stage web application designed to help users engineer better prompts and, over time, build reliable AI workflows.

The long-term vision is to evolve PromptForge from a structured prompt-engineering tool into an **AI Workflow Engineering Platform** where users can define requirements, calibrate prompting strategies, generate prompts and workflow specifications, evaluate AI outputs, and systematically improve their results.

Rather than treating prompts as isolated blocks of text, PromptForge aims to treat them as engineered artifacts with explicit requirements, defined execution strategies, evaluation criteria, and version history.

The current application consists of a landing page, an early-access waitlist, an interactive example, and preliminary application scaffolding. Prompt generation, persistence, versioning, evaluation, and AI model execution have not yet been implemented.

## Table of Contents

- [Vision](#vision)
- [What Works Today](#what-works-today)
- [Product Roadmap](#product-roadmap)
- [Long-Term Architecture](#long-term-architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Supabase Configuration](#supabase-configuration)
- [Available Routes](#available-routes)
- [Development Commands](#development-commands)
- [Project Layout](#project-layout)
- [Current Limitations](#current-limitations)
- [License](#license)

## Vision

PromptForge aims to make AI development more systematic, measurable, and repeatable.

Traditional prompting often relies on trial and error. Users write instructions, inspect the output, make changes, and repeat the process without a structured way to identify the underlying problem or determine whether a revision actually improved performance.

PromptForge is being designed around a more deliberate engineering process:

1. **Define the objective** — Capture what the user wants the AI to accomplish.
2. **Gather context** — Identify requirements, constraints, available tools, and expected outputs.
3. **Calibrate the strategy** — Determine which prompting techniques and execution strategies are appropriate for the task.
4. **Generate the specification** — Produce structured prompts and, eventually, complete workflow or agent specifications.
5. **Evaluate the results** — Compare outputs against explicit requirements and success criteria.
6. **Refine and version** — Make targeted improvements while preserving the requirements that already work.
7. **Export or execute** — Use the resulting artifacts in supported AI models, agent frameworks, or workflow environments.

The central principle is that **a prompt should be engineered against a specification, not merely generated from a description**.

![Alt Text](readme/image.png)
![Alt Text](readme/demo.png)
![Alt Text](readme/demo3.png)

### Long-Term Product Direction

The intended evolution of PromptForge is organized around three capabilities:

- **Engineer:** Design prompts, select techniques, define requirements, and construct AI workflow specifications.
- **Validate:** Test outputs against requirements, identify failures, and measure performance.
- **Optimize:** Use evaluation results to improve prompts and workflows while maintaining their intended behavior.

Over time, these capabilities could support a broader development lifecycle for AI-powered systems, from initial task definition through workflow design, testing, execution, and ongoing improvement.

These capabilities describe the product vision; they are not all available in the current application.

## What Works Today

The current application includes:

- A landing page describing the proposed PromptForge workflow.
- An interactive example that previews structured agent specifications.
- An early-access waitlist form that submits a name, email address, and role to Supabase.
- Light, dark, and system theme selection.
- Placeholder pages for prompts, templates, settings, and individual prompt projects.

The root URL (`/`) redirects to `/waitlist`.

The prompt-related routes and project state files are scaffolding for future development, not complete product features.

## Product Roadmap

The roadmap prioritizes extending the existing prompt-engineering workflow before introducing the complexity of a complete AI execution platform.

The order and scope of these phases may change based on feedback from early users and technical feasibility.

### Phase 1 — MVP: Structured Prompt Engineering

**Objective:** Establish the core workflow for transforming an initial idea into a structured, reusable prompt.

Planned capabilities:

- [ ] Create and save prompt projects.
- [ ] Guide users through an initial idea and contextual clarification process.
- [ ] Introduce the Prompt Calibration Workbench.
- [ ] Recommend prompting techniques based on task requirements.
- [ ] Allow users to configure techniques, constraints, and output requirements.
- [ ] Generate prompts from structured specifications.
- [ ] Review and edit generated prompts.
- [ ] Support targeted recalibration without discarding unaffected requirements.
- [ ] Implement prompt version history.
- [ ] Export prompts for use outside PromptForge.
- [ ] Introduce authentication and user-owned projects.
- [ ] Add automated tests for core application behavior.

The Prompt Calibration Workbench is the central feature of this phase. It should help users determine how an AI should approach a task, rather than simply improve the wording of an instruction.

For example, a research task may benefit from task decomposition, source verification, structured extraction, and output validation. A simple text transformation may need only a concise instruction and a clear output format.

Technique recommendations should be task-dependent rather than applying every available technique to every prompt.

**Milestone:** Users can create, calibrate, generate, revise, save, and export structured prompts.

### Phase 2 — Prompt Intelligence and Evaluation

**Objective:** Move beyond prompt generation by introducing systematic evaluation and evidence-based improvement.

Planned capabilities:

- [ ] Build a structured library of prompting techniques and their intended use cases.
- [ ] Implement task classification and requirement analysis.
- [ ] Recommend strategies based on task type, constraints, and success criteria.
- [ ] Explain why a technique is recommended and what trade-offs it introduces.
- [ ] Define reusable evaluation criteria.
- [ ] Create test cases for generated prompts.
- [ ] Evaluate outputs against explicit requirements.
- [ ] Identify missing requirements, unsupported claims, and formatting failures.
- [ ] Compare prompt versions using consistent evaluation criteria.
- [ ] Generate targeted improvement suggestions from evaluation results.
- [ ] Preserve successful requirements when revising a prompt.

Evaluation should distinguish between checking the prompt's structure and testing the behavior of its outputs.

For example, a prompt may contain all required sections and still produce an inaccurate report. Structural validation alone is insufficient to establish task performance.

Where model execution is available, PromptForge should support evaluation against actual outputs. Automated AI-based assessments can supplement explicit checks, but their limitations should be made clear.

**Milestone:** Users can compare prompt versions and determine which changes improve performance against their defined criteria.

### Phase 3 — AI Workflow Engineering

**Objective:** Expand PromptForge from individual prompts to complete, multi-step AI workflows.

Complex tasks frequently require multiple stages, dependencies, conditional decisions, external tools, and validation checkpoints. A single prompt may not provide sufficient control over the entire process.

Planned capabilities:

- [ ] Introduce a structured `WorkflowSpec` representation.
- [ ] Design workflows as connected steps or a visual workflow graph.
- [ ] Define inputs, outputs, dependencies, and execution order.
- [ ] Support conditional branches and validation checkpoints.
- [ ] Define the responsibilities of each AI step.
- [ ] Specify when deterministic code or external tools should be used.
- [ ] Define failure handling, retry policies, and human approval requirements.
- [ ] Generate prompts for individual workflow steps.
- [ ] Validate compatibility between connected steps.
- [ ] Export workflow specifications in documented formats.
- [ ] Create reusable workflow templates.

For example, a competitor research workflow could contain the following stages:

1. Interpret the research objective.
2. Identify competitors.
3. Collect relevant information.
4. Verify sources.
5. Extract structured competitor data.
6. Compare findings.
7. Generate a market report.
8. Validate the report against the original requirements.

Each stage would have a defined responsibility, input, output, and validation strategy.

**Milestone:** Users can design and export structured AI workflows rather than manually assembling unrelated prompts.

### Phase 4 — Agent Specifications and Execution

**Objective:** Support the design of complete AI agents and begin executing workflows through supported integrations.

An AI agent requires more than instructions. Depending on its purpose, it may also need tool definitions, permissions, state management, execution policies, and failure handling.

Planned capabilities:

- [ ] Introduce an `AgentSpec` representation.
- [ ] Define agent objectives, instructions, and behavioral boundaries.
- [ ] Specify tools, inputs, outputs, and permissions.
- [ ] Define state and memory requirements.
- [ ] Configure retry behavior and failure policies.
- [ ] Add human approval checkpoints for sensitive operations.
- [ ] Integrate with selected AI model providers.
- [ ] Execute supported workflows in a controlled environment.
- [ ] Record execution logs and intermediate outputs.
- [ ] Capture model usage, latency, and estimated execution costs.
- [ ] Test agent behavior against defined evaluation suites.
- [ ] Export agent specifications for compatible external frameworks.

Execution should be introduced incrementally, beginning with a limited set of supported integrations and controlled capabilities.

Security boundaries, secret management, tool permissions, execution isolation, and cost controls must be addressed before enabling workflows to perform consequential actions.

**Milestone:** Users can move from designing an agent specification to testing and executing supported workflows.

### Phase 5 — Automated Optimization and Monitoring

**Objective:** Establish a repeatable feedback loop for improving AI prompts and workflows using evaluation and execution results.

Planned capabilities:

- [ ] Run evaluation suites against multiple prompt versions.
- [ ] Detect regressions after prompt or workflow changes.
- [ ] Compare supported models using consistent test cases.
- [ ] Identify recurring failure patterns.
- [ ] Generate candidate prompt or workflow revisions.
- [ ] Test proposed changes against the existing baseline.
- [ ] Compare quality, reliability, cost, and latency.
- [ ] Preserve version history and evaluation results.
- [ ] Track execution performance over time.
- [ ] Support rollback to a previously validated version.
- [ ] Introduce automated optimization with explicit acceptance criteria.

Optimization should be driven by measurable objectives rather than subjective prompt improvements alone.

For example, a user may prioritize factual accuracy over response speed. Another may need to minimize cost while maintaining a minimum quality threshold. PromptForge should make those trade-offs explicit.

Automated revisions should not be accepted merely because an AI evaluator prefers the new wording. Changes should be checked against the user's requirements and relevant regression tests.

**Milestone:** Users can systematically improve AI workflows using repeatable evaluations and documented comparisons.

### Phase 6 — Team and Production Platform

**Objective:** Evolve PromptForge into a platform for teams developing, maintaining, and governing AI-powered systems.

Potential capabilities:

- [ ] Shared team workspaces.
- [ ] Collaborative prompt and workflow editing.
- [ ] Organization-wide templates and standards.
- [ ] Role-based access control.
- [ ] Approval workflows for production changes.
- [ ] Versioned workflow deployment.
- [ ] Environment-specific configuration.
- [ ] Integration with development and deployment pipelines.
- [ ] Production execution monitoring.
- [ ] Alerts for failures and evaluation regressions.
- [ ] Centralized usage and cost reporting.
- [ ] Audit logs and operational governance.

This phase would target teams that need repeatable processes for building and maintaining AI workflows across multiple projects.

**Milestone:** PromptForge supports a broader AI engineering lifecycle, including collaboration, controlled deployment, and ongoing operational oversight.

## Long-Term Architecture

The long-term architecture should separate user intent, engineering decisions, generated artifacts, and execution results.

The following concepts are proposed architectural boundaries. They are not all implemented in the current codebase.

| Component | Responsibility |
|---|---|
| `TaskDefinition` | Stores the original objective, context, requirements, and constraints. |
| `CalibrationSpec` | Records selected prompting techniques, strategy settings, and their rationale. |
| `WorkflowSpec` | Defines workflow steps, dependencies, inputs, outputs, and branching behavior. |
| `AgentSpec` | Defines agent instructions, tools, permissions, state, and operational policies. |
| `PromptVersion` | Represents a generated, editable, and versioned set of instructions. |
| `EvaluationSuite` | Stores test cases, expected behavior, and evaluation criteria. |
| `EvaluationRun` | Records test results, failures, model usage, latency, and other relevant metrics. |
| `OptimizationRun` | Records proposed changes and their comparison against a baseline. |

These concepts should be introduced only when required by the corresponding product features. They do not need to exist as separate database tables from the beginning.

### Architectural Principles

**1. Structured specifications as the source of truth**

Generated prompts should be derived from structured specifications rather than serving as the only representation of a project.

This allows PromptForge to generate different artifacts from the same requirements without losing the reasoning behind the original design.

**2. Separate generation from execution**

Creating a prompt or workflow specification should not require executing it. This keeps early functionality useful without requiring every user to configure model credentials or external tools.

**3. Version every meaningful change**

Prompt and workflow changes should be traceable. Where applicable, evaluation results should be associated with the exact version that produced them.

**4. Preserve requirements during recalibration**

Targeted revisions should modify the relevant parts of a specification while retaining unrelated requirements and constraints.

**5. Make evaluation reproducible**

Comparisons should use documented criteria and, where practical, the same test cases and execution settings. Results should record enough context to explain how they were obtained.

**6. Keep the core model provider-independent**

Provider-specific APIs, model settings, and execution details should be separated from the underlying task, prompt, and workflow specifications.

**7. Treat execution as a controlled capability**

Future execution features should incorporate appropriate permissions, secret management, isolation, error handling, and cost limits.

## Tech Stack

The current application uses:

- **Next.js 16** with the App Router
- **React 19** and TypeScript
- **Tailwind CSS 4** and reusable UI components
- **Supabase JavaScript client** for waitlist submissions
- **`next-themes`** for theme selection

Future architectural choices, including AI provider integrations, workflow execution infrastructure, and evaluation tooling, have not yet been finalized.

## Getting Started

### Prerequisites

- Node.js compatible with the versions required by Next.js 16
- npm
- A Supabase project if you want to submit waitlist entries

### Install and Run

From the repository root:

```bash
cd promptforge
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to `/waitlist`.

### Supabase Configuration

Create `promptforge/.env.local` and add the following values:

```dotenv
NEXT_PUBLIC_SUPBASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

The URL variable is currently spelled `SUPBASE` in the application code. Keep that spelling unless you also update `lib/supabase.ts` and any other references.

Both values are read by the browser-side Supabase client. Use only a Supabase publishable key or the legacy anon key here. **Never expose a Supabase service-role key in client-side code or a `NEXT_PUBLIC_` environment variable.**

The waitlist action inserts into a `waitlist` table with these columns:

| Column | Value |
|---|---|
| `email` | Email address |
| `first_name` | First name |
| `last_name` | Last name |
| `role` | `ai-developer`, `engineer`, `product-manager`, `prompt-architect`, or `other` |

Create the table and configure Supabase permissions to allow the intended inserts before using the form. This repository does not include a database migration or table definition.

## Available Routes

| Route | Current behavior |
|---|---|
| `/` | Redirects to `/waitlist` |
| `/waitlist` | Landing page and early-access form |
| `/prompts` | Placeholder page |
| `/prompts/templates` | Placeholder page |
| `/prompts/prompt/[id]` | Placeholder project page displaying the route ID |
| `/settings` | Placeholder page |

The prompt, template, and settings routes are scaffolding for future functionality.

## Development Commands

Run these commands from `promptforge/`:

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

There is currently no test script or automated test suite configured.

## Project Layout

```text
promptforge/
├── app/
│   ├── _actions/       # Waitlist server action
│   ├── _db/            # Waitlist data access placeholder
│   ├── prompts/        # Prompt, template, and project routes
│   ├── settings/       # Settings route
│   └── waitlist/       # Landing page
├── components/         # Waitlist, project, provider, and UI components
├── hooks/              # Prompt-project hook placeholder
├── lib/                # Supabase client and shared utilities
└── types/              # Prompt-project type definitions
```

## Current Limitations

- Prompt creation, persistence, search, version history, and AI model execution are not implemented.
- The prompt-related routes and project state files are placeholders.
- No authentication flow, database migrations, or automated tests are configured.
- The waitlist form requires a Supabase project and a correctly configured `waitlist` table.
- The long-term workflow engineering, evaluation, optimization, and agent execution capabilities described in this README are planned, not implemented.

## Contributing and Development Direction

Development should prioritize a coherent progression from structured prompt engineering to measurable evaluation, workflow design, and controlled execution.

New features should reinforce the core product principles:

- Keep requirements explicit and structured.
- Make prompting strategies task-dependent.
- Treat generated prompts and workflows as versioned artifacts.
- Evaluate results against defined criteria.
- Use evaluation evidence to guide revisions.
- Keep specifications portable across supported models and execution environments.

Avoid introducing complex execution infrastructure before the core prompt engineering and evaluation workflows have demonstrated value to users.

## License

No license has been selected yet.