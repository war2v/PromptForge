# PromptForge

**A prompt engineering and testing workspace for AI models and agents.**

PromptForge helps users transform vague ideas into structured, reusable AI instructions. Users define an objective, provide context, specify tools and constraints, establish output requirements, and identify success criteria. The application uses these requirements to generate prompts that can be edited, versioned, and tested against an LLM.

The long-term goal is to make prompt development more systematic by helping users evaluate, refine, and maintain instructions for repeatable AI workflows.

> **Project status:** Initial development / MVP planning.

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Objectives](#objectives)
- [Core Features](#core-features)
- [Planned Technology Stack](#planned-technology-stack)
- [System Architecture](#system-architecture)
- [Data Model](#data-model)
- [Development Roadmap](#development-roadmap)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Security Considerations](#security-considerations)
- [Future Development](#future-development)
- [Project Goals](#project-goals)

## Overview

PromptForge is a web application designed to help individuals and developers create better prompts for AI models and agent-based workflows.

Rather than requiring users to write instructions from scratch, PromptForge guides them through a structured requirements-gathering process. These requirements are then used to generate an organized prompt specification.

Users will be able to save their prompts, manage revisions, execute prompts against an LLM, and inspect the resulting outputs.

The initial release will focus on providing a complete prompt development workflow, from requirements gathering through execution and revision.

### Example Use Case

A user wants to create an AI agent that researches software engineering job postings and identifies the technical skills employers demand.

The user provides the following requirements:

- **Objective:** Identify and summarize technical skills in job postings.
- **Context:** Focus on entry-level software engineering positions.
- **Tools:** Approved job search APIs and document processing tools.
- **Constraints:** Exclude irrelevant postings, avoid duplicate records, and do not invent missing information.
- **Output:** A structured report with skills ranked by frequency.
- **Success criteria:** Findings must be traceable to source postings, and extracted data must follow a defined schema.

PromptForge transforms these requirements into a structured set of instructions that can be reviewed, saved, and tested against an AI model.

## Problem Statement

AI systems are often given incomplete or ambiguous instructions. Users may omit important context, fail to define expected outputs, overlook constraints, or provide no way to determine whether a result is satisfactory.

These problems become more significant when AI systems are used for repeatable workflows or agentic tasks involving external tools and multiple processing steps.

PromptForge addresses these challenges by providing a structured approach to prompt development.

The application aims to:

1. Standardize how users define AI tasks.
2. Reduce ambiguity in generated instructions.
3. Make prompts reusable and maintainable.
4. Support repeatable testing and evaluation.
5. Preserve prompt history so users can understand and compare revisions.

## Objectives

### Primary Objectives

- Build a structured prompt creation workflow.
- Generate prompts from user-defined requirements using an LLM.
- Store prompts and their versions in a relational database.
- Allow users to execute prompts against a real LLM.
- Preserve execution inputs, outputs, and relevant metadata.
- Implement secure user authentication and data isolation.
- Deploy a functional application with automated tests.

### Engineering Objectives

PromptForge will also serve as a software engineering portfolio project demonstrating:

- Full-stack application development.
- REST API design and implementation.
- Relational database design and ORM usage.
- Authentication and authorization.
- External API integration.
- Runtime input and output validation.
- Automated testing.
- Error handling and application reliability.
- Deployment and CI/CD practices.

## Core Features

### 1. Structured Prompt Builder

Users define their requirements through a guided form.

Planned fields include:

- Prompt name and description.
- Objective.
- Background context.
- Role and responsibilities.
- Available tools and their limitations.
- Inputs and expected data.
- Constraints.
- Output format.
- Success criteria.
- Target model or agent environment.

### 2. AI-Powered Prompt Generation

An LLM converts structured requirements into an organized prompt specification.

Generated prompts may include:

- Role and scope.
- Objective and context.
- Input requirements.
- Tool usage instructions.
- Ordered execution steps.
- Constraints and restrictions.
- Output requirements.
- Verification procedures.
- Failure-handling instructions.
- Completion criteria.

Users can review and edit generated instructions before saving them.

### 3. Prompt Library

Users can create and manage a private collection of prompts.

Planned capabilities include:

- Create, view, edit, and delete prompts.
- Search and organize saved prompts.
- Categorize prompts by use case.
- Retrieve previously saved prompts.

### 4. Prompt Versioning

PromptForge will preserve saved revisions instead of overwriting historical prompt content.

Each version will maintain its own instructions and associated requirements.

This will allow users to:

- Review previous revisions.
- Restore earlier instructions.
- Compare versions.
- Identify which version produced a particular result.

### 5. Prompt Testing

Users can execute saved prompt versions against a supported LLM.

The application will display the model's output and retain relevant execution metadata, including the selected model, input, execution status, and duration.

Where supported by the provider, token usage and estimated execution cost will also be recorded.

### 6. Output Validation

PromptForge will support basic checks to determine whether an output satisfies its expected structure.

Examples include:

- Validating JSON syntax.
- Checking required fields.
- Verifying output types.
- Detecting missing values.
- Evaluating predefined success criteria.

More advanced AI-assisted evaluation is planned for a later development phase.

## Planned Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Frontend and application framework | Next.js | User interface, routing, and server-side functionality |
| Programming language | TypeScript | Type-safe application development |
| Styling | Tailwind CSS | Responsive interface styling |
| UI components | shadcn/ui | Reusable interface components |
| Backend | Next.js Route Handlers | API endpoints and request handling |
| Database | PostgreSQL | Persistent application data |
| ORM | Prisma | Database access and schema migrations |
| Authentication | Supabase Auth or Auth.js | User authentication |
| Input validation | Zod | Runtime validation |
| AI integration | LLM provider SDK | Prompt generation and execution |
| Unit and integration testing | Vitest | Automated application tests |
| End-to-end testing | Playwright | Browser-based workflow tests |
| Version control | Git and GitHub | Source control and collaboration |
| Deployment | Vercel or compatible hosting | Application deployment |
| CI/CD | GitHub Actions | Automated quality checks |

The stack is provisional and may change as implementation requirements become clearer.

## System Architecture

The application will separate its major responsibilities into distinct layers.

```text
User Interface
      |
      v
Next.js Application
      |
      v
API Route Handlers
      |
      +---- Authentication and Authorization
      |
      +---- Request Validation
      |
      v
Application Services
      |
      +---- Prompt Management
      |
      +---- Prompt Generation
      |
      +---- Version Management
      |
      +---- Prompt Execution
      |
      +---- Output Evaluation
      |
      +------------+-------------+
      |                          |
      v                          v
PostgreSQL Database         LLM Provider
                                 |
                                 v
                           Model Response
```

The application services will manage business logic, while PostgreSQL stores persistent records and the LLM provider handles AI generation and execution.

Model-specific functionality will be isolated behind a provider interface to make future integrations easier.

## Data Model

The initial database design will include the following entities.

| Entity | Description |
|---|---|
| User | Represents an authenticated application user. |
| Prompt | Represents a user's saved prompt project. |
| PromptVersion | Stores a particular revision of a prompt and its requirements. |
| PromptRun | Records the execution of a specific prompt version. |
| TestCase | Stores reusable inputs for repeatable testing. |
| Evaluation | Records checks or assessments of an execution result. |

The initial MVP will prioritize users, prompts, prompt versions, and execution records. Test cases and evaluations may be introduced after the core workflow is functional.

### Data Integrity Principles

- Saved prompt versions should be immutable.
- Each version should belong to a specific prompt.
- Each execution should reference the version that was tested.
- Private resources must be accessible only to their authorized owners.
- Historical execution records should preserve the relevant prompt content and settings.
- Database constraints should prevent duplicate version numbers within the same prompt.

## Development Roadmap

Development will proceed in phases, with each phase producing a functional increment.

### Phase 1: Project Foundation

- [ ] Initialize the Next.js application.
- [ ] Configure TypeScript and Tailwind CSS.
- [ ] Set up PostgreSQL and Prisma.
- [ ] Configure environment variables.
- [ ] Add code-quality tools and initial tests.
- [ ] Establish the repository structure.

### Phase 2: Authentication and Prompt Management

- [ ] Implement registration and login.
- [ ] Protect private routes and API endpoints.
- [ ] Implement prompt creation and retrieval.
- [ ] Implement editing and deletion.
- [ ] Enforce resource ownership.
- [ ] Add database and authorization tests.

### Phase 3: Prompt Generation

- [ ] Define the requirements schema.
- [ ] Build the structured prompt form.
- [ ] Integrate an LLM provider.
- [ ] Generate structured prompt specifications.
- [ ] Validate generated responses.
- [ ] Add loading and error states.

### Phase 4: Prompt Versioning

- [ ] Implement immutable prompt versions.
- [ ] Preserve requirements and generated content.
- [ ] Display version history.
- [ ] Support retrieval of historical versions.
- [ ] Add versioning tests.

### Phase 5: Prompt Execution

- [ ] Implement the LLM execution service.
- [ ] Allow users to test saved versions.
- [ ] Persist execution inputs and outputs.
- [ ] Display execution history.
- [ ] Add output validation.
- [ ] Implement request limits and failure handling.

### Phase 6: Testing and Deployment

- [ ] Complete unit and integration tests.
- [ ] Implement critical end-to-end tests.
- [ ] Verify authentication and data isolation.
- [ ] Deploy the application.
- [ ] Configure production environment variables.
- [ ] Document setup and architecture.
- [ ] Publish a working demonstration.

## Getting Started

**Note:** The application is in its initial development stage. The following instructions describe the intended development setup and will need to be updated as implementation progresses.

### Prerequisites

Install the following:

- Node.js LTS.
- npm.
- Git.
- PostgreSQL or access to a hosted PostgreSQL instance.
- An API key for the selected LLM provider once AI integration is implemented.

### Installation

Clone the repository:

```bash
git clone https://github.com/war2v/PromptForge
cd promptforge
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Configure the required environment variables.

Generate the Prisma client and apply database migrations after the Prisma schema and migrations have been created:

```bash
npx prisma generate
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

These commands assume the corresponding npm scripts, Prisma configuration, and database migrations are present. Actual setup instructions should be verified against the repository as it develops.

## Environment Variables

The application will use environment variables for configuration and secrets.

An initial `.env.example` may contain:

```dotenv
DATABASE_URL=""

# Configure the authentication provider selected for the project.
# Add the corresponding provider-specific variables.

LLM_API_KEY=""
LLM_MODEL=""

# Configure only if required by the chosen authentication provider.
AUTH_SECRET=""
```

The final variable names will depend on the selected authentication provider, database hosting configuration, and LLM SDK.

**Security requirements:**

- Never commit `.env` files containing real credentials.
- Keep LLM API keys on the server.
- Never expose privileged database credentials to the browser.
- Use separate credentials and configuration for development and production.
- Validate required environment variables during application startup.

## Testing

Automated testing will be part of the development process rather than a final cleanup step.

### Unit Tests

Test isolated business logic, including:

- Requirements validation.
- Prompt generation request construction.
- Output schema validation.
- Version numbering.
- Evaluation rules.
- Provider error handling.

### Integration Tests

Test interactions between application services and their dependencies, including:

- Database persistence.
- Version creation and retrieval.
- Execution record persistence.
- Authorization enforcement.
- Handling of invalid requests and provider failures.

### End-to-End Tests

Test complete user workflows using Playwright:

- Registering and signing in.
- Creating and saving a prompt.
- Generating a prompt.
- Creating a new version.
- Executing a prompt.
- Retrieving previous results.
- Preventing unauthorized access.

Use mocked LLM responses for ordinary automated tests to reduce costs and make results repeatable. Maintain a smaller set of controlled integration checks against a real provider.

## Security Considerations

PromptForge will process user-generated instructions and potentially untrusted content. Security must therefore be considered throughout development.

Planned safeguards include:

- Server-side request validation.
- Authentication and resource-level authorization.
- Rate limits and execution budgets.
- Server-side management of API credentials.
- Request size and token limits.
- Provider timeout and failure handling.
- Redaction of sensitive information from logs.
- Validation of structured model outputs.

Generated instructions will not automatically grant access to external tools. Actual tool execution, if introduced later, must enforce permissions independently of the generated prompt.

## Future Development

Potential improvements beyond the initial MVP include:

- Side-by-side prompt version comparisons.
- Reusable test suites.
- Advanced prompt quality checks.
- LLM-assisted output evaluation.
- Multiple LLM provider integrations.
- Token and cost analytics.
- Templates for software engineering, research, and business analysis.
- Markdown, JSON, and YAML exports.
- Structured agent specifications.
- Tool and workflow definitions.
- Team collaboration.
- A prompt template marketplace.

Future development will prioritize features that improve repeatability, evaluation, and reliability over features that simply increase the number of available prompt-generation options.

## Project Goals

PromptForge has two primary goals.

**Product goal:** Make it easier to create, test, and maintain reliable instructions for AI models and agents.

**Engineering goal:** Build a well-structured full-stack application that demonstrates practical software engineering skills, including API development, relational data modeling, authentication, external service integration, automated testing, and deployment.

The MVP will be considered complete when a new user can register, define requirements, generate a prompt, save revisions, execute a saved version against a real LLM, and retrieve the results without assistance.

## License

No license has been selected yet. A license should be added before the project is distributed for reuse or contributions are accepted.
