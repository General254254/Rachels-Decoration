const Events = () => {
  return (
    <>
      <section className="events-done" id="events">
        <div className="section-header reveal visible">
          <div>
            <p className="section-label">Real Moments</p>
            <h2 className="section-title">Recent Events We've Done</h2>
          </div>
        </div>
        <div className="events-grid">
          <div className="event-card reveal visible">
            <div className="event-card-img">
              <img src="https://images.unsplash.com/photo-1540209672044-672ce3cc08e4?w=800&q=80" alt="Sarah's 30th Birthday" loading="lazy"/>
              <span className="event-card-tag">Birthday Setup</span>
            </div>
            <div className="event-card-body">
              <h3 className="event-card-title">Sarah's 30th Birthday Glam</h3>
              <p className="event-card-desc">A full-room transformation for an intimate 30th birthday dinner. We designed a custom pink and gold balloon arch, dressed the tables with sheer pink runners, and styled a picture-perfect cake zone.</p>
              <div className="event-card-meta">Location: Kilimani · Guests: 25</div>
            </div>
          </div>
          
          <div className="event-card reveal reveal-delay-1 visible">
            <div className="event-card-img">
              <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&q=80" alt="Surprise Anniversary" loading="lazy"/>
              <span className="event-card-tag">Room Decoration</span>
            </div>
            <div className="event-card-body">
              <h3 className="event-card-title">10th Anniversary Surprise</h3>
              <p className="event-card-desc">A romantic hotel room setup featuring hundreds of scattered rose petals, helium balloons on the ceiling, and delicate fairy lighting. Designed with absolute discretion for maximum surprise.</p>
              <div className="event-card-meta">Location: Westlands · Guests: 2</div>
            </div>
          </div>
          
          <div className="event-card reveal reveal-delay-2 visible">
            <div className="event-card-img">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80" alt="School Prom Setup" loading="lazy"/>
              <span className="event-card-tag">School Event</span>
            </div>
            <div className="event-card-body">
              <h3 className="event-card-title">High School Prom Night</h3>
              <p className="event-card-desc">We draped the main school hall with elegant black and pink fabrics, constructed two massive photo booth walls, and installed dramatic runway lighting for the grand entrances.</p>
              <div className="event-card-meta">Location: Karen · Guests: 150+</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />
    </>
  );
};

export default Events;
