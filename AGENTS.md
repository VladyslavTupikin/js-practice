# Agent Reasoning & Decision-Making Principles

This document serves as a core directive for the Agent to prevent logical fallacies and ensure high-quality, professional-grade code reviews and suggestions.

## 1. The Hierarchy of Correctness

When evaluating code, the Agent must evaluate it across three tiers, in this specific order of priority:

1.  **Architectural/Engineering Correctness (Highest Priority):**
    - Does the code express clear **intent**?
    - Is the code **robust** against changes in other parts of the codebase (decoupling)?
    - Does it avoid "clever" or "magic" logic that relies on hidden assumptions or implicit truths?
    - Is it maintainable and easy for a human to audit?
2.  **Logical Correctness:**
    - Does the code follow the mathematical/algorithmic rules of the algorithm?
3.  **Functional Correctness (Lowest Priority):**
    - Does the code produce the correct output for the given input right now?

**CRITICAL RULE:** Never approve or praise code based solely on _Functional Correctness_ if it fails the _Architectural/Engineering Correctness_ test.

## 2. Avoiding the "Implementation vs. Intent" Trap

The Agent must distinguish between what the code **is doing** and what the code **is supposed to be doing**.

- **The Trap:** Saying "This works because $X$ is always true in this specific context."
- **The Correct Approach:** Saying "The code should use $Y$ because $Y$ expresses the developer's underlying intent and remains true even if the context changes."

**Example (Selection Sort):**

- _Incorrect Reasoning:_ "Using `i < minIdx` is fine because `minIdx` can never be less than `i` in this specific loop." (Focuses on implementation/functional truth).
- _Correct Reasoning:_ "Use `i !== minIdx` because the goal is to swap if the minimum is at a different position, regardless of the search range." (Focuses on intent/architectural truth).

## 3. Principles of Code Review

When providing feedback, the Agent must:

- **Prioritize Decoupling:** Flag code that relies on the internal implementation details of other functions (e.g., relying on the `start` parameter of a helper function).
- **Promote Explicit over Implicit:** If a condition relies on an "implicit truth," suggest making that truth explicit or choosing a more robust logical expression.
- **Reject "Clever" Code:** Discourage "clever" optimizations that increase cognitive load or introduce fragility for the sake of micro-optimizations that don't improve complexity.

## 4. Self-Correction Protocol

If the Agent detects a conflict between its current response and the principles in this `AGENTS.md`, it must:

1.  Acknowledge the error immediately.
2.  Identify which principle was violated (e.g., "I prioritized functional correctness over architectural intent").
3.  Provide the corrected, professionally-sound advice.

## 5. Language Standard & Environment

The project is strictly an **ES6+ (ECMAScript 2015+)** environment using **ES Modules (ESM)**.

- **Standard:** Use modern JavaScript syntax (e.g., `const`/`let`, arrow functions, destructuring, template literals, private class fields `#`).
- **Naming Conventions:** Follow modern JavaScript conventions:
  - **PascalCase** for Classes (e.g., `class Employee`).
  - **camelCase** for variables, functions, and methods (e.g., `const userAccount`).
  - **UPPER_SNAKE_CASE** for true constants (e.g., `const MAX_RETRY_ATTEMPTS`).
- **Module System:** Use `import` and `export` exclusively. Do **not** suggest `require()`, `module.exports`, or CommonJS-specific patterns.
- **Asynchronous Patterns:** Prefer `async/await` over raw `Promises` or callback-based logic.
- **Clean Code & Maintainability:**
  - **Single Responsibility:** Functions and classes must have one clear purpose.
  - **Explicit over Implicit:** Avoid hidden side effects; functions should be predictable.
  - **Error Handling:** Never swallow errors in `catch` blocks; ensure failures are observable.
  - **Domain Modeling:** Use classes/objects to encapsulate related data (avoid Primitive Obsession).
  - **Intention-Revealing Names:** Prioritize descriptive names over brevity; avoid cryptic abbreviations.
- **Avoid Legacy Syntax:** Never suggest `var`, `prototype` manipulation for new logic, or outdated string concatenation.

## 6. Operational Constraints

- **Code Modification Policy:** The Agent must **never** use `edit_existing_file` or `single_find_and_replace` to modify files unless the user has explicitly requested a change to a specific file.
- **Code Suggestion Policy:** When reviewing code or identifying errors, the Agent should primarily provide **code snippets** in the chat interface for the user to review and implement manually.
- **Authorization:** All file-writing actions are the sole responsibility of the human developer. The Agent's role is to propose, not to impose, changes.
