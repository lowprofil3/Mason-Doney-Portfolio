const metrics = {
  sites: 24,
  automationHours: 620,
  gpa: 3.9,
};

const skills = [
  {
    title: "Responsive Web Development",
    description: "Design system thinking, accessibility, and pixel-level detail across devices.",
    tags: ["React/Next", "Semantic HTML", "Design tokens"],
  },
  {
    title: "Performance & Quality",
    description: "Lighthouse-driven optimization, clean CSS architecture, and automated QA.",
    tags: ["Core Web Vitals", "Cypress QA", "CI-ready"],
  },
  {
    title: "Python Automation",
    description: "Browser flows, API glue, and data processing that reduce manual work.",
    tags: ["Selenium", "FastAPI", "Pandas"],
  },
  {
    title: "Collaboration",
    description: "Clear communication, concise documentation, and iterative delivery.",
    tags: ["Agile", "Notion", "Technical writing"],
  },
];

const projects = [
  {
    title: "Interactive Launch Microsite",
    result: "Boosted signups by 32% with responsive UI and conversion-focused messaging.",
    tags: ["Next.js", "Animations", "A/B tested"],
  },
  {
    title: "E-commerce refresh",
    result: "Reduced bounce rate by 18% through speed tuning and UX refinements.",
    tags: ["Headless CMS", "Performance", "Accessibility"],
  },
  {
    title: "Content automation suite",
    result: "Automated data collection and formatting for weekly marketing reports.",
    tags: ["Python", "Scheduling", "CSV/Sheets"],
  },
];

const automations = [
  {
    title: "QA regression bot",
    detail: "Python + Selenium runs nightly checks, capturing screenshots and alerts for failures.",
    tags: ["Selenium", "Alerts", "Continuous QA"],
  },
  {
    title: "Data intake pipeline",
    detail: "API polling, deduplication, and CSV export feeding dashboards automatically.",
    tags: ["FastAPI", "Pandas", "Cron"],
  },
  {
    title: "Form handling assistant",
    detail: "Automates form submissions and validation for partner onboarding flows.",
    tags: ["Requests", "Validation", "Webhooks"],
  },
];

const academicBadges = [
  "Honor roll standing",
  "STEM-focused coursework",
  "Leadership in project teams",
  "GPA 3.9 at Lake Belton High School",
];

const journey = [
  {
    year: "2019",
    title: "HTML & CSS foundations",
    detail: "Built first responsive layouts and learned accessibility best practices.",
  },
  {
    year: "2021",
    title: "Modern front-end",
    detail: "Adopted React and component-driven workflows to ship faster and stay consistent.",
  },
  {
    year: "2022",
    title: "Automation focus",
    detail: "Created Python scripts to verify builds, scrape data, and accelerate reporting.",
  },
  {
    year: "2024",
    title: "Design systems & delivery",
    detail: "Implemented design tokens, CI checks, and documentation to scale collaboration.",
  },
];

const contactTags = ["Remote-ready", "Async friendly", "Hands-on builder", "Available for contract"];

function animateValue(element, endValue) {
  let start = 0;
  const duration = 1400;
  const startTime = performance.now();

  function step(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = start + (endValue - start) * progress;
    element.textContent = endValue % 1 === 0 ? Math.round(value) : value.toFixed(1);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function renderCards(containerId, items, type) {
  const container = document.getElementById(containerId);
  const cardClass = `${type}-card`;

  const fragments = items.map((item) => {
    const tags = (item.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");
    return `
      <article class="${cardClass}">
        ${tags}
        <h3>${item.title}</h3>
        <p>${item.description || item.result || item.detail}</p>
      </article>
    `;
  });

  container.innerHTML = fragments.join("");
}

function renderTimeline(items) {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = items
    .map(
      (item) => `
      <div class="timeline__item">
        <div class="timeline__meta">${item.year}</div>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </div>`
    )
    .join("");
}

function renderBadges() {
  const list = document.getElementById("academic-badges");
  list.innerHTML = academicBadges.map((badge) => `<li>${badge}</li>`).join("");
}

function renderContactChips() {
  const row = document.getElementById("contact-tags");
  row.innerHTML = contactTags.map((tag) => `<span class="chip">${tag}</span>`).join("");
}

function init() {
  animateValue(document.getElementById("metric-sites"), metrics.sites);
  animateValue(document.getElementById("metric-automation"), metrics.automationHours);
  animateValue(document.getElementById("metric-gpa"), metrics.gpa);

  renderCards("skill-grid", skills, "skill");
  renderCards("project-grid", projects, "project");
  renderCards("automation-grid", automations, "automation");
  renderTimeline(journey);
  renderBadges();
  renderContactChips();
}

document.addEventListener("DOMContentLoaded", init);
