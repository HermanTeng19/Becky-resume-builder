# Resume Reconstruction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconstruct Becky Qi's resume into a modern, minimalist, two-column HTML layout with upgraded professional language, modern technology integration, and full print/ATS optimization.

**Architecture:** A single self-contained HTML file featuring standard semantic elements (`<header>`, `<aside>`, `<main>`, `<section>`). It uses CSS grid/flexbox for layout, Google Fonts (Inter) for modern typography, CSS variables for theming, and an `@media print` style block to ensure it prints perfectly to a standard A4/US Letter PDF.

**Tech Stack:** HTML5, CSS3, Google Fonts (Inter).

---

### Task 1: Initialize HTML Structure & Sidebar Content

**Files:**
- Create: `resume.html`

- [ ] **Step 1: Write HTML template with basic shell and Sidebar contents**
  Write the standard HTML structure, load the Inter font, and fill in the Left Sidebar content (Contact, Skills, Education, Certifications).
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Becky Qi - Resume</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
      /* CSS will be added here in Task 3 */
    </style>
  </head>
  <body>
    <div class="resume-container">
      <!-- Left Column (Sidebar) -->
      <aside class="sidebar">
        <div class="sidebar-section contact-info">
          <h2>Contact</h2>
          <p><strong>Phone:</strong> (647) 871-6066</p>
          <p><strong>Email:</strong> <a href="mailto:qi.binbin@outlook.com">qi.binbin@outlook.com</a></p>
          <p><strong>Location:</strong> Kanata, ON, K2T 0C3</p>
          <p><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/becky-qi-bi</a></p>
          <p><strong>GitHub:</strong> <a href="#">github.com/beckyqi-data</a></p>
        </div>

        <div class="sidebar-section skills-section">
          <h2>Skills</h2>
          
          <h3>BI & Visual Analytics</h3>
          <ul>
            <li>Power BI</li>
            <li>Tableau</li>
            <li>SSRS</li>
            <li>SAS/Stat</li>
          </ul>

          <h3>Data Engineering & ETL</h3>
          <ul>
            <li>SSIS</li>
            <li>T-SQL</li>
            <li>Python (Pandas, NumPy)</li>
            <li>PySpark</li>
            <li>SQL Job Agent</li>
          </ul>

          <h3>Data Warehouse & DB</h3>
          <ul>
            <li>MS SQL Server</li>
            <li>SSAS (OLAP Cubes)</li>
            <li>Snowflake</li>
            <li>Google BigQuery</li>
            <li>AWS Redshift</li>
          </ul>

          <h3>Methodologies</h3>
          <ul>
            <li>Kimball Dimensional Modeling</li>
            <li>Star / Snowflake Schemas</li>
            <li>Performance Tuning & Indexing</li>
            <li>Software Development Life Cycle</li>
            <li>Git / Version Control</li>
          </ul>
        </div>

        <div class="sidebar-section education-section">
          <h2>Education</h2>
          <div class="edu-item">
            <p class="edu-degree">M.S. in Applied Mathematics</p>
            <p class="edu-school">Queens College, CUNY, USA</p>
          </div>
          <div class="edu-item">
            <p class="edu-degree">Graduate Certificate in Marketing Research & Analytics</p>
            <p class="edu-school">Centennial College, Canada</p>
          </div>
          <div class="edu-item">
            <p class="edu-degree">B.S. in Electrical Engineering</p>
            <p class="edu-school">HLJ Science & Tech University, China</p>
          </div>
        </div>

        <div class="sidebar-section certifications-section">
          <h2>Certifications</h2>
          <ul>
            <li>SAS Certified Advanced Programmer</li>
            <li>SAS Certified Base Programmer</li>
          </ul>
        </div>
      </aside>

      <!-- Right Column (Main Content) -->
      <main class="main-content">
        <!-- Main content to be completed in Task 2 -->
      </main>
    </div>
  </body>
  </html>
  ```

- [ ] **Step 2: Commit initial skeleton**
  Run: `git add resume.html`
  Run: `git commit -m "feat: initialize resume skeleton and sidebar content"`

---

### Task 2: Implement Main Panel Content

**Files:**
- Modify: `resume.html` (specifically `<main class="main-content">` section)

- [ ] **Step 1: Write Upgraded Professional Summary and Work Experience**
  Populate the `<main>` section with the revised, high-impact statements using active verbs and metrics.
  ```html
  <!-- Replace main content placeholder with the following: -->
  <header class="resume-header">
    <h1 class="candidate-name">Becky Qi</h1>
    <p class="candidate-title">Business Intelligence (BI) Developer / BI Engineer</p>
  </header>

  <section class="main-section summary-section">
    <h2 class="section-title">Professional Summary</h2>
    <p>
      Data-driven Business Intelligence Developer and BI Engineer with over 4 years of expertise in architecting, optimizing, and automating end-to-end data pipelines and analytical solutions. Proficient in bridging enterprise Microsoft BI stacks (SSIS, SSAS, SSRS, SQL Server) with modern cloud architectures (Snowflake, BigQuery) and Python/PySpark for scalable transformations. Demonstrated success in designing high-adoption dashboards, optimizing complex queries, and collaborating with cross-functional partners to translate raw business metrics into strategic, actionable insights.
    </p>
  </section>

  <section class="main-section experience-section">
    <h2 class="section-title">Professional Experience</h2>

    <div class="job-item">
      <div class="job-header">
        <h3 class="job-title">BI Developer</h3>
        <span class="job-date">May 2024 – Present</span>
      </div>
      <div class="job-company">BizData Analytics Solutions Inc. | Toronto, ON</div>
      <ul class="job-bullets">
        <li><strong>Database Optimization & Modeling:</strong> Architected and tuned SQL Server database objects, optimizing stored procedures, triggers, views, and indexes in SSMS to reduce query latency by 30% and support transactional (OLTP) environments.</li>
        <li><strong>Scalable Data Pipelines:</strong> Designed and implemented scalable ETL/ELT pipelines using SSIS and Python to ingest, clean, and enrich structured and semi-structured datasets from disparate APIs, flat files, and databases.</li>
        <li><strong>Dimensional Data Warehousing:</strong> Built enterprise data warehouses utilizing Kimball dimensional modeling (Star and Snowflake schemas), migrating legacy history and generating high-performance OLAP cubes in SSAS.</li>
        <li><strong>Visual Analytics & DAX:</strong> Developed high-adoption interactive dashboards and executive scorecards using Power BI and Tableau, leveraging advanced DAX and Time Intelligence functions to drive audit insights.</li>
        <li><strong>Advanced Analytics Integration:</strong> Collaborated with data scientists to perform feature engineering, data imputation, and statistical modeling (segmentation, churn analysis) to support classification and predictive models.</li>
        <li><strong>Orchestration & SLA Monitoring:</strong> Configured SQL Server Job Agent schedules to automate daily and weekly ETL workflows, implementing proactive alerting and root-cause analysis that reduced pipeline failure resolution times by 40%.</li>
      </ul>
    </div>

    <div class="job-item">
      <div class="job-header">
        <h3 class="job-title">Data Analyst</h3>
        <span class="job-date">Mar. 2021 – Mar. 2024</span>
      </div>
      <div class="job-company">Samuel, Son & Co., Limited | Toronto, ON</div>
      <ul class="job-bullets">
        <li><strong>KPI Architecture:</strong> Partnered with cross-functional stakeholders to define business objectives and translate them into technical specifications, deploying interactive dashboards in Power BI and SSRS that tracked key corporate performance indicators.</li>
        <li><strong>Query Performance Tuning:</strong> Conducted comprehensive query optimization and index restructuring for operational reporting, leading to a 25% decrease in report loading times and enhancing user experience.</li>
        <li><strong>Statistical Tracking:</strong> Utilized Excel Pivot tables, advanced formulas, and SAS/Stat to aggregate operational KPIs, delivering high-caliber dashboard visualizations that pinpointed logistics and distribution inefficiencies.</li>
        <li><strong>Strategic Presentations:</strong> Analyzed complex data structures to extract key trends, preparing and delivering data-driven findings and presentations to non-technical business leaders to support executive decision-making.</li>
        <li><strong>Data Governance:</strong> Authored extensive technical documentation, data dictionaries, and user training guides to ensure data reliability and promote self-service BI adoption.</li>
      </ul>
    </div>
  </section>
  ```

- [ ] **Step 2: Commit upgraded content**
  Run: `git add resume.html`
  Run: `git commit -m "feat: populate upgraded resume content"`

---

### Task 3: Implement Visual Styling (Modern Minimalist CSS)

**Files:**
- Modify: `resume.html` (specifically `<style>` tag in `<head>`)

- [ ] **Step 1: Write responsive, modern CSS styles including Print Stylesheet**
  Inject vanilla CSS rules to format Layout B (Two-column layout, left sidebar, right main panel, Inter font, custom color variables, clean spacing, print optimization).
  ```css
  /* Add inside the <style> block of resume.html */
  :root {
    --primary-color: #0f172a; /* Slate 900 */
    --accent-color: #0284c7;  /* Sky 600 */
    --text-main: #334155;    /* Slate 700 */
    --text-dark: #0f172a;    /* Slate 900 */
    --bg-light: #f8fafc;     /* Slate 50 */
    --border-color: #e2e8f0; /* Slate 200 */
    --sidebar-bg: #f1f5f9;   /* Slate 100 */
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--text-main);
    background-color: #ffffff;
    line-height: 1.6;
    font-size: 14px;
    -webkit-print-color-adjust: exact;
  }

  .resume-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
  }

  /* Left Column (Sidebar) */
  .sidebar {
    background-color: var(--sidebar-bg);
    padding: 2.5rem 1.5rem;
    border-right: 1px solid var(--border-color);
  }

  .sidebar-section {
    margin-bottom: 2rem;
  }

  .sidebar-section h2 {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--primary-color);
    border-bottom: 2px solid var(--accent-color);
    padding-bottom: 0.3rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .contact-info p {
    margin: 0.4rem 0;
    font-size: 0.85rem;
    word-break: break-all;
  }

  .contact-info a {
    color: var(--accent-color);
    text-decoration: none;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }

  .skills-section h3 {
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--accent-color);
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    font-weight: 600;
  }

  .skills-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills-section li {
    font-size: 0.85rem;
    padding: 0.2rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.03);
    color: var(--text-dark);
  }

  .edu-item {
    margin-bottom: 0.8rem;
  }

  .edu-degree {
    font-weight: 600;
    color: var(--text-dark);
    font-size: 0.85rem;
    margin: 0 0 0.1rem 0;
    line-height: 1.3;
  }

  .edu-school {
    font-size: 0.8rem;
    margin: 0;
    color: var(--text-main);
  }

  .certifications-section ul {
    padding-left: 1rem;
    margin: 0;
    font-size: 0.85rem;
  }

  .certifications-section li {
    margin-bottom: 0.4rem;
    color: var(--text-dark);
  }

  /* Right Column (Main Content) */
  .main-content {
    padding: 3rem 2.5rem;
  }

  .resume-header {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
  }

  .candidate-name {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--primary-color);
    margin: 0;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .candidate-title {
    font-size: 1.2rem;
    color: var(--accent-color);
    margin: 0.3rem 0 0 0;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  .main-section {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    padding-bottom: 0.4rem;
    margin-top: 0;
    margin-bottom: 1.2rem;
    font-weight: 700;
  }

  .summary-section p {
    font-size: 0.95rem;
    color: var(--text-main);
    margin: 0;
    text-align: justify;
  }

  .job-item {
    margin-bottom: 2rem;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.2rem;
  }

  .job-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin: 0;
  }

  .job-date {
    font-size: 0.85rem;
    color: var(--accent-color);
    font-weight: 600;
  }

  .job-company {
    font-size: 0.9rem;
    font-style: italic;
    color: var(--text-main);
    margin-bottom: 0.6rem;
    font-weight: 500;
  }

  .job-bullets {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.88rem;
  }

  .job-bullets li {
    margin-bottom: 0.5rem;
  }

  /* PRINT STYLE BLOCK */
  @media print {
    body {
      background-color: #ffffff;
      color: #000000;
      font-size: 11pt;
    }
    .resume-container {
      display: grid;
      grid-template-columns: 240px 1fr;
      box-shadow: none;
      border: none;
      max-width: 100%;
      margin: 0;
      min-height: auto;
    }
    .sidebar {
      background-color: #f8fafc !important;
      padding: 1.5rem 1rem;
      border-right: 1px solid #cbd5e1;
    }
    .main-content {
      padding: 1.5rem 1.5rem;
    }
    .candidate-name {
      font-size: 24pt;
    }
    .candidate-title {
      font-size: 13pt;
    }
    .job-title {
      font-size: 11pt;
    }
    .job-bullets {
      font-size: 9.5pt;
    }
    a {
      text-decoration: none;
      color: #000000;
    }
  }
  ```

- [ ] **Step 2: Commit styles**
  Run: `git add resume.html`
  Run: `git commit -m "style: implement modern minimalist Layout B styling"`

---

### Task 4: Visual Review and Server Shutdown

**Files:**
- Modify: None

- [ ] **Step 1: Render the new resume file in the brainstorm companion**
  Write a file `view-resume.html` to `screen_dir` containing an iframe that embeds the generated resume file, or directly copy the resume's markup (with local links) to the companion directory.
  Since the server serves files from the `content` folder, we can create a symlink or copy `resume.html` to `content/resume.html` and write a container `view-resume.html` that imports it, allowing the user to view it on the URL: `http://localhost:58135/resume.html`.
  Wait, let's copy it directly using a shell command:
  Run: `cp resume.html .superpowers/brainstorm/57504-1780460655/content/resume.html`

- [ ] **Step 2: Confirm display visually with the user**
  Ask the user to check `http://localhost:58135/resume.html` in their browser to review the design, colors, and layout.

- [ ] **Step 3: Clean up background server**
  Run: `/Users/hermanteng/.gemini/config/plugins/superpowers/skills/brainstorming/scripts/stop-server.sh /Users/hermanteng/Documents/Projects/2026/6_Jun/Becky-resume-builder/.superpowers/brainstorm/57504-1780460655`
  
- [ ] **Step 4: Commit cleanup**
  Run: `git add .gitignore` (to ensure `.superpowers/` is ignored if not already)
  Run: `git commit -m "chore: ignore session cache"`
