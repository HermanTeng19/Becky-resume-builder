# Online Personal Profile Website Design Specification

This document details the visual style, file structure, component layout, and interactivity rules for transforming Becky Qi's resume into a modern, Bento-Grid Dashboard online profile website.

---

## 1. Project Overview
- **Goal**: Reconstruct Becky Qi's resume into a highly interactive, responsive, single-page profile website modeled on a modern Bento Grid dashboard.
- **Target Role**: BI Developer / Data Engineer.
- **Aesthetic (Style B - Bento Grid)**: Clean light-mode backgrounds (`#f8fafc` Slate 50), high-contrast text (`#0f172a` Slate 900), subtle borders (`#e2e8f0` Slate 200), soft drop-shadows, and sky-blue accents (`#0284c7` Sky 600) to match a data-rich BI dashboard.
- **Tech Stack**: HTML5, Tailwind CSS (via CDN), Chart.js (via CDN), Vanilla JavaScript.

---

## 2. File Structure
The project will consist of three separate, well-bounded files in the project root:
- `index.html`: Holds the semantic page structure and container grids.
- `style.css`: Custom CSS extensions, scroll animations, and bento card border glow transitions.
- `app.js`: Interactive elements: Chart.js rendering for skills, timeline detail toggles, project switcher, and contact modal logic.

---

## 3. Bento Grid Layout Mapping
The layout uses a responsive CSS Grid system (`grid-cols-1 md:grid-cols-3 lg:grid-cols-4`). Each card represents a "Bento widget" containing a distinct piece of information.

```mermaid
grid-layout
    ┌───────────────────────────┬─────────────┐
    │  Profile / Hero Card      │ Quick Stats │
    │  (col-span-3 row-span-2)  │ (col-span-1)│
    ├─────────────┬─────────────┴─────────────┤
    │ Skills      │ Education & Credentials   │
    │ Dashboard   │ (col-span-2 row-span-2)   │
    │ (col-span-2)│                           │
    ├─────────────┴─────────────┬─────────────┤
    │ Experience Journey        │ Projects    │
    │ (col-span-2 row-span-3)   │ Spotlight   │
    │                           │ (col-span-2)│
    ├───────────────────────────┴─────────────┤
    │ Contact & Socials Card (col-span-4)     │
    └─────────────────────────────────────────┘
```

### Bento Cards Details

1. **Card 1: Profile Hero (col-span-3, row-span-2)**
   - Header with name, avatar placeholder, dynamic scrolling titles ("BI Developer", "Data Engineer", "AI Integrator").
   - Brief pitch: Data pipelines, Azure, and AI-accelerated velocity.
   - Action buttons: "Download Resume (PDF)" and "Get In Touch".

2. **Card 2: Quick Stats (col-span-1, row-span-1)**
   - Bold numerical metrics:
     - `4+` Years of Industry Experience.
     - `50+` Stored Procedures Optimized.
     - `25%` Development Speed Increase via AI.

3. **Card 3: Interactive Skills Dashboard (col-span-2, row-span-2)**
   - Left side: Skill category list buttons (AI Tools, Cloud, BI/Analytics, Scripting).
   - Right side: A dynamic Chart.js Radar or Horizontal Bar chart that updates in real-time when a user clicks a skill category, showcasing proficiency details.

4. **Card 4: Education & Credentials (col-span-2, row-span-2)**
   - Academic degrees (Master's in Applied Math, Centennial Graduate Certificate) and SAS Certified Advanced/Base credentials.
   - Visual styling: Clean badge items with subtle icons.

5. **Card 5: Experience Journey (col-span-2, row-span-3)**
   - Vertical interactive timeline showing BizData and Samuel, Son & Co.
   - Users can click on a timeline node to toggle expansion of the detailed bullet points (e.g., database tuning, Azure pipelines, automated reports).

6. **Card 6: Featured Projects Spotlight (col-span-2, row-span-2)**
   - Interactive project tabs:
     - *Project 1*: Automated Audit Pipeline (Azure ADF + Databricks).
     - *Project 2*: AI Code Generation Hub (LLM Prompts + GitHub Copilot).
     - *Project 3*: Logistics Optimization Engine (Python Pandas + VBA).
   - Showcases metrics, tools used, and a mock diagram for each.

7. **Card 7: Contact & Socials Footer (col-span-4, row-span-1)**
   - Large, inviting footer banner with social links (LinkedIn, GitHub, Email) and a copy-to-clipboard email trigger.

---

## 4. UI/UX Interactivity Rules
- **Hover Effects**: All Bento cards transition with a slight scale (`hover:-translate-y-1`) and a subtle blue border glow.
- **Skill chart update**: Clicking a skill category triggers JavaScript to destroy the previous chart instance and animate a new one.
- **Timeline Accordion**: Clickable job headers that slide open to display details.
- **Tailwind configuration**: Handled using a config script inside the HTML file to set standard color families.
