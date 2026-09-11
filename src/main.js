import './styles/main.css';
import { portfolioData } from './data/portfolioData.js';
import { initCustomCursor } from './components/Cursor.js';
import { renderBackgroundScrollCanvas } from './components/BackgroundScrollCanvas.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderDisciplines } from './components/Disciplines.js';
import { renderFeaturedProject } from './components/FeaturedProject.js';
import { renderProjects } from './components/Projects.js';
import { createCaseStudyModal } from './components/CaseStudyModal.js';
import { renderTechnicalSkills } from './components/TechnicalSkills.js';
import { renderTeachingMentorship } from './components/TeachingMentorship.js';
import { renderLeadership } from './components/Leadership.js';
import { renderExperienceEducation } from './components/ExperienceEducation.js';
import { renderAchievements } from './components/Achievements.js';
import { renderResearchContent } from './components/ResearchContent.js';
import { renderContactFooter } from './components/ContactFooter.js';
import { renderFinalScreen } from './components/FinalScreen.js';
import { initScrollAnimations } from './utils/scrollAnimations.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  // 1. Initialize Custom Studio Follower Cursor
  initCustomCursor();

  // 2. Initialize Case Study Modal Controller
  const modalController = createCaseStudyModal();

  // 3. Mount Full-Viewport Scroll-Animated Photographic Background (300 Frames)
  renderBackgroundScrollCanvas(document.body);

  // 4. Render Studio Header
  renderNavbar(app, portfolioData);

  // 5. Mount Main Editorial Narrative
  const main = document.createElement('main');
  main.id = 'main-editorial-content';
  app.appendChild(main);

  // Magazine-Cover Hero
  renderHero(main, portfolioData);

  // 01 — ABOUT (Asymmetric Editorial + Metadata Blocks)
  renderAbout(main, portfolioData);

  // WHAT I DO — Four Disciplines (Build, Solve, Teach, Lead)
  renderDisciplines(main, portfolioData);

  // FEATURED WORK — Agency-Grade Case Study Breakdown
  renderFeaturedProject(main, portfolioData, modalController);

  // ALTERNATING PROJECTS — Case Study Panels
  renderProjects(main, portfolioData, modalController);

  // TECHNICAL INDEX — Architecture & Skills
  renderTechnicalSkills(main, portfolioData);

  // 02 — TEACHING — "I don't just learn technology. I teach it."
  renderTeachingMentorship(main, portfolioData);

  // 03 — LEADERSHIP — Institutional Chronology
  renderLeadership(main, portfolioData);

  // EXPERIENCE & EDUCATION — Role • Context • Responsibility • Impact
  renderExperienceEducation(main, portfolioData);

  // ACHIEVEMENTS — Verified Milestones
  renderAchievements(main, portfolioData);

  // EDUCATIONAL MEDIA — YouTube Knowledge Sharing
  renderResearchContent(main, portfolioData);

  // CLOSING SCENE — "LET'S BUILD SOMETHING MEANINGFUL."
  renderContactFooter(app, portfolioData, () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // FINAL BLACK SCREEN — Film Ending
  renderFinalScreen(app, portfolioData);

  // 6. Initialize Studio Page-Wide Scroll Animations
  initScrollAnimations();
});
