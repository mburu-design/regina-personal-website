import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import credenceAward from '../assets/awards/credence_africa_best-tax-advisory_award-no-background.svg';

export default function FeaturedIn() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (width < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const awards = [
    {
      id: 1,
      name: "Credence Africa Best Tax Advisory Award",
      category: "Tax Excellence",
      year: "2024",
      description: "Recognized for outstanding tax advisory services and expertise in helping businesses achieve compliance and growth across Africa.",
      image: credenceAward,
      organization: "Credence Africa"
    },
    {
      id: 2,
      name: "DIGITALLY FIT AWARDS",
      category: "Technology Excellence",
      year: "2023",
      description: "Honored for innovative use of technology in tax consulting and business development services.",
      image: credenceAward,
      organization: "Digital Innovation Council"
    },
    {
      id: 3,
      name: "WOMEN IN BUSINESS AWARDS",
      category: "Leadership Excellence",
      year: "2023",
      description: "Celebrated for exceptional leadership in empowering women entrepreneurs and business development.",
      image: credenceAward,
      organization: "Women in Business Network"
    },
    {
      id: 4,
      name: "OWIT AWARDS",
      category: "International Trade",
      year: "2022",
      description: "Recognized for contributions to international trade development and cross-border business facilitation.",
      image: credenceAward,
      organization: "Organization for Women in International Trade"
    },
    {
      id: 5,
      name: "PACESETTERS AWARDS AFRICA",
      category: "Business Innovation",
      year: "2022",
      description: "Awarded for innovative business solutions and mentorship programs that drive entrepreneurial success.",
      image: credenceAward,
      organization: "Pacesetters Africa"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const maxIndex = Math.max(0, awards.length - cardsPerView);
      const interval = setInterval(() => {
        setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered, awards.length, cardsPerView]);



  const handlePrevious = () => {
    const maxIndex = Math.max(0, awards.length - cardsPerView);
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, awards.length - cardsPerView);
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const pageCount = Math.max(1, Math.ceil(awards.length / cardsPerView));
  const showNav = awards.length > cardsPerView;

  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized for excellence in tax expertise, business leadership, and entrepreneurial innovation across multiple prestigious platforms.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
        </div>

        {/* Awards Carousel Container */}
        <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
          {/* Left Navigation Button */}
          {showNav && (
            <button
              aria-label="Previous"
              onClick={handlePrevious}
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Cards Container - 80% width */}
          <div
            className="overflow-hidden w-4/5 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                ['--cpv' as any]: cardsPerView,
              }}
              aria-live="polite"
              onTouchStart={(e) => {
                const touch = e.touches[0];
                const startX = touch.clientX;

                const handleTouchMove = (e: TouchEvent) => {
                  const touch = e.touches[0];
                  const deltaX = startX - touch.clientX;

                  if (Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                      handleNext();
                    } else {
                      handlePrevious();
                    }
                    document.removeEventListener('touchmove', handleTouchMove);
                    document.removeEventListener('touchend', handleTouchEnd);
                  }
                };

                const handleTouchEnd = () => {
                  document.removeEventListener('touchmove', handleTouchMove);
                  document.removeEventListener('touchend', handleTouchEnd);
                };

                document.addEventListener('touchmove', handleTouchMove);
                document.addEventListener('touchend', handleTouchEnd);
              }}
              onMouseDown={(e) => {
                const startX = e.clientX;

                const handleMouseMove = (e: MouseEvent) => {
                  const deltaX = startX - e.clientX;

                  if (Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                      handleNext();
                    } else {
                      handlePrevious();
                    }
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  }
                };

                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              {awards.map((award) => (
                <div key={award.id} className="w-64 shrink-0 px-2">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    {/* Year Badge Header */}
                    <div className="relative p-4 bg-gradient-to-r from-red-50 to-red-100">
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                        {award.year}
                      </div>
                    </div>

                    {/* Award Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                        {award.name}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                        <span className="text-red-500 font-semibold text-xs sm:text-sm bg-red-50 px-2 py-1 sm:px-3 sm:py-1 rounded-full w-fit">
                          {award.category}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm font-medium">
                          {award.organization}
                        </span>
                      </div>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                        {award.description}
                      </p>

                      {/* Award Badge */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium text-sm">Excellence Award</span>
                        </div>
                        <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          {showNav && (
            <button
              aria-label="Next"
              onClick={handleNext}
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(cardsPerView === 1 ? index : index * cardsPerView)}
              className={`h-2 rounded-full transition-all duration-300 ${index === Math.floor(currentIndex / (cardsPerView === 1 ? 1 : cardsPerView))
                ? 'bg-red-500 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to work with an award-winning tax expert and entrepreneur?
          </p>
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}