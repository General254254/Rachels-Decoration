import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate Events Done (0 to 500)
          let eVal = 0;
          const eInterval = setInterval(() => {
            eVal += 10;
            if (eVal >= 500) {
              setEventsCount(500);
              clearInterval(eInterval);
            } else {
              setEventsCount(eVal);
            }
          }, 30);

          // Animate Happy Clients (0 to 98)
          let cVal = 0;
          const cInterval = setInterval(() => {
            cVal += 2;
            if (cVal >= 98) {
              setClientsCount(98);
              clearInterval(cInterval);
            } else {
              setClientsCount(cVal);
            }
          }, 40);

          // Animate Rating (0 to 5)
          let rVal = 0;
          const rInterval = setInterval(() => {
            rVal += 1;
            if (rVal >= 5) {
              setRatingCount(5);
              clearInterval(rInterval);
            } else {
              setRatingCount(rVal);
            }
          }, 300);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="about" id="about" ref={sectionRef}>
        <div className="about-img-wrap reveal visible">
          <div className="about-img">
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80" 
              alt="Balloon decoration setup by Rachels" 
              loading="lazy" 
            />
          </div>
          <div className="about-img-accent"></div>
        </div>
        <div className="about-text-col">
          <p className="about-label reveal visible">Our Story</p>
          <h2 className="about-title reveal reveal-delay-1 visible">
            Where Creativity<br/>Meets <em className="italic text-pink">Celebration</em>
          </h2>
          <p className="about-text reveal reveal-delay-2 visible">
            Rachels Decoration and Events was born from a simple belief: every celebration deserves to look 
            extraordinary — without breaking the bank. Based in Nairobi and serving clients citywide, we bring 
            creativity, passion, and meticulous attention to detail to every single setup.
            <br/><br/>
            From intimate room surprises to full-scale event productions, our team transforms spaces into 
            unforgettable experiences. We combine quality materials, bold design, and fast turnaround to give you 
            picture-perfect results every time.
          </p>
          <div className="about-stats reveal reveal-delay-3 visible">
            <div>
              <span className="stat-val">{eventsCount}+</span>
              <span className="stat-label">Events Done</span>
            </div>
            <div>
              <span className="stat-val">{clientsCount}%</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div>
              <span className="stat-val">{ratingCount}★</span>
              <span className="stat-label">Avg Rating</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
    </>
  );
};

export default About;
