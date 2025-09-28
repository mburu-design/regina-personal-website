import { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Set to 'home' to show the Video Hero

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the appropriate page based on currentPage state
  switch (currentPage) {
    case 'home':
      return <HomePage currentPage={currentPage} onNavigate={handleNavigation} />;
    case 'about':
      return <AboutPage currentPage={currentPage} onNavigate={handleNavigation} />;
    case 'contact':
      return <ContactPage currentPage={currentPage} onNavigate={handleNavigation} />;
    case 'blog':
      return <BlogPage currentPage={currentPage} onNavigate={handleNavigation} />;
    default:
      return <HomePage currentPage={currentPage} onNavigate={handleNavigation} />;
  }
}