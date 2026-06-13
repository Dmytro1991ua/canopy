# AI Coding Instructions (Version 1.0)

## Project Overview
["Green Energy Landing Page"]

## Project Standards
- **Architecture:** Keep files small, focused, and maintainable. Use a clear folder structure.
- **Code Quality:** Prioritize type-safe code, readable names, and existing project patterns.
- **Dependencies:** Prefer built-in tools or existing dependencies before adding new libraries.
- **Security:** Never hardcode secrets. Validate inputs at boundaries.

## Task Routing
For non-trivial tasks, classify before execution:
- **Complexity:** Low / Medium / High
- **Model Tier:** Fast / Balanced / Strong
- **Expected Token Usage:** Low / Medium / High
- **Reason:** Brief justification.

Use Fast/Balanced for normal frontend work, small bugs, summaries, test ideas, and first-pass implementation.
Use Strong only for architecture, security-sensitive work, complex debugging, large refactors, or production-critical decisions.

## Claude Design Workflow
Use only when design assets, mockups, artifacts, screenshots, or prototype code are provided.

- **Role:** Design is for visual direction, UX flow, and prototypes.
- **Rules:**
  - Treat designs as reference, not production-ready code.
  - Convert prototypes into maintainable application code.
  - Remove duplicate styles, fake data, unused wrappers, and unnecessary elements.
  - Preserve intended UX, layout hierarchy, and interaction behavior.
  - Verify implementation against real app states: loading, empty, error, and interactive.
- **Prohibited:** Do not use design output for long logic-heavy implementation loops or large refactors.

If no design material is provided or relevant, ignore this section.

## VS Code / Claude Code Workflow
- **Operations:** Use for implementation, testing, debugging, refactoring, and file edits.
- **Context:** Read relevant files only. Prefer explicit file references when provided.
- **Integration:** Adapt prototype/design code to the actual architecture. Match existing components, routes, styles, and design systems.
- **Verification:** Run relevant tests, linting, and type checks after changes when possible.

## Repo Reading Budget
- **Avoid:** Scanning the entire repository unless necessary.
- **Prefer:** Targeted searches by exact component, route, function, error, or file name.
- **Action:** If broad exploration is needed, explain why first.

## Code Quality & Security
- **Security:** Explicitly handle errors. Validate all inputs. Never expose secrets or credentials.
- **Conventions:** Follow existing patterns. Keep edits scoped to the task.
- **Verification:** Explain how the change can be verified through tests or manual steps.

## Output Style
- Be concise.
- Show important tradeoffs.
- Ask questions only when missing details materially change the solution.