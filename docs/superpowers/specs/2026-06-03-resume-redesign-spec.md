# Resume Redesign Spec & Structured Prompt

This document defines the structural specifications, content rewrite rules, and visual style guides for reconstructing Becky Qi's resume. Once approved, this specification will serve as the prompt/guide to generate the final resume.

---

## 1. Structured Prompt for Resume Generation

```markdown
Role: Elite Resume Writer & Senior Analytics Career Consultant
Task: Rewrite and redesign Becky Qi's resume into a modern, high-impact, ATS-friendly document.

### Target Profile
- **Target Role**: Business Intelligence (BI) Developer / BI Engineer (with a modern Analytics Engineer angle).
- **Core Narrative**: A data-driven professional with 4+ years of experience bridging traditional enterprise SQL Server BI stack (SSIS/SSAS/SSRS) with modern cloud data platforms (Snowflake, BigQuery, PySpark, Python) and software engineering best practices (Kimball dimensional modeling, Git, pipeline automation, performance tuning).
- **Tone**: Professional, technical, metric-driven, and impact-oriented.

### Section-by-Section Content Guidelines

#### 1. Header & Contact
- **Name**: Becky Qi
- **Contact Details**: Keep clean and professional. Use email, phone, location (Kanata, ON), and placeholders for LinkedIn and GitHub.
- **Professional Title**: BI Developer / BI Engineer

#### 2. Professional Summary (Upgraded)
- Pivot from a generic list of qualifications to a powerful 3-4 sentence paragraph.
- Highlight:
  - 4+ years of experience designing, optimizing, and automating end-to-end BI solutions and data pipelines.
  - Expertise in SQL Server, SSIS, SSRS, SSAS, Power BI, and Tableau.
  - Experience bridging traditional BI with cloud platforms (Snowflake, BigQuery) and Python/PySpark for scalable data transformations.
  - Focus on performance tuning, dimensional modeling (Kimball), and delivering actionable insights to stakeholders.

#### 3. Technical Skills (Reorganized for ATS & Clarity)
Group skills into clean categories:
- **BI & Visual Analytics**: Power BI, Tableau, SSRS, SAS/Stat
- **Data Engineering & ETL**: SSIS, T-SQL, Python (Pandas/NumPy), PySpark, SQL Job Agent
- **Database & Data Warehousing**: MS SQL Server, SSAS, OLAP Cubes, OLTP, Snowflake, Google BigQuery, AWS Redshift
- **Methodologies & Frameworks**: Dimensional Modeling (Kimball), SDLC (Agile), Performance Tuning, Git, CI/CD Concepts

#### 4. Work Experience (Outcome-Driven Upgrades)
Rewrite bullet points using the **X-Y-Z formula**: "Accomplished [X] as measured by [Y], by doing [Z]".

*BizData Analytics Solutions Inc. | BI Developer | May 2024 – Present*
- **Database Development**: Instead of "Created and maintained database objects...", write about *architecting, optimizing, and tuning stored procedures, views, and indexes to reduce query latency and improve write performance*.
- **ETL & Data Pipelines**: Frame "Designed and implemented data pipelines..." as *building scalable ETL pipelines using SSIS and Python, handling APIs and flat files, ensuring data quality and automatic error-handling*.
- **Analytics & Data Modeling**: Connect data preparation and machine learning (classification, segmentation) to *business outcomes (e.g. driving predictive analytics for customer churn and credit risk)*.
- **Reporting & Dashboards**: Frame Power BI/Tableau/SSAS work as *developing high-adoption interactive dashboards and OLAP cubes that monitor key business KPIs, leveraging advanced DAX and Time Intelligence*.
- **Orchestration & Support**: Frame job agent scheduling as *establishing automated data orchestration and SLA monitoring, reducing manual operations and implementing automated alerting for job failures*.

*Samuel, Son & Co., Limited | Data Analyst | Mar. 2021 – Mar. 2024*
- **Requirements & Strategy**: Upgrade "Gathered and analyzed customer requirements..." to *collaborating with business partners to translate complex requirements into technical schemas and dimensional models*.
- **Performance Optimization**: Frame "Conducted performance turning..." as *optimizing report queries and SSRS execution paths, reducing report generation times by [X]%*.
- **Aesthetic Analytics**: Reframe Excel/SAS work as *building robust statistical tracking models and scorecards that improved operational metrics*.
- **Communication & Docs**: Frame presentation and documentation as *creating technical data-dictionary assets and presenting strategic insights to executives*.

#### 5. Education & Certifications
- **Education**:
  - Master of Science in Applied Mathematics – Queens College, City University of New York (CUNY)
  - Graduate Certificate in Marketing Research and Analytics – Centennial College
  - Bachelor of Science in Electrical Engineering – HLJ Science and Technology University
- **Certifications**:
  - SAS Certified Base Programmer
  - SAS Certified Advanced Programmer

---

### Layout & UI/UX Guidelines (Two-Column Layout B)

- **Structure**:
  - **Left Sidebar (Narrow)**: Contact Info, Technical Skills (neatly categorized), Education, Certifications.
  - **Right Main Panel (Wide)**: Full Name & Title (Header), Professional Summary, Work Experience (BizData Analytics followed by Samuel, Son & Co.).
- **Aesthetics & Styling**:
  - **Typography**: Sleek sans-serif font (Inter or Outfit from Google Fonts) with proper weight hierarchy (600/700 for headings, 400 for body).
  - **Color Palette**: Elegant dark-mode/light-mode compatibility. Use a premium slate/navy blue accent (`#0f172a` or `#0284c7`) for headers and highlights.
  - **UX Polish**: Use clean dividers, generous line spacing (1.5), and subtle margins to maximize readability.
  - **ATS Compatibility**: To ensure ATS parsing, the HTML layout must map logically from top-to-bottom, left-to-right, using standard tags (`<h1>`, `<h2>`, `<p>`).
  - **Print styling**: Must print perfectly to a single-page or neat two-page PDF without weird line-breaks or background-color truncation.
```

---

## 2. Success Criteria & Verification
1. The structured prompt outlines the exact wording and reframing strategies for every section.
2. The UI/UX matches "Layout B" with a clean contemporary two-column style.
3. The language uses active, professional action verbs and data-driven achievements.
4. ATS compatibility is addressed via clean document structure.
