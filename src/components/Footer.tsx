import { X, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold">RK</span>
              </div>
              <span className="text-white font-semibold text-lg">DR. REGINA KINGORI</span>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-red-400" />
                <div className="text-sm">
                  <p>regina@rwkafrica.com</p>
                  <p>info@rwkafrica.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-red-400" />
                <div className="text-sm">
                  <p>+254 722 283 752</p>
                  <p>+254 736 608 956</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-gray-300 text-sm uppercase tracking-wider mb-4">Connect With Me:</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <X size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-300 text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Tax Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Tax Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Business Audit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Tax Appeals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Business Consulting</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-gray-300 text-sm uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Skill Up Mentorship</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Business Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Tax Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Entrepreneurship</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Corporate CSR</a></li>
            </ul>
          </div>

          {/* Professional */}
          <div>
            <h4 className="text-gray-300 text-sm uppercase tracking-wider mb-4">Professional</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">ICPAK Member</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">OWIT Member</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">KEPSA Member</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">KAM Member</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">WOBN Member</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-300 text-sm uppercase tracking-wider mb-4">RWK Africa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About RWK</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Awards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dr. Regina Wanja Kingori | RWK Africa. All rights reserved. | Tax Expert • Entrepreneur • Mentor
          </p>
        </div>
      </div>
    </footer>
  );
}