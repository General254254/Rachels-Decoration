import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { packagesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll('.package-card');
    const header = section.querySelector('.section-header');

    // Header animation
    if (header) {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      headerTl.fromTo(
        header,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      );

      if (headerTl.scrollTrigger) {
        triggersRef.current.push(headerTl.scrollTrigger);
      }
    }

    // Cards animation
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: cards,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    cardsTl.fromTo(
      cardElements,
      {
        y: 100,
        rotateX: 35,
        opacity: 0,
      },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'expo.out',
      }
    );

    if (cardsTl.scrollTrigger) {
      triggersRef.current.push(cardsTl.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="relative w-full bg-[#0B0B0D] py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section header */}
        <div className="section-header text-center mb-16">
          {packagesConfig.sectionLabel && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pink" />
              <span className="font-mono text-pink text-sm uppercase tracking-[0.3em]">
                {packagesConfig.sectionLabel}
              </span>
              <div className="w-12 h-px bg-pink" />
            </div>
          )}
          {(packagesConfig.headingMain || packagesConfig.headingAccent) && (
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight">
              {packagesConfig.headingMain}
              <span className="text-pink">{packagesConfig.headingAccent}</span>
            </h2>
          )}
        </div>

        {/* Package cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto perspective-1000"
        >
          {packagesConfig.packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card relative preserve-3d ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-pink/20 to-pink/5 border-2 border-pink'
                  : 'bg-white/5 border border-white/10'
              } rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition-all duration-500`}
            >
              {/* Highlighted badge */}
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink text-white px-4 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              {/* Package name */}
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="font-display font-black text-4xl text-pink mb-4">
                {pkg.price}
              </div>

              {/* Description */}
              <p className="font-body text-white/60 text-sm mb-6">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-pink' : 'text-white/50'}`} />
                    <span className="font-body text-white/70 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#booking"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-pink text-white hover:bg-pink/90 hover:-translate-y-1'
                    : 'border-2 border-white/30 text-white hover:border-pink hover:text-pink'
                }`}
                data-cursor-hover
              >
                {pkg.ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="font-body text-white/40 text-sm">
            All packages include consultation, setup, and takedown. Custom packages available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
