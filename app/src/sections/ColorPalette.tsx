import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';
import { colorPaletteConfig, galleryImages } from '../config';

gsap.registerPlugin(ScrollTrigger);

const ColorPalette = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const cards = grid.querySelectorAll('.gallery-card');

    // Grid line draw animation
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });

    lineTl.fromTo(
      '.grid-line-h',
      { scaleX: 0 },
      { scaleX: 1, duration: 1, stagger: 0.1, ease: 'expo.out' }
    );

    lineTl.fromTo(
      '.grid-line-v',
      { scaleY: 0 },
      { scaleY: 1, duration: 1, stagger: 0.1, ease: 'expo.out' },
      0
    );

    if (lineTl.scrollTrigger) {
      triggersRef.current.push(lineTl.scrollTrigger);
    }

    // Cards flip in
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });

    cardsTl.fromTo(
      cards,
      {
        rotateY: 90,
        opacity: 0,
        y: 50,
      },
      {
        rotateY: 0,
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
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

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = '';
  };

  if (colorPaletteConfig.colors.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative min-h-screen w-full bg-[#0B0B0D] py-24 overflow-hidden"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 33.33, 66.66, 100].map((pos, i) => (
          <div
            key={`h-${i}`}
            className="grid-line-h absolute left-0 right-0 h-px bg-white/10 origin-left"
            style={{ top: `${pos}%` }}
          />
        ))}
        {[0, 25, 50, 75, 100].map((pos, i) => (
          <div
            key={`v-${i}`}
            className="grid-line-v absolute top-0 bottom-0 w-px bg-white/10 origin-top"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          {colorPaletteConfig.sectionLabel && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pink" />
              <span className="font-mono text-pink text-sm uppercase tracking-[0.3em]">
                {colorPaletteConfig.sectionLabel}
              </span>
              <div className="w-12 h-px bg-pink" />
            </div>
          )}
          {(colorPaletteConfig.headingMain || colorPaletteConfig.headingAccent) && (
            <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight">
              {colorPaletteConfig.headingMain}<span className="text-pink">{colorPaletteConfig.headingAccent}</span>
            </h2>
          )}
        </div>

        {/* Gallery Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-card relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(image.src)}
              data-cursor-hover
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <span className="font-body text-pink text-xs uppercase tracking-wider mb-1">
                  {image.category}
                </span>
                <span className="font-display font-semibold text-white text-sm text-center">
                  {image.alt}
                </span>
                <ZoomIn className="w-6 h-6 text-white mt-2 opacity-70" />
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom text */}
        {colorPaletteConfig.bottomText && (
          <div className="mt-16 text-center">
            <p className="font-body text-white/40 text-sm uppercase tracking-wider">
              {colorPaletteConfig.bottomText}
            </p>
          </div>
        )}
      </div>

      {/* Decorative text */}
      {colorPaletteConfig.decorativeText && (
        <div className="absolute bottom-0 right-0 font-display font-black text-[8rem] md:text-[15rem] text-white/[0.02] leading-none pointer-events-none select-none">
          {colorPaletteConfig.decorativeText}
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ColorPalette;
