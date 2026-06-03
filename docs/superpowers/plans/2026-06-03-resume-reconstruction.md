# Resume Integration of AI & Data Engineering Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate AI tools and advanced Data Engineering capabilities into Becky Qi's resume, updating both the sidebar technical skills and main experience sections.

**Architecture:** Modify the existing `resume.html` file in place. We will update the left `<aside>` sidebar elements and the right `<main>` work history/summary elements, keeping the responsive and print-ready CSS variables intact.

**Tech Stack:** HTML5, CSS3, Google Fonts.

---

### Task 1: Update Sidebar Technical Skills

**Files:**
- Modify: `resume.html:36-81` (specifically the technical skills list inside `<aside class="sidebar">`)

- [ ] **Step 1: Rewrite Technical Skills with AI and Data Engineering**
  Modify the `<div class="sidebar-section skills-section">` to include the new skills categories:
  ```html
  <div class="sidebar-section skills-section">
    <h2>Skills</h2>
    
    <h3>AI & Intelligent Tools</h3>
    <ul>
      <li>LLMs (GPT, Claude, Gemini)</li>
      <li>AI Agent Skills / Workflows</li>
      <li>GitHub Copilot</li>
      <li>M365 Copilot & Prompts</li>
    </ul>

    <h3>Cloud Data & Engineering</h3>
    <ul>
      <li>Azure Data Factory (ADF)</li>
      <li>Azure Databricks</li>
      <li>Azure Synapse Analytics</li>
      <li>SQL Warehouses</li>
    </ul>

    <h3>BI & Visual Analytics</h3>
    <ul>
      <li>Power BI / Tableau</li>
      <li>SSRS / SSAS (OLAP Cubes)</li>
      <li>SAS/Stat</li>
    </ul>

    <h3>Programming & Scripting</h3>
    <ul>
      <li>T-SQL / Python (Pandas, NumPy)</li>
      <li>PySpark</li>
      <li>VBA / Shell Scripting</li>
      <li>SAS Base & Advanced</li>
    </ul>

    <h3>Methodologies</h3>
    <ul>
      <li>Dimensional Modeling</li>
      <li>Star / Snowflake Schemas</li>
      <li>Performance Tuning & Indexing</li>
      <li>Git Version Control / Agile</li>
    </ul>
  </div>
  ```

- [ ] **Step 2: Commit sidebar skills updates**
  Run: `git add resume.html`
  Run: `git commit -m "feat: integrate AI and cloud data engineering skills in sidebar"`

---

### Task 2: Integrate AI & Data Engineering into Main Panel Content

**Files:**
- Modify: `resume.html` (specifically `<section class="summary-section">` and `<section class="experience-section">`)

- [ ] **Step 1: Rewrite Professional Summary and Experience bullet points**
  Inject AI efficiency tools and Azure Data Engineering pipelines into the summary and job items:
  
  *Professional Summary Update*:
  ```html
  <p>
    Data-driven Business Intelligence Developer and Data Engineer with over 4 years of experience architecting, optimizing, and automating end-to-end data pipelines and analytical solutions. Specialized in utilizing the Microsoft BI stack (SSIS, SSAS, SSRS, SQL Server) and Microsoft Azure cloud solutions (Azure Data Factory, Azure Databricks, Azure Synapse, SQL Warehouses). Proficient in leveraging AI tools (LLMs, GitHub Copilot, Microsoft 365 Copilot) to accelerate script generation, optimize T-SQL queries, and automate report pipelines. Strong analytical foundation with Python (Pandas/NumPy), PySpark, VBA, Shell scripting, and dimensional modeling.
  </p>
  ```

  *BizData Analytics Solutions Inc. Bullets Update*:
  ```html
  <ul class="job-bullets">
    <li><strong>AI-Accelerated Development:</strong> Integrated LLMs (GPT, Claude, Gemini) and GitHub Copilot to automate PySpark and T-SQL script generation and expedite query tuning, accelerating development velocity and project delivery by 25%.</li>
    <li><strong>Cloud Data Engineering:</strong> Architected and orchestrated scalable cloud data ingestion and ELT pipelines utilizing Azure Data Factory, Azure Databricks, and PySpark to load and transform enterprise datasets into Azure Synapse Analytics and SQL Warehouses.</li>
    <li><strong>Database Optimization & Modeling:</strong> Architected and tuned SQL Server database objects, optimizing stored procedures, triggers, views, and indexes in SSMS to reduce query latency by 30% and support transactional (OLTP) environments.</li>
    <li><strong>Dimensional Data Warehousing:</strong> Built enterprise data warehouses utilizing dimensional modeling (Star and Snowflake schemas), migrating legacy history and generating high-performance OLAP cubes in SSAS.</li>
    <li><strong>Visual Analytics & Copilot:</strong> Developed high-adoption interactive dashboards and executive scorecards using Power BI and Tableau, leveraging advanced DAX, Time Intelligence, and Microsoft 365 Copilot to synthesize audit narratives.</li>
    <li><strong>Advanced Analytics Integration:</strong> Collaborated with data scientists to perform feature engineering, data imputation, and statistical modeling (segmentation, churn analysis) to support classification and predictive models.</li>
    <li><strong>Orchestration & SLA Monitoring:</strong> Configured SQL Server Job Agent schedules to automate daily and weekly ETL workflows, implementing proactive alerting and root-cause analysis that reduced pipeline failure resolution times by 40%.</li>
  </ul>
  ```

  *Samuel, Son & Co., Limited Bullets Update*:
  ```html
  <ul class="job-bullets">
    <li><strong>Automation & Scripting:</strong> Automated manual data extraction, validation, and report formatting workflows by developing custom Shell scripts and VBA macros, saving 10+ hours per week of manual data preparation.</li>
    <li><strong>Statistical Tracking & Python:</strong> Utilized Python (Pandas, NumPy) and SAS/Stat to aggregate operational KPIs, building statistical tracking models and customer segments that pinpointed logistics and distribution inefficiencies.</li>
    <li><strong>KPI Architecture:</strong> Partnered with cross-functional stakeholders to define business objectives and translate them into technical specifications, deploying interactive dashboards in Power BI and SSRS that tracked key corporate performance indicators.</li>
    <li><strong>Query Performance Tuning:</strong> Conducted comprehensive query optimization and index restructuring for operational reporting, leading to a 25% decrease in report loading times.</li>
    <li><strong>Strategic Presentations:</strong> Analyzed complex data structures to extract key trends, preparing and delivering data-driven findings and presentations to non-technical business leaders to support executive decision-making.</li>
    <li><strong>Data Governance:</strong> Authored extensive technical documentation, data dictionaries, and user training guides to ensure data reliability and promote self-service BI adoption.</li>
  </ul>
  ```

- [ ] **Step 2: Commit main content changes**
  Run: `git add resume.html`
  Run: `git commit -m "feat: integrate AI acceleration and data engineering achievements into experience"`

---

### Task 3: Visual Verification and Server Copy

**Files:**
- Modify: None

- [ ] **Step 1: Copy updated resume.html to visual companion content directory**
  Run: `cp resume.html .superpowers/brainstorm/57504-1780460655/content/resume.html`

- [ ] **Step 2: Verify visual rendering on browser**
  Inspect `http://localhost:58135/resume.html` and ensure formatting, alignments, list items, and sections are perfect.
