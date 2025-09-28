import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, Facebook, Instagram, Youtube } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import reginaImage from '../assets/reginal_profile_pic_checked.jpg';
import familyImage from '../assets/ffab2bd2e2958b6bd27aa0a8efa9a0fd2a33b065.jpg';

interface AboutPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function AboutPage({ currentPage, onNavigate }: AboutPageProps) {
  const [activeTab, setActiveTab] = useState('early-life');

  const tabs = [
    { id: 'early-life', label: 'Early Life', icon: '→' },
    { id: 'professional-life', label: 'Professional Life', icon: '→' },
    { id: 'personal-life', label: 'Personal Life', icon: '→' },
    { id: 'philanthropy', label: 'Philanthropy', icon: '→' }
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header currentPage={currentPage} onNavigate={onNavigate} />

      {/* Hero Section with padding for fixed header */}
      <section className="w-full px-6 py-20 pt-36 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={reginaImage}
                    alt="Dr. Regina Wanja Kingori - Professional photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-red-300 text-sm uppercase tracking-wider">ABOUT</p>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Dr. Regina Kingori
                </h1>
              </div>

              <div className="space-y-4 text-white/90 text-lg">
                <p>
                  Hello, my name is Dr. Regina Wanja Kingori, and I'm a seasoned entrepreneur and tax expert. I was recognized for my outstanding contributions to business development and tax consulting. Over 7,000+ individuals have benefited from the mentorship programs built by my organization.
                </p>
              </div>

              {/* Navigation Tabs */}
              <div className="space-y-4 pt-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      // Scroll to the content section
                      const contentSection = document.getElementById('content-section');
                      if (contentSection) {
                        contentSection.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                    className={`flex items-center gap-3 text-left transition-colors group ${activeTab === tab.id
                        ? 'text-red-400'
                        : 'text-yellow-400 hover:text-red-400'
                      }`}
                  >
                    <span className={`transition-transform group-hover:translate-x-1 ${activeTab === tab.id ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                      {tab.icon}
                    </span>
                    <span className="font-medium underline decoration-1 underline-offset-4">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section id="content-section" className="w-full px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Early Life */}
          {activeTab === 'early-life' && (
            <div className="space-y-8">
              <h2 className="text-4xl text-gray-800 mb-8">Early Life</h2>

              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  I was born in Nairobi, Kenya. Ever since I can remember, I have been extremely competitive which makes me work hard at everything that I do.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Growing up, I was always fascinated by numbers and how businesses operated. My early exposure to entrepreneurship came through observing small business owners in my community and understanding the challenges they faced with financial management and tax compliance.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  During my university years, I started offering bookkeeping services to local businesses. This early experience taught me valuable lessons about the importance of proper financial management and tax planning for small enterprises.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  My passion for helping businesses succeed grew stronger as I witnessed the impact that proper financial guidance could have on entrepreneurs. This foundation became the cornerstone of what would later become my mission to grow successful organizations through RWK Africa.
                </p>
              </div>
            </div>
          )}

          {/* Professional Life */}
          {activeTab === 'professional-life' && (
            <div className="space-y-8">
              <h2 className="text-4xl text-gray-800 mb-8">Professional Life</h2>

              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  The early days of my tax consulting career were not glamorous. I did a ton of detailed work because I just wanted to help businesses stay compliant and grow sustainably.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  One of my mentors pointed me to various opportunities where I could help businesses with tax compliance, financial planning, audit preparation, etc. I took the knowledge I gained and reinvested it into building comprehensive tax solutions for my clients.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  As a young professional with a passion for excellence, I spent the majority of my time studying tax regulations and business development strategies. Since most businesses struggled with tax compliance, I learned how to develop efficient tax structures and dispute resolution strategies.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  My breakthrough came when I successfully represented a client in a complex tax dispute at the Tax Appeal Tribunal. This experience taught me the importance of thorough preparation and deep understanding of tax law. From that point, I knew I wanted to specialize in tax dispute resolution and help businesses navigate the complex regulatory landscape.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Over the years, I've built systems from scratch, developed successful teams, and managed various stakeholders in both private and public sectors. My approach has always been to help businesses grow from start-up to scale, ensuring they have robust financial and tax frameworks in place.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Today, through RWK Africa, I continue to provide expert tax consulting services, with a focus on compliance, planning, and implementing efficient tax structures. My expertise has led to numerous successful outcomes at the Tax Appeal Tribunal (TAT) and Alternative Dispute Resolution (ADR) processes.
                </p>
              </div>
            </div>
          )}

          {/* Personal Life */}
          {activeTab === 'personal-life' && (
            <div className="space-y-8">
              <h2 className="text-4xl text-gray-800 mb-8">Personal Life</h2>

              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  We currently live in Nairobi, Kenya, where I balance my professional responsibilities with family life.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  I am blessed with a wonderful family. Being a wife and mother has taught me valuable lessons about time management, priorities, and the importance of creating sustainable work-life balance. As they say, parenthood isn't always easy, but it's incredibly rewarding.
                </p>

                {/* Family Photo */}
                <div className="py-8">
                  <ImageWithFallback
                    src={familyImage}
                    alt="Dr. Regina Kingori with family"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>

                <p className="text-gray-600 leading-relaxed">
                  I'm known for being a cheerleader of dreams, especially on my social media platforms where I encourage people to pursue their goals and dreams. This has motivated and inspired thousands of individuals to take action on their entrepreneurial journeys.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  My personal values are deeply rooted in helping others succeed. I believe that success is not just about personal achievement, but about lifting others as you climb. This philosophy drives much of my work and personal interactions.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Outside of work, I enjoy reading business development books, attending professional development seminars, and spending quality time with my family. I'm also an active member of several professional organizations including ICPAK (Institute of Certified Public Accountants of Kenya), OWIT (Organization for Women in International Trade), KEPSA (Kenya Private Sector Alliance), KAM (Kenya Association of Manufacturers), KNCCI (Kenya National Chamber of Commerce and Industry), and WOBN (Women in Business Network).
                </p>

                <p className="text-gray-600 leading-relaxed">
                  These memberships allow me to stay connected with the business community, contribute to industry development, and continue learning from other professionals in various sectors. They also provide platforms for advocating for better business policies and supporting fellow entrepreneurs.
                </p>
              </div>
            </div>
          )}

          {/* Philanthropy */}
          {activeTab === 'philanthropy' && (
            <div className="space-y-8">
              <h2 className="text-4xl text-gray-800 mb-8">Philanthropy</h2>

              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  I believe that the only sustainable way to fight inequality is through education. That's why I created the <span className="font-semibold italic text-blue-800">Skill Up Mentorship Program</span> as a Corporate Social Responsibility (CSR) initiative under RWK Africa, through which we support communities by building business skills as well as offering entrepreneurship training.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-gray-800 font-semibold mb-6 text-xl">Skill Up Mentorship Program - A RWK Africa CSR Initiative</h3>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-blue-800 mb-2">Program Overview</h4>
                        <p className="text-gray-600 text-sm">Comprehensive business skills training and mentorship program designed to empower entrepreneurs across Kenya and East Africa.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-blue-800 mb-2">Impact to Date</h4>
                        <p className="text-gray-600 text-sm">Over 7,000 individuals trained with more than 1,000 successful business startups launched by program participants.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-blue-800 mb-2">Core Training Areas</h4>
                        <p className="text-gray-600 text-sm">Business planning, financial management, tax compliance, marketing strategies, and leadership development.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-blue-800 mb-2">Program Delivery</h4>
                        <p className="text-gray-600 text-sm">Combination of in-person workshops, online training modules, one-on-one mentoring sessions, and ongoing support networks.</p>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg mt-6">
                      <h4 className="font-semibold text-red-800 mb-2">Success Stories</h4>
                      <p className="text-gray-700 text-sm">
                        "Through the Skill Up Mentorship Program, we've witnessed incredible transformations. Participants have launched successful businesses ranging from agriculture and manufacturing to technology and services sectors. Many have gone on to become employers themselves, creating a multiplier effect in their communities."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Training Centers Section */}
                <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-red-600 mt-8">
                  {/* <h3 className="text-gray-800 font-semibold mb-6 text-xl">Training Centers I Helped Build:</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">RWK Business Training Center</h4>
                      <p className="text-gray-600 text-sm mb-4">Nairobi, Kenya</p>
                      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Training Center Photo</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Skill Up Hub Mombasa</h4>
                      <p className="text-gray-600 text-sm mb-4">Mombasa, Kenya</p>
                      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Training Center Photo</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Women Entrepreneurs Hub</h4>
                      <p className="text-gray-600 text-sm mb-4">Kisumu, Kenya</p>
                      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Training Center Photo</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">East Africa Business Center</h4>
                      <p className="text-gray-600 text-sm mb-4">Kampala, Uganda</p>
                      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Training Center Photo</span>
                      </div>
                    </div>
                  </div> */}

                  {/* Photo Gallery */}
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Program Activities Gallery</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Workshop Photo</span>
                      </div>
                      <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Mentoring Session</span>
                      </div>
                      <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Graduation Day</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  The Skill Up Mentorship Program operates as a key CSR initiative under RWK Africa, reflecting our commitment to giving back to the community and creating sustainable economic opportunities. The program is structured to provide both foundational business skills and advanced entrepreneurship training.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  What makes this program unique is its focus on practical, hands-on learning combined with ongoing mentorship support. Participants don't just learn theory; they develop real business plans, understand tax implications of their ventures, and receive guidance on accessing funding and markets.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Beyond the formal program structure, my philanthropic efforts extend to regular pro bono consulting for small businesses, active participation in community development initiatives focused on financial literacy, and advocacy for policies that support small and medium enterprises in Kenya.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  I believe that when we empower individuals with business skills and tax knowledge, we're not just helping them succeed individually, but contributing to the overall economic development of our communities. This ripple effect is what drives my passion for the Skill Up Mentorship Program and my broader philanthropic work.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Closing Note Section */}
      <section className="w-full px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 mb-12">Closing Note</h2>

          <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p className="text-lg">
              Thank you for taking the time to read this. I know I have an inspiring story, but I want to inspire you in the right way.
            </p>

            <p>
              Once again, thanks a lot for taking the time to read this. I look forward to connecting with you.
            </p>

            <p className="italic">
              Cheers!
            </p>

            <p className="font-semibold text-gray-800">
              -Dr. Regina Kingori
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mt-12">
            <p className="text-gray-800 font-semibold mb-6">Connect with me on social media:</p>

            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}