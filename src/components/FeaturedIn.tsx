export default function FeaturedIn() {
  const awards = [
    { 
      name: "DIGITALLY FIT AWARDS", 
      category: "Technology Excellence",
      year: "2023"
    },
    { 
      name: "WOMEN IN BUSINESS AWARDS", 
      category: "Leadership",
      year: "2023"
    },
    { 
      name: "OWIT AWARDS", 
      category: "International Trade",
      year: "2022"
    },
    { 
      name: "PACESETTERS AWARDS AFRICA", 
      category: "Business Innovation",
      year: "2022"
    },
    { 
      name: "NaBLA AWARDS", 
      category: "Legal Excellence",
      year: "2021"
    },
    { 
      name: "MASTERMIND BUSINESS SCHOOL", 
      category: "Education Partner",
      year: "2021"
    },
    { 
      name: "FiNext AWARDS DUBAI", 
      category: "Fintech Innovation",
      year: "2020"
    },
    { 
      name: "ICPAK", 
      category: "Professional Member",
      year: "Certified"
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
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
        
        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-red-200 hover:-translate-y-1"
            >
              {/* Award Icon/Badge */}
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Award Content */}
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-red-600 transition-colors duration-300">
                  {award.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {award.category}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-red-500 font-semibold text-sm">
                    {award.year}
                  </span>
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to work with an award-winning tax expert and entrepreneur?
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}