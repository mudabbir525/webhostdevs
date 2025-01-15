import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import InteractiveBackground from './components/InteractiveBackground';
import Contact from './components/Contact';
import './index.css';

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
              <Route path="/ib" element={<InteractiveBackground />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
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
