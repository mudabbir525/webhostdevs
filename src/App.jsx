import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TeamPage from './components/TeamPage';
import './index.css';
import Confidential from './components/Confedential';
import NotFound from './components/NotFound';
import Careers from './components/Careers';

import Privacy from './components/Privacy';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          {/* Navigation Bar */}
          <NavBar />
          
          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/confidential" element={<Confidential />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/Our-team" element={<TeamPage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
