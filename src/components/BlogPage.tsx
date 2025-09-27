import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import exampleImage1 from '../assets/reiginite_yor_dreams_book.jpg';
import exampleImage2 from '../assets/skillup_mentorship_photo.jpg';
import exampleImage3 from '../assets/regina_picture_in_a_chair.png';

interface BlogPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function BlogPage({ currentPage, onNavigate }: BlogPageProps) {
  const [currentPageNum, setCurrentPageNum] = useState(1);
  
  const blogPosts = [
    {
      id: 1,
      date: 'JANUARY 15, 2025',
      title: 'Building Successful Businesses in 2025 - Year in Review',
      excerpt: '2024 has been an incredible year for growth and transformation in the business landscape. Through our mentorship programs and tax consulting services, we have seen remarkable success stories...',
      image: exampleImage1,
      slug: 'building-successful-businesses-2025'
    },
    {
      id: 2,
      date: 'DECEMBER 20, 2024',
      title: 'Tax Planning Strategies for Small Businesses',
      excerpt: 'Effective tax planning is crucial for business success. In this comprehensive guide, I share the essential strategies every entrepreneur needs to know for optimizing their tax position...',
      image: exampleImage2,
      slug: 'tax-planning-strategies-small-businesses'
    },
    {
      id: 3,
      date: 'NOVEMBER 18, 2024',
      title: 'Skill Up Mentorship Program - Impact Report 2024',
      excerpt: 'This year marked a significant milestone for our Skill Up Mentorship Program. We trained over 2,000 new entrepreneurs and witnessed the launch of 300+ successful businesses...',
      image: exampleImage3,
      slug: 'skill-up-mentorship-impact-2024'
    },
    {
      id: 4,
      date: 'OCTOBER 25, 2024',
      title: 'Women in Business: Breaking Barriers in Kenya',
      excerpt: 'As a member of OWIT and WOBN, I have witnessed firsthand the incredible potential of women entrepreneurs in Kenya. Here are the key insights from my journey...',
      image: exampleImage1,
      slug: 'women-business-breaking-barriers-kenya'
    },
    {
      id: 5,
      date: 'SEPTEMBER 30, 2024',
      title: 'Understanding Tax Appeals: A Comprehensive Guide',
      excerpt: 'Navigating tax disputes can be challenging for businesses. With my experience in Tax Appeal Tribunals, I share practical advice on how to handle tax assessments...',
      image: exampleImage2,
      slug: 'understanding-tax-appeals-comprehensive-guide'
    },
    {
      id: 6,
      date: 'AUGUST 15, 2024',
      title: 'From Start-up to Scale: Building Systems That Work',
      excerpt: 'Over ten years of entrepreneurial experience has taught me the importance of building robust systems. Here is how to create frameworks that support sustainable growth...',
      image: exampleImage3,
      slug: 'startup-to-scale-building-systems'
    }
  ];

  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPageNum - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePreviousPage = () => {
    if (currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPageNum < totalPages) {
      setCurrentPageNum(currentPageNum + 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      
      {/* Hero Section with padding for fixed header */}
      <section className="w-full px-6 py-20 pt-36 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Blog Title and Description */}
            <div className="space-y-6">
              <h1 className="text-white text-5xl lg:text-6xl">Blog</h1>
              
              <div className="space-y-4 text-white/90 text-lg">
                <p>
                  My personal blog focused on "building successful businesses" where I share my journey and experiences with tax consulting, entrepreneurship, and business mentorship.
                </p>
              </div>
            </div>

            {/* Right - Toolkit Signup */}
            <div className="flex justify-end">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 max-w-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-xs">⚙️</div>
                      <div className="text-xs mt-1">Toolkit</div>
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold">Download Regina's free Business Toolkit</h3>
                    <p className="text-sm text-white/80">and receive exclusive business advice.</p>
                  </div>
                </div>
                
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md">
                  GET EXCLUSIVE CONTENT (FREE)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {currentPosts.map((post) => (
              <article key={post.id} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Featured Image */}
                <div className="relative">
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <ImageWithFallback 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Post Content */}
                <div className="space-y-4">
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    {post.date}
                  </p>
                  
                  <h2 className="text-gray-800 text-2xl lg:text-3xl leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
                    CONTINUE READING
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
            <button
              onClick={handlePreviousPage}
              disabled={currentPageNum === 1}
              className={`flex items-center gap-2 px-6 py-2 rounded-md transition-colors ${
                currentPageNum === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-purple-600 hover:text-purple-700'
              }`}
            >
              <ChevronLeft size={16} />
              PREVIOUS PAGE
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPageNum(pageNum)}
                  className={`w-10 h-10 rounded-md transition-colors ${
                    pageNum === currentPageNum
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPageNum === totalPages}
              className={`flex items-center gap-2 px-6 py-2 rounded-md transition-colors ${
                currentPageNum === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-purple-600 hover:text-purple-700'
              }`}
            >
              NEXT PAGE
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}