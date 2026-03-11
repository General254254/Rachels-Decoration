import { useState } from 'react';

const galleryItems = [
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', hiRes: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85', label: 'Birthday Setup', caption: 'Birthday Balloon Arch Setup' },
  { img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', hiRes: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=85', label: 'Balloons & Ribbons', caption: 'Balloon Garland & Ribbons' },
  { img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80', hiRes: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=85', label: 'Event Decoration', caption: 'Event Decoration - Table Setup' },
  { img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80', hiRes: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85', label: 'Table Styling', caption: 'Elegant Table Setup' },
  { img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80', hiRes: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1200&q=85', label: 'Birthday Party', caption: 'Birthday Party Backdrop' },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', hiRes: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85', label: 'School Event', caption: 'School Graduation Event' },
  { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', hiRes: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85', label: 'Surprise Setup', caption: 'Romantic Surprise Setup' }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const [currentCaption, setCurrentCaption] = useState('');

  const openLightbox = (imgSrc: string, caption: string) => {
    setCurrentImg(imgSrc);
    setCurrentCaption(caption);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <section className="gallery" id="gallery">
        <div className="section-header reveal visible">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Our Recent Work</h2>
          </div>
        </div>
        
        <div className="gallery-grid reveal visible">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="gallery-item" 
              onClick={() => openLightbox(item.hiRes, item.caption)}
            >
              <img className="gallery-img" src={item.img} alt={item.label} loading="lazy" />
              <div className="gallery-label">{item.label}</div>
              <div className="gallery-overlay"><span>View Setup</span></div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta reveal visible">
          <a href="https://wa.me/254768020535?text=Hi%2C+I'd+like+a+custom+setup!" target="_blank" rel="noreferrer" className="btn-primary">
            Request a Custom Setup &rarr;
          </a>
        </div>
      </section>

      {/* LIGHTBOX MAP TO REACT STATE */}
      {lightboxOpen && (
        <div className="lightbox open" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&#x2715;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImg} alt={currentCaption} />
          </div>
          <p className="lightbox-caption">{currentCaption}</p>
          <p style={{ fontSize: '.65rem', letterSpacing: '.15em', color: 'rgba(249, 245, 242, 0.3)', textTransform: 'uppercase', marginTop: '.3rem' }}>
            Click anywhere to close
          </p>
        </div>
      )}

      <hr className="divider" />
    </>
  );
};

export default Gallery;
