import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Calendar, User, Mail, MessageSquare, Tag, CheckCircle } from 'lucide-react';
import { bookingConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const content = contentRef.current;
    if (!section || !form || !content) return;

    // Content entrance
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });

    contentTl.fromTo(
      content,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'expo.out' }
    );

    if (contentTl.scrollTrigger) {
      triggersRef.current.push(contentTl.scrollTrigger);
    }

    // Form entrance
    const formTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });

    formTl.fromTo(
      form,
      { x: 100, rotateY: -18, opacity: 0 },
      { x: 0, rotateY: 0, opacity: 1, duration: 1, ease: 'expo.out' }
    );

    if (formTl.scrollTrigger) {
      triggersRef.current.push(formTl.scrollTrigger);
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="relative w-full bg-[#F2B6D2] py-24 overflow-hidden"
    >
      {/* Dark stage panel */}
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="bg-[#0B0B0D] rounded-3xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left side - Content */}
            <div ref={contentRef}>
              {/* Section label */}
              {bookingConfig.sectionLabel && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-pink" />
                  <span className="font-mono text-pink text-sm uppercase tracking-[0.3em]">
                    {bookingConfig.sectionLabel}
                  </span>
                </div>
              )}

              {/* Heading */}
              {(bookingConfig.headingMain || bookingConfig.headingAccent) && (
                <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-6">
                  {bookingConfig.headingMain}
                  <span className="text-pink">{bookingConfig.headingAccent}</span>
                </h2>
              )}

              {/* Description */}
              {bookingConfig.description && (
                <p className="font-body text-white/60 text-lg leading-relaxed mb-8">
                  {bookingConfig.description}
                </p>
              )}

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink" />
                  <span className="font-body text-white/70">Free consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink" />
                  <span className="font-body text-white/70">Custom moodboard included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink" />
                  <span className="font-body text-white/70">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink" />
                  <span className="font-body text-white/70">No obligation quote</span>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="relative">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-pink rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="font-body text-white/60">
                    We've received your request and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-12"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-12"
                      />
                    </div>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-12"
                      />
                    </div>
                  </div>

                  {/* Event Type & Date */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="pl-12 appearance-none"
                      >
                        <option value="">Event Type</option>
                        <option value="birthday">Birthday</option>
                        <option value="proposal">Proposal</option>
                        <option value="school">School Event</option>
                        <option value="corporate">Corporate</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="babyshower">Baby Shower</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="pl-12"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                    <textarea
                      name="message"
                      placeholder="Tell us about your vision..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="pl-12 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-pink text-white font-body font-semibold text-sm uppercase tracking-wider hover:bg-pink/90 transition-all duration-300 rounded-md hover:-translate-y-1"
                    data-cursor-hover
                  >
                    {bookingConfig.ctaText}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
