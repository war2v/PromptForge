
"use client"

import { useState } from "react"
import {
    ArrowDownAZ,
    Check,
    ChevronRight,
    Code2,
    Database,
    Headset,
    Layers3,
    Sparkles,
} from "lucide-react"

import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const exampleData = [
    {
        id: "support_bot",
        label: "Support Bot",
        icon: Headset,
        request:
            "Make a bot that responds nicely to customer complaints and gives refunds.",
        code: {
            agent_role: "Customer Support Tier 1",
            objective:
                "Resolve customer complaints empathetically while applying the refund policy consistently.",
            tools: [
                "lookup_order",
                "retrieve_refund_policy",
                "issue_refund",
            ],
            guardrails: [
                "Maximum refund authorization: $50",
                "Verify order ID and purchase status before processing",
                "Escalate refunds exceeding $50 to a human agent",
                "Never promise an outcome before verifying eligibility",
            ],
            workflow: [
                "Acknowledge the complaint and identify the issue",
                "Retrieve the order and applicable refund policy",
                "Determine eligibility and request confirmation when needed",
                "Process eligible refunds or escalate the case",
                "Summarize the resolution and next steps",
            ],
            evaluation_criteria: [
                "Empathy and professionalism",
                "100% compliance with refund authorization limits",
                "Every refund is supported by a verified order",
                "Successful escalation of out-of-scope requests",
            ],
            output_format: {
                status: "resolved | pending | escalated",
                summary: "string",
                refund_amount: "number | null",
                escalation_reason: "string | null",
            },
        },
    },
    {
        id: "code_reviewer",
        label: "Code Reviewer",
        icon: Code2,
        request:
            "Review my code, find bugs, and tell me how to make it better.",
        code: {
            agent_role: "Senior Software Engineer and Code Reviewer",
            objective:
                "Identify correctness, security, performance, and maintainability issues in submitted code.",
            inputs: [
                "Source code or diff",
                "Programming language and framework",
                "Relevant requirements and test results",
            ],
            review_priorities: [
                "Correctness and edge cases",
                "Security vulnerabilities",
                "Performance bottlenecks",
                "Maintainability and readability",
                "Test coverage gaps",
            ],
            guardrails: [
                "Report only issues supported by code evidence",
                "Never invent files, APIs, or execution results",
                "Distinguish confirmed bugs from potential risks",
                "Do not rewrite unrelated code",
            ],
            workflow: [
                "Understand the intended behavior",
                "Inspect the code and trace relevant execution paths",
                "Rank findings by severity and impact",
                "Provide a minimal actionable fix for each finding",
                "Identify missing tests and unresolved assumptions",
            ],
            evaluation_criteria: [
                "Every finding includes a location and explanation",
                "Severity matches the potential impact",
                "Suggested fixes are technically actionable",
                "No unsupported claims or fabricated test results",
            ],
            output_format: {
                overall_assessment: "string",
                findings: [
                    {
                        severity: "critical | high | medium | low",
                        location: "string",
                        issue: "string",
                        recommendation: "string",
                    },
                ],
                suggested_tests: ["string"],
            },
        },
    },
    {
        id: "data_extractor",
        label: "Data Extractor",
        icon: Database,
        request:
            "Read these documents and pull out the important information into a table.",
        code: {
            agent_role: "Structured Document Data Extraction Agent",
            objective:
                "Extract requested fields from supplied documents and return consistent, machine-readable records.",
            inputs: [
                "One or more supplied documents",
                "A defined list of target fields",
                "Optional extraction and normalization rules",
            ],
            extraction_rules: [
                "Preserve the source meaning and original values",
                "Normalize dates to ISO 8601 when unambiguous",
                "Represent missing values as null",
                "Never infer facts that are absent from the source",
                "Flag conflicting values instead of silently choosing one",
            ],
            workflow: [
                "Identify document type and readable content",
                "Map source content to the requested fields",
                "Validate extracted values and data types",
                "Record missing fields and conflicting evidence",
                "Return the structured result with source references",
            ],
            guardrails: [
                "Do not fabricate missing information",
                "Retain a reference to the source document",
                "Separate extracted facts from inferred interpretations",
            ],
            evaluation_criteria: [
                "All populated fields have source evidence",
                "Output conforms to the requested schema",
                "Missing and ambiguous values are explicitly flagged",
                "No unsupported data is introduced",
            ],
            output_format: {
                records: [
                    {
                        field: "string",
                        value: "string | number | boolean | null",
                        source_reference: "string | null",
                        confidence: "number",
                    },
                ],
                missing_fields: ["string"],
                warnings: ["string"],
            },
        },
    },
]

