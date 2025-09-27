import { Calculator } from 'lucide-react';

export default function ToolkitSection() {
  return (
    <section className="w-full px-6 py-16 bg-blue-900/95">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Tax Services Icon */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-red-600 rounded-lg flex items-center justify-center">
              <div className="text-white">
                <Calculator size={48} />
                <div className="text-center mt-2">
                  <p className="text-sm font-bold">Tax Services</p>
                  <p className="text-xs opacity-80">RWK AFRICA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-white text-xl mb-2">
              Get expert tax compliance and business consulting services from Regina's team at RWK Africa.
            </h3>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-red-500 hover:bg-red-400 text-white px-8 py-3 rounded font-semibold transition-colors uppercase tracking-wide">
              Get Tax Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}