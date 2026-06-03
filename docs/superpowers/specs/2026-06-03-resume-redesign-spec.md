# Resume Redesign Spec & Structured Prompt (v2 - AI & Data Engineering Integration)

This document defines the revised structural specifications, content rewrite rules, and visual style guides for reconstructing Becky Qi's resume, incorporating AI technologies and advanced Data Engineering tools. Once approved, this specification will serve as the prompt/guide to generate the final resume.

---

## 1. Structured Prompt for Resume Generation

```markdown
Role: Elite Resume Writer & Senior Analytics/AI Career Consultant
Task: Rewrite and redesign Becky Qi's resume into a modern, high-impact, ATS-friendly document.

### Target Profile
- **Target Role**: BI Developer / BI Engineer & Data Engineer.
- **Core Narrative**: A data-driven professional with 4+ years of experience bridging traditional enterprise SQL Server BI stack (SSIS/SSAS/SSRS) with modern cloud data platforms (Azure, Databricks) and integrating AI technologies (LLMs, GitHub Copilot) to accelerate development velocity and automate analytics workflows.
- **Tone**: Professional, technical, metric-driven, and impact-oriented.

### Section-by-Section Content Guidelines

#### 1. Header & Contact
- **Name**: Becky Qi
- **Contact Details**: Keep clean and professional. Use email, phone, location (Kanata, ON), LinkedIn, and GitHub links.
- **Professional Title**: BI Developer / Data Engineer

#### 2. Professional Summary (Upgraded)
- Highlight:
  - 4+ years of experience designing, optimizing, and automating end-to-end BI and data engineering pipelines.
  - Core expertise in Microsoft BI (SSIS/SSAS/SSRS, SQL Server) and Microsoft Azure cloud data solutions (Azure Data Factory, Azure Synapse Analytics, Azure Databricks, SQL Warehouses).
  - Practical application of AI technologies, including LLMs (GPT, Claude, Gemini) and AI assistants (GitHub Copilot, Microsoft 365 Copilot) to streamline script generation, optimize queries, and automate report writing.
  - Strong analytical foundation with Python (Pandas/NumPy), PySpark, T-SQL, VBA, Shell scripting, and dimensional modeling.

#### 3. Technical Skills (Reorganized with AI & Data Engineering)
Group skills into clean categories:
- **Cloud Data & Engineering**: Azure Data Factory (ADF), Azure Databricks, Azure Synapse Analytics, SQL Warehouses
- **BI & Visual Analytics**: Power BI, Tableau, SSRS, SSAS (OLAP Cubes), SAS/Stat, Microsoft 365 Copilot
- **AI & Intelligent Tools**: LLMs (GPT, Claude, Gemini), AI Agent Skills, GitHub Copilot, Prompt Engineering
- **Programming & Scripting**: T-SQL, Python (Pandas, NumPy), PySpark, VBA, Shell Scripting, SAS
- **Methodologies**: Dimensional Modeling (Star/Snowflake), Performance Tuning & Indexing, SDLC (Agile), Git Version Control

#### 4. Work Experience (Outcome-Driven Upgrades with AI & Cloud Integration)

*BizData Analytics Solutions Inc. | BI Developer | May 2024 – Present*
- **AI-Accelerated Development**: Integrate LLMs (GPT, Claude, Gemini) and GitHub Copilot to automate script writing (T-SQL, PySpark) and accelerate query tuning, increasing development efficiency and delivery speed by 25%.
- **Cloud Data Warehousing**: Architect and orchestrate cloud-native ELT pipelines utilizing Azure Data Factory, Azure Databricks, and PySpark to load and transform enterprise datasets into Azure Synapse and SQL Warehouses.
- **Database Optimization**: Architect and tune SQL Server database objects, optimizing stored procedures, triggers, views, and indexes in SSMS to reduce query latency by 30% and support transactional (OLTP) environments.
- **Dimensional Data Modeling**: Migrate legacy data and build enterprise data warehouses utilizing dimensional modeling (Star and Snowflake schemas), generating high-performance OLAP cubes in SSAS.
- **Visual Analytics & Copilot**: Develop high-adoption interactive dashboards using Power BI and Tableau, leveraging advanced DAX, Time Intelligence, and Microsoft 365 Copilot to synthesize audit narratives and KPIs.
- **Advanced Analytics & ML**: Perform feature engineering, data imputation, and statistical modeling (segmentation, churn analysis) to support classification and predictive models.
- **Orchestration & SLA Monitoring**: Automate daily and weekly ETL workflows in SQL Server Job Agent, implementing proactive alerting and root-cause analysis that reduced pipeline failure resolution times by 40%.

*Samuel, Son & Co., Limited | Data Analyst | Mar. 2021 – Mar. 2024*
- **Data Engineering Automation**: Automated manual data extraction, validation, and report formatting by developing custom Shell scripts and VBA macros, saving 10+ hours per week of manual data preparation.
- **Analytics & Python**: Leveraged Python (Pandas, NumPy) and SAS/Stat to build statistical tracking models, segment customer bases, and output high-quality metrics to monitor logistics and distribution.
- **KPI Architecture & Dashboarding**: Define corporate business objectives and translate them into technical schemas, deploying interactive dashboards in Power BI and SSRS that tracked key corporate performance indicators.
- **Performance Optimization**: Conduct query optimization and index restructuring for operational reporting, leading to a 25% decrease in report loading times.
- **Communication & Data Governance**: Create technical data-dictionary assets, document metadata pipelines, and present data-driven findings to business leaders to support executive decision-making.

#### 5. Education & Certifications
- **Education**:
  - Master of Science in Applied Mathematics – Queens College, City University of New York (CUNY)
  - Graduate Certificate in Marketing Research and Analytics – Centennial College
  - Bachelor of Science in Electrical Engineering – HLJ Science and Technology University
- **Certifications**:
  - SAS Certified Advanced Programmer
  - SAS Certified Base Programmer

---

### Layout & UI/UX Guidelines (Two-Column Layout B)
- Left Sidebar (Narrow): Contact Info, Technical Skills (neatly categorized), Education, Certifications.
- Right Main Panel (Wide): Full Name & Title (Header), Professional Summary, Work Experience.
- Typography & Spacing: Clean Inter font, slate/navy blue accent (`#0f172a` and `#0284c7`), generous margins, full print grayscale override via CSS variables.
```

---

## 2. Success Criteria & Verification
1. Technical skills category contains all requested items (AI, Cloud, Scripting).
2. Work experience sections seamlessly weave in AI tools (Copilot, GPT, Claude, Gemini) and Data Engineering tools (Azure Data Factory, Databricks, Synapse, PySpark, Shell, VBA) as drivers of efficiency and scaling.
3. The layout remains clean, responsive, and print-optimized.
