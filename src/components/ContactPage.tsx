import { useState } from 'react';
import { X, Facebook, Instagram, Youtube } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ContactPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function ContactPage({ currentPage, onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      
      {/* Contact Section with padding for fixed header */}
      <section className="w-full px-6 py-16 pt-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">Contact Me</h1>
                
                <div className="space-y-4 text-gray-700 leading-relaxed max-w-md">
                  <p>
                    I want to answer every single email as fast as I can, but please remember that in most cases my responses will not be immediate. I do my best to respond within 72 hours though.
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-6">
                <h3 className="text-gray-900 font-medium">Connect with me on social media:</h3>
                
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group w-full max-w-xs"
                  >
                    <X size={18} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">FOLLOW ME ON X</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group w-full max-w-xs"
                  >
                    <Facebook size={18} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">FOLLOW ME ON FACEBOOK</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group w-full max-w-xs"
                  >
                    <Instagram size={18} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">FOLLOW ME ON INSTAGRAM</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group w-full max-w-xs"
                  >
                    <Youtube size={18} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">SUBSCRIBE TO MY CHANNEL</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group w-full max-w-xs"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">CONNECT ON LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-900">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900">
                    E-mail <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900">
                    Comment or Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none bg-white"
                    placeholder=""
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-400 bg-white cursor-pointer rounded-sm">
                    <div className="w-3 h-3 bg-blue-600 rounded-sm opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-700">I'm not a robot</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 leading-tight">
                      <div className="font-medium">reCAPTCHA</div>
                      <div className="flex gap-1 justify-end">
                        <span className="underline cursor-pointer">Privacy</span>
                        <span>-</span>
                        <span className="underline cursor-pointer">Terms</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}