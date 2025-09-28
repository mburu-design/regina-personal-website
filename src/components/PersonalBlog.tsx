import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, Facebook, Instagram, Youtube } from 'lucide-react';
import profileImage from '../assets/regina_picture_in_a_chair.png';

export default function PersonalBlog() {
  return (
    <section className="w-full px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Blog Introduction */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          {/* Left sidebar */}
          <div className="md:col-span-2">
            <div className="space-y-2">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <h2 className="text-red-600 font-semibold uppercase tracking-wider">Experience</h2>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-10">
            <p className="text-gray-800 leading-relaxed text-lg mb-8">
              I am a tax expert with over 10 years experience. I have been involved in tax compliance, planning and implementing efficient tax structures, as well as developing tax saving mechanisms for clients. I represent and assist clients during in-depth tax assessment by revenue and regulatory authorities.
            </p>
          </div>
        </div>

        {/* Personal Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Photo */}
          <div>
            <ImageWithFallback 
              src={profileImage}
              alt="Dr. Regina Kingori - Profile photo"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right - Story */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              This is my personal blog focused on entrepreneurship, tax expertise, and business mentorship. My goal is to create insightful and relevant content that you can put to work in your personal and professional life.
            </p>

            <p className="text-gray-800 leading-relaxed">
              I am the lead mentor at Skill Up Mentorship program - a program that I incorporated as a corporate social responsibility initiative. It offers business skills to individuals and supports them to start and run successful businesses. The program has trained over <span className="font-semibold text-blue-600">7,000 people</span> and over <span className="font-semibold text-blue-600">1,000 people</span> have started businesses from the skills acquired.
            </p>

            <p className="text-gray-800 leading-relaxed">
              I am also known for being a cheerleader of dreams, mostly on my social media pages where I encourage people to go after their own goals and dreams. This has encouraged and motivated so many people.
            </p>

            <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors">
              READ THE FULL STORY →
            </a>
          </div>
        </div>

        {/* Social Media & Memberships Section */}
        <div className="mb-16">
          <h3 className="text-gray-800 mb-6">Connect with me on social media:</h3>
          <div className="flex space-x-6 mb-8">
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Facebook size={20} className="text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <X size={20} className="text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Instagram size={20} className="text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Youtube size={20} className="text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Professional Memberships */}
          {/* <div className="bg-white p-6 rounded-lg border">
            <h4 className="text-gray-800 font-semibold mb-4">Professional Memberships:</h4>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">ICPAK</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded">OWIT</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">KEPSA</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded">KAM</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">KNCCI</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded">WOBN</span>
            </div>
          </div> */}
        </div>

        {/* Blog Posts Section */}
       
      </div>
    </section>
  );
}