// app.js

// 1. Skill Data Configuration
const skillCategories = {
  ai: {
    labels: ['LLMs', 'Prompt Eng.', 'Copilot Tools', 'AI Workflows'],
    data: [90, 85, 95, 80],
    label: 'AI & Intelligent Tools'
  },
  cloud: {
    labels: ['Data Factory', 'Databricks', 'Synapse', 'SQL Warehouses'],
    data: [85, 80, 85, 90],
    label: 'Cloud Data & Engineering'
  },
  bi: {
    labels: ['Power BI', 'Tableau', 'SSRS', 'SSAS Cubes'],
    data: [95, 85, 90, 90],
    label: 'BI & Visual Analytics'
  },
  scripting: {
    labels: ['T-SQL', 'Python', 'PySpark', 'VBA/Shell'],
    data: [95, 85, 80, 75],
    label: 'Programming & Scripting'
  }
};

let skillChart = null;

function renderChart(categoryKey) {
  const canvas = document.getElementById('skillsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const chartData = skillCategories[categoryKey];
  if (!chartData) return;

  // Destroy existing chart if it exists
  if (skillChart) {
    skillChart.destroy();
  }

  // Chart.js configuration
  skillChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: chartData.labels,
      datasets: [{
        label: chartData.label,
        data: chartData.data,
        backgroundColor: 'rgba(2, 132, 199, 0.2)', // Sky 600 with opacity
        borderColor: '#0284c7',
        pointBackgroundColor: '#0284c7',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0284c7',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: '#e2e8f0' },
          grid: { color: '#e2e8f0' },
          pointLabels: {
            color: '#0f172a',
            font: { family: 'Inter', size: 10, weight: 'bold' }
          },
          ticks: {
            display: false,
            stepSize: 20
          },
          min: 0,
          max: 100
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// 2. Timeline Accordion Trigger
function initTimeline() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers || headers.length === 0) return;

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');
      
      // Close others
      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) {
          c.classList.remove('open');
          c.style.maxHeight = null;
        }
      });
      document.querySelectorAll('.accordion-icon').forEach(i => {
        if (i !== icon) {
          i.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle self
      if (content) {
        if (content.classList.contains('open')) {
          content.classList.remove('open');
          content.style.maxHeight = null;
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          content.classList.add('open');
          content.style.maxHeight = content.scrollHeight + "px";
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
  
  // Auto-open first job
  if (headers.length > 0) {
    headers[0].click();
  }
}

// 3. Project Tab Switcher
const projects = {
  audit: {
    title: 'Automated Audit Data Pipeline',
    company: 'BizData Analytics Solutions Inc.',
    tech: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Synapse'],
    desc: 'Architected cloud ELT pipeline mapping multi-source financial structures. Built Python models in Databricks using PySpark, reducing nightly processing runtime by 25% and automating direct updates into Azure Synapse database warehouses.'
  },
  aiHub: {
    title: 'AI-Accelerated Development Helper',
    company: 'BizData Analytics Solutions Inc.',
    tech: ['LLMs', 'GitHub Copilot', 'Prompt Engineering'],
    desc: 'Integrated GPT models and GitHub Copilot directly into coding routines. Leveraged specialized prompts to generate 95%+ accurate SQL procedures and PySpark scripts, boosting pipeline deployment speed by 25%.'
  },
  logistics: {
    title: 'Logistics Optimization Engine',
    company: 'Samuel, Son & Co.',
    tech: ['Python (Pandas, NumPy)', 'SAS/STAT', 'VBA', 'Shell Scripting'],
    desc: 'Developed Shell scripts to automate daily operational raw logs parsing. Engineered mathematical forecasting metrics with Python Pandas, optimizing shipping allocations and saving 10+ hours per week of manual data preparation.'
  }
};

function initProjects() {
  const tabs = document.querySelectorAll('.project-tab');
  if (!tabs || tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('border-sky-600', 'text-sky-600'));
      tab.classList.add('border-sky-600', 'text-sky-600');

      const projKey = tab.dataset.project;
      const project = projects[projKey];
      if (!project) return;

      const titleEl = document.getElementById('project-title');
      if (titleEl) titleEl.textContent = project.title;

      const companyEl = document.getElementById('project-company');
      if (companyEl) companyEl.textContent = project.company;

      const descEl = document.getElementById('project-desc');
      if (descEl) descEl.textContent = project.desc;

      // Render tech badges
      const badgeContainer = document.getElementById('project-badges');
      if (badgeContainer) {
        badgeContainer.innerHTML = '';
        project.tech.forEach(t => {
          const span = document.createElement('span');
          span.className = 'badge bg-sky-50 text-sky-700 border border-sky-100';
          span.textContent = t;
          badgeContainer.appendChild(span);
        });
      }
    });
  });

  // Load first project
  if (tabs.length > 0) {
    tabs[0].click();
  }
}

// 4. Copy Email Action
function initEmailClipboard() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('qi.binbin@outlook.com')
        .then(() => {
          const feedback = document.getElementById('copy-feedback');
          if (feedback) {
            feedback.textContent = 'Copied!';
            feedback.classList.remove('hidden');
            setTimeout(() => feedback.classList.add('hidden'), 2000);
          }
        })
        .catch(err => {
          console.error('Failed to copy email: ', err);
        });
    });
  }
}

// Initialize Page Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Skills Tab triggers
  const skillTabs = document.querySelectorAll('.skill-tab');
  if (skillTabs && skillTabs.length > 0) {
    skillTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        skillTabs.forEach(t => t.classList.remove('bg-sky-600', 'text-white'));
        tab.classList.add('bg-sky-600', 'text-white');
        renderChart(tab.dataset.category);
      });
    });
  }

  // Default chart category loaded
  renderChart('ai');

  // Init others
  initTimeline();
  initProjects();
  initEmailClipboard();
});
