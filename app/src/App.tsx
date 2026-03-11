import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Events from './sections/Events';
import Testimonials from './sections/Testimonials';
import Booking from './sections/Booking';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Custom Cursor
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animRing = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      animationFrameId = requestAnimationFrame(animRing);
    };
    animRing();

    // Hover elements effect
    const hoverEls = document.querySelectorAll('a, button, .gallery-item, .service-card');
    const mouseEnterHover = () => {
      if (dot) dot.style.transform = 'translate(-50%,-50%) scale(2.2)';
      if (ring) Object.assign(ring.style, { width: '54px', height: '54px', borderColor: 'var(--pink)' });
    };
    const mouseLeaveHover = () => {
      if (dot) dot.style.transform = 'translate(-50%,-50%) scale(1)';
      if (ring) Object.assign(ring.style, { width: '36px', height: '36px', borderColor: 'rgba(232,68,138,.6)' });
    };

    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', mouseEnterHover);
      el.addEventListener('mouseleave', mouseLeaveHover);
    });

    // Scroll Reveal Hook
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(el => io.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', mouseEnterHover);
        el.removeEventListener('mouseleave', mouseLeaveHover);
      });
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* CURSORS */}
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>

      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Events />
        <Testimonials />
        <Booking />
        <Footer />
      </main>
    </>
  );
}

export default App;
