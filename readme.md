## Project Title & Problem Statement

**TeamFuse** is a productivity and collaboration platform that helps student and developer teams track progress, manage tasks, and visualize contributions effectively.  
It addresses the problem of **limited visibility into individual engagement**, **communication gaps**, and **unbalanced workloads** within group projects.

The platform enables:

- Real-time project updates and activity tracking
- Task assignment with performance scoring
- GitHub and Google Docs integration
- Visual dashboards for contribution analytics

By combining these, TeamFuse ensures **transparent, data-driven teamwork** and improved project outcomes.

---

## Folder Structure & Explanation

```bash
src/
├── app/          # Application routes and pages using Next.js App Router
├── components/   # Reusable UI elements like buttons, cards, and modals
├── lib/          # Utility functions, configurations, and helper logic
├── styles/       # Global styles and Tailwind configuration
├── public/       # Static assets (images, icons, and logos)
```

### Description:

- **app/** → Defines routes and page layouts for better navigation.
- **components/** → Promotes reusability and clean, consistent UI design.
- **lib/** → Contains shared logic, configurations, and API helpers.
- **styles/** → Stores Tailwind and global styling files for theme control.
- **public/** → Holds static assets accessible throughout the app.

This modular structure helps maintain **clarity**, **scalability**, and **team collaboration** throughout the development cycle.

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/kalviumcommunity/S62-1125-Cognifuse-Full-Stack-With-NextjsAnd-AWS-Azure-TeamFuse.git

cd teamfuse
```

### 2️. Install Dependencies

```bash
npm install
```

### 3️. Run the Development Server

```bash
npm run dev
```

Now opening browser and going to **[http://localhost:3000](http://localhost:3000)** — app runs successfully.

---

## Reflection

This project structure ensures **clear separation of concerns**, making it easier for each team member to work on different parts without conflicts.

- The **app/** directory organizes routes efficiently using the Next.js App Router.
- The **components/** folder promotes reusability and reduces UI redundancy.
- The **lib/** folder centralizes configurations and helper functions for maintainability.

This layout will allow TeamFuse to **scale easily** in future sprints — enabling faster feature additions, smoother backend integration, and efficient deployment to AWS/Azure.

---

## LLD

https://www.figma.com/design/1XKXXtjbzosqgQ1hcjJQc9/Untitled?node-id=0-1&t=lii0cBLhZmT1hDsQ-1

https://www.figma.com/proto/1XKXXtjbzosqgQ1hcjJQc9/Untitled?page-id=0%3A1&node-id=5-19&p=f&viewport=-540%2C-278%2C0.25&t=5sXF9xDsJaCC7K76-1&scaling=min-zoom&content-scaling=fixed

## Screenshot of Local App Running

![alt text](image-1.png)

---

## TypeScript & ESLint Configuration

### Strict TypeScript

Enabled strict mode in tsconfig.json to catch type errors early and prevent unused code.


## Code Review Checklist

Before submitting your Pull Request (PR), make sure you’ve verified the following:

- [ ] Code runs without errors locally  
- [ ] Follows the established folder structure and naming conventions  
- [ ] No unused files, variables, or console logs  
- [ ] Comments added where logic might not be immediately clear  
- [ ] UI matches design or mockup closely  
- [ ] README and PR description updated with latest info  
- [ ] Screenshots added (if UI feature)  
- [ ] Reflections or notes included for team discussion  


This checklist ensures that all contributions maintain consistency, readability, and quality across the TeamFuse project.


## Branching Strategy & Naming Conventions

To maintain a clean and professional Git workflow, TeamFuse follows a consistent branching strategy.  
Each branch name clearly indicates its purpose, making collaboration and reviews easier.

### 🔹 Branch Naming Format

- feature/admin-ruleset-management, feature/user-dashboard, feature/login-auth → For developing new modules or adding new functionalities to the Cognifuse project.

- fix/ruleset-display-error, fix/api-authentication-failure → For resolving bugs, UI issues, or fixing existing code errors.

- chore/env-setup, chore/dependency-update, chore/build-optimization → For configuration updates, refactoring, or maintenance-related improvements.


- docs/pr-guidelines, docs/readme-update, docs/setup-instructions → For updating documentation, guides, or workflow-related information.


###  PR Template
Stored in `.github/pull_request_template.md`

###  Code Review Checklist
(Include the checklist added above)

###  Reflection
This branching structure helps our team:
- Keep commits organized by purpose  
- Simplify code reviews and pull requests  
- Prevent conflicts and direct changes to the main branch  
- Scale easily as our codebase and team grow  

Following this structure ensures consistency, traceability, and cleaner collaboration across all future sprints.

### Screenshots

- Screenshot of branch protection
![alt text](image-2.png)


- Screenshot of a PR showing checks/review approval
![alt text](image-3.png

This improves reliability and reduces runtime bugs.

### ESLint + Prettier

Configured ESLint and Prettier for consistent, clean code.

- ESLint catches syntax and logic issues.

- Prettier formats code automatically.

```json
"extends": ["next/core-web-vitals", "plugin:prettier/recommended"]
```

### Pre-Commit Hooks

Set up Husky and lint-staged to auto-fix code before every commit.

This keeps all commits linted, formatted, and error-free.

```json
"lint-staged": {
  "teamfuse/**/*.{ts,tsx,js,jsx}": [
    "cd teamfuse && npx eslint --fix",
    "cd teamfuse && npx prettier --write"
  ]
}
```

### Result

Strict typing + linting + auto-formatting =
clean, consistent, and bug-free code for the whole team.

### Logs

```bash
$ git commit -m "Checking EsLint Setup"
✔ Backed up original state in git stash (e8361c5)
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
[EsLint 502bd23] Checking EsLint Setup
 1 file changed, 1 insertion(+)
```

