import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Content entrance animation
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    contentTl.fromTo(
      content.querySelectorAll('.animate-item'),
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'expo.out',
      }
    );

    if (contentTl.scrollTrigger) {
      triggersRef.current.push(contentTl.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#0B0B0D] py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
      </div>

      <div ref={contentRef} className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Left - Big closing block */}
            <div className="animate-item">
              <div className="bg-pink p-8 md:p-12 rounded-2xl">
                <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight">
                  THANK<br />YOU
                </h2>
                <p className="font-body text-white/80 text-lg mt-6 max-w-sm">
                  Ready to create something magical? Let's turn your celebration into an unforgettable memory.
                </p>
              </div>
            </div>

            {/* Right - Contact info */}
            <div className="space-y-8">
              {/* Contact details */}
              <div className="animate-item">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${footerConfig.contact.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-pink transition-colors">
                      <Mail className="w-5 h-5 text-pink group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-body text-white/70 group-hover:text-white transition-colors">
                      {footerConfig.contact.email}
                    </span>
                  </a>
                  <a
                    href={`tel:${footerConfig.contact.phone}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-pink transition-colors">
                      <Phone className="w-5 h-5 text-pink group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-body text-white/70 group-hover:text-white transition-colors">
                      {footerConfig.contact.phone}
                    </span>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-pink" />
                    </div>
                    <span className="font-body text-white/70">
                      {footerConfig.contact.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="animate-item">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {footerConfig.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-pink transition-colors group"
                      aria-label={social.label}
                    >
                      {social.platform === 'instagram' && (
                        <Instagram className="w-5 h-5 text-pink group-hover:text-white transition-colors" />
                      )}
                      {social.platform === 'facebook' && (
                        <Facebook className="w-5 h-5 text-pink group-hover:text-white transition-colors" />
                      )}
                      {social.platform === 'pinterest' && (
                        <ArrowUpRight className="w-5 h-5 text-pink group-hover:text-white transition-colors" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="animate-item mb-16">
            <div className="w-full h-64 md:h-80 bg-white/5 rounded-2xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220363292!2d-118.243685!3d34.052234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec27bf11f9fd336!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Footer bottom */}
          <div className="animate-item border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logo */}
              <div className="flex items-center">
                <span className="font-display font-black text-2xl text-white">
                  {footerConfig.logo}
                </span>
                <span className="font-display font-black text-2xl text-pink">
                  {footerConfig.logoAccent}
                </span>
              </div>

              {/* Legal links */}
              <div className="flex gap-6">
                {footerConfig.legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="font-body text-white/40 text-sm hover:text-pink transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="font-body text-white/40 text-sm">
                © {new Date().getFullYear()} {footerConfig.copyrightText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-black text-[8rem] md:text-[15rem] text-white/[0.02] leading-none pointer-events-none select-none">
        {footerConfig.decorativeText}
      </div>
    </section>
  );
};

export default Contact;
