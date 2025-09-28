import { ImageWithFallback } from './figma/ImageWithFallback';
import reginaImage from '../assets/reginal_profile_pic_checked.jpg';

export default function Hero() {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
              Tax Expert. Entrepreneur.<br />
              CEO of RWK Africa.
            </h1>

            <div className="space-y-4 text-white/90 text-lg">
              <p>
                <span className="font-semibold">Dr. Regina Wanja Kingori</span> is on a mission to grow successful organizations. With over <span className="font-semibold">10+ years of tax expertise</span> and entrepreneurial experience, she helps businesses achieve tax compliance and scale effectively.
              </p>
              <p className="text-red-300">
                <span className="font-semibold">Lead Mentor</span> at Skill Up Mentorship Program • <span className="font-semibold">Cheerleader of Dreams</span> • Wife and Mother
              </p>
            </div>

            <button className="bg-transparent border border-red-500 text-red-400 px-6 py-3 rounded hover:bg-red-500 hover:text-white transition-colors uppercase tracking-wide font-medium">
              Learn More About Regina
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <ImageWithFallback
                src={reginaImage}
                alt="Dr. Regina Wanja Kingori - Professional headshot"
                className="w-80 h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}