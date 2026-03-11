import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Palette, Wrench, PartyPopper, ArrowRight } from 'lucide-react';
import { processConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const icons = [Phone, Palette, Wrench, PartyPopper];

  useEffect(() => {
    const section = sectionRef.current;
    const steps = stepsRef.current;
    if (!section || !steps) return;

    const stepCards = steps.querySelectorAll('.step-card');
    const header = section.querySelector('.section-header');

    // Header animation
    if (header) {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.4,
        },
      });

      headerTl.fromTo(
        header,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' }
      );

      if (headerTl.scrollTrigger) {
        triggersRef.current.push(headerTl.scrollTrigger);
      }
    }

    // Step cards animation
    stepCards.forEach((card) => {
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 0.4,
        },
      });

      cardTl.fromTo(
        card,
        {
          x: -100,
          rotateZ: -2,
          opacity: 0,
        },
        {
          x: 0,
          rotateZ: 0,
          opacity: 1,
          ease: 'none',
        }
      );

      if (cardTl.scrollTrigger) {
        triggersRef.current.push(cardTl.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-[#0B0B0D] py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section header */}
        <div className="section-header mb-16 max-w-3xl">
          {processConfig.sectionLabel && (
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-pink" />
              <span className="font-mono text-pink text-sm uppercase tracking-[0.3em]">
                {processConfig.sectionLabel}
              </span>
            </div>
          )}
          {(processConfig.headingMain || processConfig.headingAccent) && (
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight">
              {processConfig.headingMain}
              <span className="text-pink">{processConfig.headingAccent}</span>
            </h2>
          )}
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="space-y-8 max-w-4xl">
          {processConfig.steps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="step-card relative flex gap-6 md:gap-8 items-start group"
              >
                {/* Timeline line */}
                {index < processConfig.steps.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-16 w-px h-full bg-white/10 group-hover:bg-pink/30 transition-colors" />
                )}

                {/* Number/Icon */}
                <div className="relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-pink text-sm uppercase tracking-wider">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-pink transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 ml-0 md:ml-24">
          <a
            href="#booking"
            className="inline-flex items-center gap-3 px-8 py-4 bg-pink text-white font-body font-semibold text-sm uppercase tracking-wider hover:bg-pink/90 transition-all duration-300 rounded-md hover:-translate-y-1"
            data-cursor-hover
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
