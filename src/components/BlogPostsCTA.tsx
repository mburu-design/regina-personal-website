import { ArrowRight } from 'lucide-react';

export default function BlogPostsCTA() {
  return (
    <section className="w-full px-6 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3 rounded-lg font-medium uppercase tracking-wide transition-colors inline-flex items-center gap-2">
          See More Blog Posts
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}