import { Heart, Star, Gift, PartyPopper, Sparkles, Image as ImageIcon } from 'lucide-react';

const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="section-header reveal visible">
          <div>
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Our Services</h2>
          </div>
          <a href="https://wa.me/254768020535?text=Hi%20Rachels%20Decoration!" target="_blank" rel="noreferrer" className="section-link">
            Get a Free Quote →
          </a>
        </div>
        <div className="services-grid">
          <div className="service-card reveal visible">
            <span className="service-num">01</span>
            <div className="service-icon"><Heart size={22} strokeWidth={1.5} className="text-pink" /></div>
            <h3>Room Decoration</h3>
            <p>Romantic setups, birthday room surprises, and anniversary transforms — every room becomes a love note.</p>
            <a href="https://wa.me/254768020535?text=Hi%2C+I'm+interested+in+Room+Decoration" target="_blank" rel="noreferrer" className="service-link">Book This Service &rarr;</a>
          </div>
          
          <div className="service-card reveal reveal-delay-1 visible">
            <span className="service-num">02</span>
            <div className="service-icon"><Star size={22} strokeWidth={1.5} className="text-pink" /></div>
            <h3>Event Decoration</h3>
            <p>Full-scale event styling — backdrops, table setups, florals, lighting, and décor coordination.</p>
            <a href="https://wa.me/254768020535?text=Hi%2C+I'm+interested+in+Event+Decoration" target="_blank" rel="noreferrer" className="service-link">Book This Service &rarr;</a>
          </div>

          <div className="service-card reveal reveal-delay-2 visible">
            <span className="service-num">03</span>
            <div className="service-icon"><Sparkles size={22} strokeWidth={1.5} className="text-pink" /></div>
            <h3>Balloons &amp; Ribbons</h3>
            <p>Arches, garlands, columns, bouquets, and intricate ribbon art that elevate any celebration.</p>
            <a href="https://wa.me/254768020535?text=Hi%2C+I'm+interested+in+Balloons+%26+Ribbons" target="_blank" rel="noreferrer" className="service-link">Book This Service &rarr;</a>
          </div>

          <div className="service-card reveal reveal-delay-1 visible">
            <span className="service-num">04</span>
            <div className="service-icon"><PartyPopper size={22} strokeWidth={1.5} className="text-pink" /></div>
            <h3>Birthdays &amp; Parties</h3>
            <p>Themed setups, photo zones, cake tables, and full-room transforms for memorable parties.</p>
            <a href="https://wa.me/254768020535?text=Hi%2C+I'm+interested+in+Birthday+Setup" target="_blank" rel="noreferrer" className="service-link">Book This Service &rarr;</a>
          </div>

          <div className="service-card reveal reveal-delay-2 visible">
            <span className="service-num">05</span>
            <div className="service-icon"><ImageIcon size={22} strokeWidth={1.5} className="text-pink" /></div>
            <h3>School Events</h3>
            <p>Graduations, prom nights, talent shows, and school dances styled to wow students and parents alike.</p>
            <a href="https://wa.me/254768020535?text=Hi%2C+I'm+interested+in+School+Event+Decoration" target="_blank" rel="noreferrer" className="service-link">Book This Service &rarr;</a>
          </div>

          <div className="service-card reveal reveal-delay-3 visible">
            <span className="service-num">06</span>
            <div className="service-icon"><Gift size={22} strokeWidth={1.5} className="text-pink" /></div>
            <h3>Surprise Setups</h3>
            <p>Secret proposals, milestone surprises, and special reveals — we plan every detail so you don't have to.</p>
            <a href="https://wa.me/254768020535?text=Hi%2C+I'm+interested+in+Surprise+Setup" target="_blank" rel="noreferrer" className="service-link">Book This Service &rarr;</a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* FEATURES STRIP */}
      <div className="features">
        <div className="feature-item reveal visible">
          <div className="feature-icon">
            <Sparkles size={24} strokeWidth={1.5} className="text-pink" />
          </div>
          <h4>Creative Designs</h4>
          <p>Every setup is uniquely crafted to match your vision and personality.</p>
        </div>
        <div className="feature-item reveal reveal-delay-1 visible">
          <div className="feature-icon">
            <Star size={24} strokeWidth={1.5} className="text-pink" />
          </div>
          <h4>Affordable Pricing</h4>
          <p>Luxury-quality decoration at prices designed for every budget.</p>
        </div>
        <div className="feature-item reveal reveal-delay-2 visible">
          <div className="feature-icon">
            <ImageIcon size={24} strokeWidth={1.5} className="text-pink" />
          </div>
          <h4>Photo-Ready Setups</h4>
          <p>Styled specifically to look stunning in photographs and video.</p>
        </div>
        <div className="feature-item reveal reveal-delay-3 visible">
          <div className="feature-icon">
            <Heart size={24} strokeWidth={1.5} className="text-pink" />
          </div>
          <h4>Fast Turnaround</h4>
          <p>Reliable, on-time delivery and professional on-site setup.</p>
        </div>
      </div>
      
      <hr className="divider" />
    </>
  );
};

export default Services;
