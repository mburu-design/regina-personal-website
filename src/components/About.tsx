export default function About() {
  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left sidebar */}
          <div className="md:col-span-2">
            <div className="space-y-2">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <h2 className="text-red-600 font-semibold uppercase tracking-wider">About</h2>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-7">
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-gray-800 leading-relaxed">
                Hello, my name is Dr. Regina Wanja Kingori. I'm the founder and CEO at RWK Africa, a registered tax and audit consultancy firm with a vision of growing successful organizations.
              </p>
              <p className="text-gray-800 leading-relaxed">
                With over ten years of entrepreneurial expertise, I've built systems from scratch, built successful teams, managed various stakeholders in the private and public sectors, and grown businesses from start-up to scale.
              </p>
            </div>
          </div>

          {/* Right side - Education highlights */}
          <div className="md:col-span-3">
            <div className="bg-gradient-to-br from-blue-100 to-red-100 rounded-lg p-6">
              <h4 className="text-blue-800 font-semibold mb-3">Education</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Doctor in Business Administration</li>
                <li>• Executive MBA</li>
                <li>• MBA Strategic Management</li>
                <li>• CPA (K)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}