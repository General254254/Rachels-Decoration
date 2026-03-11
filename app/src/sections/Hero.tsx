import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles, Star } from 'lucide-react';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

// Gradient palette for grid cells (no image needed)
const CELL_GRADIENTS = [
  'linear-gradient(135deg, #1a0a12 0%, #2d1122 100%)',
  'linear-gradient(135deg, #0d0d10 0%, #1a1020 100%)',
  'linear-gradient(135deg, #140d1a 0%, #200d1c 100%)',
  'linear-gradient(135deg, #0b0b0d 0%, #1c0c18 100%)',
  'linear-gradient(135deg, #12091a 0%, #1e0e22 100%)',
  'linear-gradient(135deg, #0f0a14 0%, #1a0f1e 100%)',
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    if (!section || !grid || !title) return;

    // Set loaded state for initial animations
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);

    // Get all grid cells
    const cells = grid.querySelectorAll('.grid-cell');
    const titleBlocks = title.querySelectorAll('.title-block');

    // Initial entrance animation timeline
    const tl = gsap.timeline({ delay: 0.3 });

    // Grid cells flip in with stagger
    tl.fromTo(
      cells,
      {
        rotateX: 70,
        y: -120,
        opacity: 0,
        scale: 0.92,
      },
      {
        rotateX: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        stagger: {
          each: 0.03,
          from: 'random',
        },
        ease: 'power3.out',
      }
    );

    // Title blocks decode animation
    tl.fromTo(
      titleBlocks,
      {
        scale: 0.65,
        rotate: -6,
        opacity: 0,
      },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.6)',
      },
      '-=0.5'
    );

    // Headline lines slide in
    tl.fromTo(
      title.querySelectorAll('.headline-line'),
      {
        x: (i) => (i === 0 ? '-12vw' : '12vw'),
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    // Subtitle fade in
    if (subtitle) {
      tl.fromTo(
        subtitle,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3'
      );
    }

    // CTAs fade in
    if (cta) {
      tl.fromTo(
        cta,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3'
      );
    }

    // Scroll-based exit animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onLeaveBack: () => {
          // Reset all elements to visible when scrolling back to top
          gsap.set([title, subtitle, cta], { opacity: 1, y: 0, scale: 1 });
          gsap.set(cells, { opacity: 1, x: 0, y: 0 });
        },
      },
    });

    // EXIT phase (70%-100%)
    scrollTl.fromTo(
      title,
      { y: 0, scale: 1, opacity: 1 },
      { y: '-35vh', scale: 0.82, opacity: 0, ease: 'power2.in' },
      0.7
    );

    if (subtitle) {
      scrollTl.fromTo(
        subtitle,
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }

    if (cta) {
      scrollTl.fromTo(
        cta,
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }

    // Grid cells drift outward
    scrollTl.fromTo(
      cells,
      { opacity: 1, x: 0, y: 0 },
      {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? '-10vw' : '10vw'),
        y: (i) => (i % 3 === 0 ? '-10vh' : '10vh'),
        stagger: 0.02,
        ease: 'power2.in',
      },
      0.7
    );

    if (scrollTl.scrollTrigger) {
      triggersRef.current.push(scrollTl.scrollTrigger);
    }

    return () => {
      clearTimeout(loadTimer);
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  if (!heroConfig.titleLine1 && !heroConfig.titleLine2) return null;

  const rows = heroConfig.gridRows || 6;
  const cols = heroConfig.gridCols || 8;

  // Generate gradient grid cells (no background image)
  const generateGridCells = () => {
    const cells = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isPink = heroConfig.pinkCells.some((p) => p.row === row && p.col === col);
        const cellIndex = row * cols + col;
        const gradientIndex = (row + col) % CELL_GRADIENTS.length;

        // Checkerboard-style subtle brightness variation
        const isLight = (row + col) % 2 === 0;

        cells.push(
          <div
            key={cellIndex}
            className={`grid-cell absolute preserve-3d backface-hidden transition-all duration-300 hover:scale-105 hover:z-10 ${
              isPink ? 'bg-pink' : ''
            }`}
            style={{
              left: `${(col / cols) * 100}%`,
              top: `${(row / rows) * 100}%`,
              width: `${100 / cols}%`,
              height: `${100 / rows}%`,
              background: isPink
                ? 'var(--pink)'
                : isLight
                ? CELL_GRADIENTS[gradientIndex]
                : `linear-gradient(135deg, #0b0b0d 0%, #160d1a 100%)`,
              transformOrigin: 'center center',
              // Slightly different opacity per cell for depth
              opacity: isPink ? 1 : 0.85 + ((cellIndex * 7) % 3) * 0.05,
            }}
            data-cursor-hover
          />
        );
      }
    }
    return cells;
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#0B0B0D] overflow-hidden perspective-1000"
    >
      {/* Ambient glow layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top-center pink glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(ellipse, #E91E8C 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Bottom-left accent */}
        <div
          className="absolute bottom-0 left-0 w-[30vw] h-[30vh] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(ellipse, #C41E7F 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Bottom-right accent */}
        <div
          className="absolute bottom-0 right-0 w-[25vw] h-[25vh] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse, #9C1E6A 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)] z-10 pointer-events-none" />

      {/* Grid container */}
      <div
        ref={gridRef}
        className="absolute inset-0 preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {generateGridCells()}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-pink/30 animate-float z-20">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 right-20 text-pink/20 animate-float z-20" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-1/3 right-10 text-pink/25 animate-float z-20" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute top-1/4 left-[15%] text-pink/15 animate-float z-20" style={{ animationDelay: '1.5s' }}>
        <Star className="w-4 h-4 fill-current" />
      </div>
      <div className="absolute bottom-1/3 left-[8%] text-pink/10 animate-float z-20" style={{ animationDelay: '0.8s' }}>
        <Star className="w-3 h-3 fill-current" />
      </div>

      {/* Title overlay */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      >
        <div className="relative w-full max-w-5xl px-6">
          {/* Center Title Block */}
          <div className="bg-pink px-8 md:px-12 py-6 md:py-8 mx-auto w-fit pointer-events-auto relative overflow-hidden">
            {/* Subtle shimmer overlay on the pink box */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
              }}
            />
            {/* Title Line 1 */}
            {heroConfig.titleLine1 && (
              <div className="flex justify-start mb-2 md:mb-4">
                <div className="title-block">
                  <span className="headline-line font-display font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter block">
                    {heroConfig.titleLine1}
                  </span>
                </div>
              </div>
            )}

            {/* Title Line 2 */}
            {heroConfig.titleLine2 && (
              <div className="flex justify-end">
                <div className="title-block">
                  <span className="headline-line font-display font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter block">
                    {heroConfig.titleLine2}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Tagline below the title block */}
          <div className="mt-6 flex justify-center">
            <p className="font-mono text-xs tracking-[0.3em] text-pink/60 uppercase">
              Event Decoration &amp; Styling
            </p>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      {heroConfig.subtitle && (
        <div
          ref={subtitleRef}
          className="absolute bottom-36 left-0 right-0 text-center z-20"
        >
          <p className="font-body text-white/70 text-base md:text-lg tracking-wide">
            {heroConfig.subtitle}
          </p>
        </div>
      )}

      {/* CTA Buttons */}
      <div
        ref={ctaRef}
        className="absolute bottom-16 left-0 right-0 flex justify-center gap-4 z-20"
      >
        <a
          href={heroConfig.ctaHref || '#booking'}
          className="btn-primary"
          data-cursor-hover
        >
          {heroConfig.ctaText}
        </a>
        <a
          href="#gallery"
          className="btn-secondary"
          data-cursor-hover
        >
          See Our Work
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-pink/30 z-20" />
      <div className="absolute bottom-24 right-6 w-16 h-16 border-r-2 border-b-2 border-pink/30 z-20" />

      {/* Loading overlay */}
      <div
        className={`absolute inset-0 bg-[#0B0B0D] z-50 transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </section>
  );
};

export default Hero;
