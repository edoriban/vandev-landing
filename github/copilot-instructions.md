# Copilot Instructions for Awesome Portfolio Project

This document provides guidelines for GitHub Copilot to better assist with the development of this Astro-based portfolio project.

---

## 1. Project Structure Overview

**Configuration:**
- `astro.config.mjs`: Main Astro configuration.
- `tailwind.config.mjs`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.

**Source Code (`src/`):**
- `components/`: Reusable Astro components.
- `sections/`: Larger components representing page sections (e.g., `HeroSection.astro`, `ProjectsSection.astro`).
- `ui/`: Smaller, general-purpose UI components (e.g., `Badge.astro`, `Card.astro`, `Header.astro`).
- `layouts/`: Base layout components (e.g., `Layout.astro`).
- `pages/`: Astro pages that define the routes (e.g., `index.astro`).
- `styles/`: Global stylesheets.
    - `shared.css`: Contains global styles, custom CSS classes, and utility styles not covered by Tailwind or component-specific styles.
- `env.d.ts`: TypeScript environment declarations.

**Public Assets (`public/`):**
- Static assets like images, favicons, etc.

**Dependencies:**
- Managed by pnpm (see `package.json` and `pnpm-lock.yaml`).

---

## 2. Styling Approach

- **Primary Styling:** Utilize Tailwind CSS utility classes directly within `.astro` components for most styling needs. Refer to `tailwind.config.mjs` for theme customizations.
- **Global Styles:** For styles that are truly global or for complex CSS patterns not easily achievable with Tailwind, use `shared.css`.
    - When adding to `shared.css`, ensure class names are specific and consider BEM-like naming for clarity if creating new, non-utility classes.
- **Component-Specific Styles:** Astro components can have scoped styles within their `<style>` tags. Use this for styles that are tightly coupled to a single component and won't be reused elsewhere.
- **Avoid Inline Styles:** Minimize the use of inline style attributes unless absolutely necessary for dynamic styling that cannot be handled by class bindings.

---

## 3. Development Best Practices (SOLID & Clean Code)

- **Single Responsibility Principle (SRP):**
    - Each Astro component should have a clear and single purpose.
    - Break down complex components into smaller, more manageable sub-components.
- **Open/Closed Principle (OCP):**
    - Components should be extensible (e.g., via props) without needing modification of their core source code for new use cases.
- **Readability & Maintainability (Clean Code):**
    - **Naming:** Use clear, descriptive names for variables, functions, props, and components.
    - **Conciseness:** Keep components and functions small and focused.
- **Props:**
    - Clearly define and type component props using TypeScript interfaces or types within the component's frontmatter script.
    - Only pass necessary props to components.
- **Astro Syntax:**
    - Use Astro's templating syntax effectively.
    - Place JavaScript/TypeScript logic in the component script (frontmatter) section.
- **HTML Structure:** Write semantic and accessible HTML.
- **Comments:** Add comments to explain complex logic, non-obvious decisions, or TODO items. Avoid over-commenting simple code.
- **DRY (Don't Repeat Yourself):** Identify and abstract repeated patterns or logic into reusable components or utility functions.
- **Performance:**
    - Be mindful of asset sizes (images, scripts).
    - Leverage Astro's features for performance (e.g., partial hydration/islands if interactivity is introduced).
- **TypeScript:**
    - Utilize TypeScript for type safety. Define types for props, variables, and function signatures.

---

## 4. General Guidelines for Copilot

- **Understand Context:** Before making changes, try to understand the existing code and the purpose of the component or file being edited. If context is missing from the prompt, ask for it or use tools to gather it.
- **Incremental Changes:** Apply changes step-by-step, especially for complex requests.
- **File Paths:** Always use absolute file paths when referring to or modifying files. The workspace root is `awesome-portfolio`.
- **Tool Usage:**
    - Use `read_file` before `insert_edit_into_file` if the file content isn't fully provided or if you need to ensure edits are based on the latest version.
    - When using `insert_edit_into_file`, use `// ...existing code...` to represent unchanged regions.
- **Language:** While the user may prompt in Spanish, provide explanations and code comments in English unless specifically asked otherwise for user-facing text.
- **Astro Files:** Remember that `.astro` files have a frontmatter script section (between `---`) for JavaScript/TypeScript and a template section for HTML-like syntax.

---

By following these guidelines, you can provide more accurate, consistent, and helpful assistance.