export const EngineExampleCard = () => {
    const [currentExample, setCurrentExample] = useState("support_bot")

    const activeExample =
        exampleData.find((example) => example.id === currentExample) ??
        exampleData[0]

    const ActiveIcon = activeExample.icon
    const formattedCode = JSON.stringify(activeExample.code, null, 2)

    return (
        <Card className="my-10 overflow-hidden rounded-xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm dark:border-zinc-800 dark:bg-[#111113] dark:text-zinc-200 sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-zinc-800">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                        <Layers3 size={16} className="text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <div className="min-w-0">
                        <h2 className="truncate font-mono text-xs font-medium tracking-wide sm:text-sm">
                            Prompt Transformation Engine
                        </h2>
                        <p className="mt-1 text-[10px] text-slate-500 dark:text-zinc-500">
                            STRUCTURED PROMPT GENERATION
                        </p>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] text-emerald-700 dark:text-emerald-400 sm:text-xs">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    Active Engine
                </div>
            </div>

            <div className="mt-6 space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500">
                    Select sample vague input:
                </p>

                <div className="flex flex-wrap gap-2">
                    {exampleData.map((example) => {
                        const Icon = example.icon
                        const isActive = currentExample === example.id

                        return (
                            <Button
                                key={example.id}
                                type="button"
                                variant="outline"
                                aria-pressed={isActive}
                                onClick={() => setCurrentExample(example.id)}
                                className={`h-8 rounded-md border px-3 font-mono text-[11px] transition-colors ${
                                    isActive
                                        ? "border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-slate-950 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white"
                                        : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
                                }`}
                            >
                                <Icon size={13} className="mr-1.5" />
                                {example.label}
                            </Button>
                        )
                    })}
                </div>
            </div>

            <div className="mt-5 space-y-2">
                <label
                    htmlFor="engine-example-input"
                    className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500"
                >
                    Vague request (raw input):
                </label>

                <Input
                    id="engine-example-input"
                    value={activeExample.request}
                    readOnly
                    className="h-auto min-h-10 rounded-md border-slate-200 bg-slate-50 px-3 py-3 font-mono text-xs leading-relaxed text-slate-700 shadow-none focus-visible:ring-0 dark:border-zinc-800 dark:bg-[#09090b] dark:text-zinc-300"
                />
            </div>

            <div className="my-5 flex flex-col items-center gap-1">
                <div className="h-5 w-px bg-gradient-to-b from-slate-300 to-emerald-500/60 dark:from-zinc-700 dark:to-emerald-500/60" />

                <div className="flex size-7 items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/5">
                    <ArrowDownAZ size={15} className="text-emerald-600 dark:text-emerald-400" />
                </div>

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-600">
                    Intent → Specification
                </p>
            </div>

            <div className="space-y-3 border-t border-slate-200 pt-5 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <Sparkles size={14} className="text-emerald-600 dark:text-emerald-400" />

                        <h3 className="font-mono text-[10px] font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                            PromptForge specification output
                        </h3>
                    </div>

                    <div className="flex items-center gap-1.5 rounded border border-emerald-200 bg-emerald-50 px-2 py-1 font-mono text-[9px] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-400">
                        <Check size={11} />
                        Structured JSON
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-emerald-200 bg-slate-50 dark:border-emerald-500/20 dark:bg-[#09090b]">
                    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 dark:border-zinc-800">
                        <div className="flex items-center gap-2">
                            <ActiveIcon size={13} className="text-slate-500 dark:text-zinc-500" />

                            <span className="font-mono text-[10px] text-slate-600 dark:text-zinc-400">
                                {activeExample.id}.json
                            </span>
                        </div>

                        <span className="font-mono text-[9px] text-slate-400 dark:text-zinc-600">
                            JSON
                        </span>
                    </div>

                    <pre
                        key={activeExample.id}
                        className="max-h-[420px] overflow-auto p-4 font-mono text-[11px] leading-[1.9] text-emerald-800 sm:p-5 sm:text-xs dark:text-emerald-300"
                    >
                        <code>{formattedCode}</code>
                    </pre>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <p className="text-[10px] leading-relaxed text-slate-500 dark:text-zinc-500">
                        Example specification · Illustrative output
                    </p>

                    <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-zinc-500">
                        <span className="font-mono text-emerald-700 dark:text-emerald-500">
                            {String(Object.keys(activeExample.code).length).padStart(2, "0")}
                        </span>
                        specification sections
                        <ChevronRight size={12} />
                    </div>
                </div>
            </div>
        </Card>
    )
}
