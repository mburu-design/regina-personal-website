import { Calculator, Check } from 'lucide-react';

export default function ToolkitSignup() {
  return (
    <section className="w-full px-6 py-20 bg-blue-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Business Toolkit Icon */}
          <div className="flex-shrink-0">
            <div className="w-48 h-64 bg-gradient-to-br from-red-600 to-blue-700 rounded-2xl flex flex-col items-center justify-center text-white p-6">
              <Calculator size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Business Toolkit</h3>
              <p className="text-sm opacity-90 text-center mb-4">For successful business growth</p>
              <div className="text-xs opacity-80">RWK AFRICA</div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow space-y-8">
            <div>
              <h2 className="text-white text-3xl lg:text-4xl mb-6 leading-tight">
                Sign up for Regina's free Business Growth Toolkit<br />
                and receive exclusive tax and business advice.
              </h2>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 text-white">
                <Check size={20} className="text-red-400 flex-shrink-0" />
                <span>Tax Planning Templates</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check size={20} className="text-red-400 flex-shrink-0" />
                <span>Business Growth Strategies</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check size={20} className="text-red-400 flex-shrink-0" />
                <span>Mentorship Access</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-red-500 hover:bg-red-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors uppercase tracking-wide">
                Get Business Toolkit (Free)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}