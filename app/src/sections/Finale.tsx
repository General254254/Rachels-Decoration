import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { finaleConfig, testimonials } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Finale = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    if (!section || !content || !image) return;

    // Content entrance animation
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });

    contentTl.fromTo(
      content.querySelectorAll('.animate-item'),
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.out',
      }
    );

    if (contentTl.scrollTrigger) {
      triggersRef.current.push(contentTl.scrollTrigger);
    }

    // Image entrance
    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });

    imageTl.fromTo(
      image,
      {
        x: 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'expo.out',
      }
    );

    if (imageTl.scrollTrigger) {
      triggersRef.current.push(imageTl.scrollTrigger);
    }

    // Glitch effect on title
    const glitchTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
    });

    glitchTl.to('.glitch-text', {
      x: -3,
      duration: 0.05,
      ease: 'none',
    });
    glitchTl.to('.glitch-text', {
      x: 3,
      duration: 0.05,
      ease: 'none',
    });
    glitchTl.to('.glitch-text', {
      x: 0,
      duration: 0.05,
      ease: 'none',
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  if (!finaleConfig.headingMain && !finaleConfig.headingAccent) return null;

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative min-h-screen w-full bg-[#0B0B0D] py-24 overflow-hidden"
    >
      {/* Diagonal line decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink/20 to-transparent transform rotate-12" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Image side */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg">
              {/* Main image */}
              <img
                src={finaleConfig.image}
                alt={finaleConfig.imageAlt}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Decorative frame */}
              <div className="absolute inset-4 border border-pink/30 pointer-events-none" />
              
              {/* Floating sparkles */}
              <div className="absolute -top-4 -right-4 text-pink animate-float">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 text-pink animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Stats badges */}
            <div className="absolute -bottom-6 -right-6 bg-pink text-white px-6 py-4 rounded-lg shadow-xl">
              <div className="font-display font-black text-3xl">500+</div>
              <div className="font-body text-xs uppercase tracking-wider">Events Styled</div>
            </div>
          </div>

          {/* Content side */}
          <div ref={contentRef} className="order-1 lg:order-2">
            {/* Section label */}
            {finaleConfig.sectionLabel && (
              <div className="animate-item flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-pink" />
                <span className="font-mono text-pink text-sm uppercase tracking-[0.3em]">
                  {finaleConfig.sectionLabel}
                </span>
              </div>
            )}

            {/* Heading */}
            {(finaleConfig.headingMain || finaleConfig.headingAccent) && (
              <h2 className="animate-item font-display font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-8">
                {finaleConfig.headingMain}
                <span className="glitch-text text-pink">{finaleConfig.headingAccent}</span>
              </h2>
            )}

            {/* Testimonial Card */}
            <div className="animate-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-pink mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-pink fill-pink" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-white/80 text-lg leading-relaxed mb-6">
                "{currentTestimonial.quote}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink"
                />
                <div>
                  <div className="font-display font-semibold text-white">
                    {currentTestimonial.name}
                  </div>
                  <div className="font-body text-white/50 text-sm">
                    {currentTestimonial.event}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial dots */}
            <div className="animate-item flex gap-2 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-pink w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Features */}
            {finaleConfig.features.length > 0 && (
              <div className="animate-item flex flex-wrap gap-3 mb-8">
                {finaleConfig.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-pink/10 border border-pink/30 text-pink text-sm font-body rounded-full"
                  >
                    ✨ {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Tagline */}
            {finaleConfig.tagline && (
              <p className="animate-item font-body text-white/60 leading-relaxed mb-8 max-w-lg">
                {finaleConfig.tagline}
              </p>
            )}

            {/* CTA */}
            {finaleConfig.ctaText && (
              <a
                href={finaleConfig.ctaHref || '#booking'}
                className="animate-item inline-flex items-center gap-3 px-8 py-4 bg-pink text-white font-body font-semibold text-sm uppercase tracking-wider hover:bg-pink/90 transition-all duration-300 rounded-md hover:-translate-y-1"
                data-cursor-hover
              >
                {finaleConfig.ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Decorative text */}
      {finaleConfig.decorativeText && (
        <div className="absolute bottom-0 left-0 font-display font-black text-[10rem] md:text-[20rem] text-white/[0.02] leading-none pointer-events-none select-none">
          {finaleConfig.decorativeText}
        </div>
      )}
    </section>
  );
};

export default Finale;
