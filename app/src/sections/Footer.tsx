import { Instagram, Facebook, MessageCircle } from 'lucide-react';


const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="r">Rachels</span>
            <div>
              <span className="d">DECORATION</span>
              <span className="ae" style={{ marginTop: '-3px' }}>AND EVENTS</span>
            </div>
          </div>
          <p>Making every moment beautiful — at a fair price. Nairobi's trusted decoration and events studio.</p>
          <div className="social-row">
            <a href="https://wa.me/254768020535" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href="#" className="social-btn" title="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="social-btn" title="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="social-btn" title="TikTok">
              {/* Simple TikTok SVG since lucide doesn't have it by default */}
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: 'var(--muted)', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <p className="footer-title">Services</p>
          <div className="footer-links">
            <a href="#services">Room Decoration</a>
            <a href="#services">Event Decoration</a>
            <a href="#services">Balloons &amp; Ribbons</a>
            <a href="#services">Birthday Setup</a>
            <a href="#services">School Events</a>
            <a href="#services">Surprise Setups</a>
          </div>
        </div>
        
        <div>
          <p className="footer-title">Company</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">Our Story</a>
            <a href="#gallery">Portfolio</a>
            <a href="#contact">Contact</a>
            <a href="https://wa.me/254768020535" target="_blank" rel="noreferrer">Book Now</a>
          </div>
        </div>
        
        <div>
          <p className="footer-title">Stay Updated</p>
          <p style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.7 }}>
            Get decoration tips and event inspiration delivered to your inbox.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">→</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>© 2025 Rachels Decoration and Events</span>
        <span>Crafted with <em className="italic text-pink">♥</em> in Nairobi, Kenya</span>
      </div>
    </footer>
  );
};

export default Footer;
