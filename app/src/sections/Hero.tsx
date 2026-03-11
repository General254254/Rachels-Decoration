const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-glow"></div>
        <div className="hero-balloons">
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-eyebrow">Creative Event Styling</div>
          <h1 className="hero-title">Making every moment <em className="italic text-pink">beautiful</em></h1>
          <p className="hero-sub">From intimate birthday setups to grand surprise events, we deliver premium decorations at a fair price.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get A Quote</a>
            <a href="#gallery" className="btn-outline">View Portfolio</a>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
        </div>
      </section>

      <hr className="divider" />
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>Birthdays</span><span className="dot">•</span>
          <span>Anniversaries</span><span className="dot">•</span>
          <span>Baby Showers</span><span className="dot">•</span>
          <span>School Events</span><span className="dot">•</span>
          <span>Surprise Setups</span><span className="dot">•</span>
          <span>Birthdays</span><span className="dot">•</span>
          <span>Anniversaries</span><span className="dot">•</span>
          <span>Baby Showers</span><span className="dot">•</span>
          <span>School Events</span><span className="dot">•</span>
          <span>Surprise Setups</span><span className="dot">•</span>
        </div>
      </div>
      <hr className="divider" />
    </>
  );
};

export default Hero;
