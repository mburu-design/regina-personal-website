import icpakLogo from '../assets/professional-bodies-logo/ICPAK-Logo-on-White.svg';
import kamLogo from '../assets/professional-bodies-logo/KAM-LOGO-NO-BACKGROUND.svg';
import kepsaLogo from '../assets/professional-bodies-logo/KEPSA-logo-no-background.svg';
import kncciLogo from '../assets/professional-bodies-logo/kncci-logo-no-bacground.svg';
import owitLogo from '../assets/professional-bodies-logo/OWIT-LOGO-no-background.svg';
import wobnLogo from '../assets/professional-bodies-logo/WOBN-logo-no-background.svg';

export default function ProfessionalMemberships() {
  const memberships = [
    {
      id: 1,
      name: "Institute of Certified Public Accountants of Kenya",
      logo: icpakLogo,
      abbreviation: "ICPAK"
    },
    {
      id: 2,
      name: "Kenya Association of Manufacturers",
      logo: kamLogo,
      abbreviation: "KAM"
    },
    {
      id: 3,
      name: "Kenya Private Sector Alliance",
      logo: kepsaLogo,
      abbreviation: "KEPSA"
    },
    {
      id: 4,
      name: "Kenya National Chamber of Commerce and Industry",
      logo: kncciLogo,
      abbreviation: "KNCCI"
    },
    {
      id: 5,
      name: "Organization for Women in International Trade",
      logo: owitLogo,
      abbreviation: "OWIT"
    },
    {
      id: 6,
      name: "Women in Business Network",
      logo: wobnLogo,
      abbreviation: "WOBN"
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedMemberships = [...memberships, ...memberships];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Memberships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Active member of leading professional organizations, contributing to industry development and maintaining the highest standards of excellence.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
        </div>

        {/* Marquee Container - 80% width */}
        <div className="w-4/5 mx-auto overflow-hidden">
          <div className="relative">
            {/* Marquee Animation */}
            <div 
              className="flex gap-12 animate-marquee"
              style={{
                animation: 'marquee 30s linear infinite'
              }}
            >
              {duplicatedMemberships.map((membership, index) => (
                <div
                  key={`${membership.id}-${index}`}
                  className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 group"
                >
                  <img
                    src={membership.logo}
                    alt={membership.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    title={membership.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Committed to professional excellence and industry leadership through active participation in these prestigious organizations.
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}