import { useEffect, useState } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      {/* TOP PINK LINE */}
      <div className="top-line"></div>
      
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo">
          <a href="#home" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <span className="r">Rachels</span>
            <div>
              <span className="d">DECORATION</span>
              <span className="ae">AND EVENTS</span>
            </div>
          </a>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="https://wa.me/254768020535?text=Hi%20Rachels%20Decoration!" className="nav-cta">
          Book A Date
        </a>
        <button 
          className="hamburger" 
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMobile}>Home</a>
        <a href="#services" onClick={closeMobile}>Services</a>
        <a href="#gallery" onClick={closeMobile}>Gallery</a>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#contact" onClick={closeMobile}>Contact</a>
        <a href="https://wa.me/254768020535?text=Hi%20Rachels%20Decoration!" className="btn-primary" style={{ marginTop: '1rem' }}>Book Now</a>
      </div>
    </>
  );
};

export default Navigation;
