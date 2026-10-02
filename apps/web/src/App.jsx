import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import EngineeringPhilosophyPage from './pages/EngineeringPhilosophyPage.jsx';
import WorkWithMePage from './pages/WorkWithMePage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/engineering-philosophy" element={<EngineeringPhilosophyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/work-with-me" element={<WorkWithMePage />} />
      </Routes>
    </Router>
  );
}

export default App;