import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import credenceAward from '../assets/awards/credence_africa_best-tax-advisory_award-no-background.svg';
import credenceAwardWithBg from '../assets/awards/credence_africa_best-tax-advisory_award.svg';

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
      } else if (width < 1280) {
        setCardsPerView(3); // Desktop: 3 cards
      } else {
        setCardsPerView(4); // Large desktop: 4 cards
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
      image: credenceAwardWithBg,
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
      image: credenceAwardWithBg,
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

  // Auto-scroll functionality - FIXED
  useEffect(() => {
    if (!isHovered) {
      const maxIndex = Math.max(0, awards.length - cardsPerView);
      const interval = setInterval(() => {
        setCurrentIndex(prev => {
          console.log('Current index:', prev, 'Max index:', maxIndex); // Debug log
          return prev >= maxIndex ? 0 : prev + 1;
        });
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

  // FIXED: Calculate indicators based on actual scroll positions
  const maxIndex = Math.max(0, awards.length - cardsPerView);
  const showNav = awards.length > cardsPerView;

  // Calculate card width dynamically - increased by 20%
  const cardWidth = `calc((100% - ${(cardsPerView - 1) * 2}rem) / ${cardsPerView} * 1.2)`;
  const translateX = `calc(-${currentIndex} * (${cardWidth} + 2rem))`;

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

          {/* Cards Container - FIXED: Made responsive */}
          <div
            className="overflow-hidden flex-1 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateX(${translateX})`, // FIXED: Dynamic calculation
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
                <div
                  key={award.id}
                  className="shrink-0"
                  style={{ width: cardWidth }} // FIXED: Dynamic width
                >
                  <div
                    className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-80 flex flex-col relative"
                    style={{
                      backgroundImage: `url(${award.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#f8fafc', // Light fallback color
                    }}
                  >
                    {/* Light overlay for better text readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)'
                      }}
                    ></div>

                    {/* Content overlay - positioned on top of background */}
                    <div
                      className="relative flex flex-col justify-between h-full"
                      style={{
                        zIndex: 10,
                        padding: '24px',
                        color: 'white'
                      }}
                    >
                      {/* Top Section - Year Badge */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div
                          className="rounded-full font-bold shadow-lg"
                          style={{
                            background: 'white',
                            color: '#374151',
                            padding: '8px 12px',
                            fontSize: '14px'
                          }}
                        >
                          {award.year}
                        </div>
                      </div>

                      {/* Bottom Section - Main Content */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h3
                          style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: '1.2',
                            margin: '0'
                          }}
                        >
                          {award.name}
                        </h3>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                          <span
                            className="rounded-full font-semibold"
                            style={{
                              color: 'white',
                              background: '#991b1b',
                              padding: '4px 12px',
                              fontSize: '14px'
                            }}
                          >
                            {award.category}
                          </span>
                        </div>

                        <p
                          style={{
                            color: 'white',
                            fontSize: '14px',
                            lineHeight: '1.4',
                            margin: '0 0 12px 0'
                          }}
                        >
                          {award.description}
                        </p>

                        {/* Organization and Excellence Badge */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '8px',
                            borderTop: '1px solid rgba(255,255,255,0.5)'
                          }}
                        >
                          <span
                            style={{
                              color: 'white',
                              fontSize: '14px',
                              fontWeight: '500'
                            }}
                          >
                            {award.organization}
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div
                              className="rounded-full flex items-center justify-center"
                              style={{
                                width: '20px',
                                height: '20px',
                                background: 'white'
                              }}
                            >
                              <svg className="text-red-500" style={{ width: '8px', height: '8px' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span
                              style={{
                                color: 'white',
                                fontSize: '12px',
                                fontWeight: '500'
                              }}
                            >
                              Excellence
                            </span>
                          </div>
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

        {/* FIXED: Scroll Indicators */}
        {showNav && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-red-500 w-8'
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}