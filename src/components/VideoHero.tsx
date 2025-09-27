import { useEffect, useState } from 'react';
import introVideo from '../assets/intro_video.mp4';

export default function VideoHero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text Overlay directly on video */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                <div className="text-center max-w-4xl">
                    {/* Main Title with slide-up animation */}
                    <h1
                        className={`
                            text-white text-5xl md:text-6xl lg:text-7xl 
                            font-bold mb-6 leading-tight
                            drop-shadow-2xl
                            transition-all duration-1000 ease-out
                            ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }
                        `}
                        style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        Tax Expert.<br />
                        <span className="text-red-400">Entrepreneur.</span><br />
                        CEO of RWK Africa.
                    </h1>

                    {/* Subtitle with delayed slide-up animation */}
                    <p
                        className={`
                            text-white text-xl md:text-2xl lg:text-3xl 
                            mb-8 font-light tracking-wide
                            drop-shadow-xl
                            transition-all duration-1000 ease-out delay-300
                            ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }
                        `}
                        style={{
                            textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                        }}
                    >
                        Dr. Regina Wanja Kingori
                    </p>

                    {/* Description with delayed fade-in */}
                    <div
                        className={`
                            text-white/95 text-lg md:text-xl 
                            mb-10 max-w-3xl mx-auto leading-relaxed
                            drop-shadow-lg
                            transition-all duration-1000 ease-out delay-500
                            ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }
                        `}
                        style={{
                            textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                        }}
                    >
                        <p className="mb-4">
                            On a mission to grow successful organizations with over{' '}
                            <span className="text-red-300 font-semibold">
                                10+ years of tax expertise
                            </span>{' '}
                            and entrepreneurial experience.
                        </p>
                        <p className="text-red-300 font-medium">
                            Lead Mentor • Cheerleader of Dreams • Wife and Mother
                        </p>
                    </div>

                    {/* CTA Button with delayed scale animation */}
                    <button
                        className={`
                            bg-red-500 hover:bg-red-600 
                            text-white px-8 py-4 rounded-lg 
                            text-lg font-semibold uppercase tracking-wide 
                            transition-all duration-300 
                            hover:scale-105 shadow-xl
                            ${isVisible
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-95'
                            }
                        `}
                        style={{
                            transitionDelay: isVisible ? '700ms' : '0ms',
                            transitionDuration: '1000ms'
                        }}
                    >
                        Learn More About Regina
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className={`
                    absolute bottom-8 left-1/2 transform -translate-x-1/2 
                    transition-all duration-1000 ease-out delay-1000
                    ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }
                `}
            >
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}