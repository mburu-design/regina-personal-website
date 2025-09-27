import Header from './Header';
import VideoHero from './VideoHero';
import FeaturedIn from './FeaturedIn';
import ToolkitSection from './ToolkitSection';
import About from './About';
import PersonalBlog from './PersonalBlog';
import BlogPostsCTA from './BlogPostsCTA';
import ToolkitSignup from './ToolkitSignup';
import Footer from './Footer';

interface HomePageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function HomePage({ currentPage, onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      
      {/* Video Hero Section */}
      <VideoHero />
      
      {/* Featured In Section */}
      <FeaturedIn />
      
      {/* Toolkit Section */}
      <ToolkitSection />
      
      {/* About Section */}
      <About />
      
      {/* Personal Blog Section */}
      <PersonalBlog />
      
      {/* Blog Posts CTA */}
      <BlogPostsCTA />
      
      {/* Toolkit Signup */}
      <ToolkitSignup />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}