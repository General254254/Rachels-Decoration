const Testimonials = () => {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="section-header reveal visible">
          <div>
            <p className="section-label">Client Love</p>
            <h2 className="section-title">What They Say</h2>
          </div>
        </div>
        <div className="reviews-row mt-12 pb-4 flex gap-6 overflow-x-auto hide-scrollbar">
          <div className="review-card reveal visible">
            <div className="review-quote">"</div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"They transformed my living room into a dream! Every balloon, every ribbon was perfectly placed. My daughter cried happy tears when she saw it."</p>
            <div className="review-name">Amina Wanjiru</div>
            <div className="review-meta">Birthday · Nairobi</div>
          </div>
          <div className="review-card reveal reveal-delay-1 visible">
            <div className="review-quote">"</div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Rachels Decoration made our school graduation look like something from a magazine. Parents loved it, students loved it — absolutely stunning work."</p>
            <div className="review-name">David Ochieng</div>
            <div className="review-meta">School Event · Westlands</div>
          </div>
          <div className="review-card reveal reveal-delay-2 visible">
            <div className="review-quote">"</div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"I booked the surprise setup and they knocked it out of the park. She had no idea — the look on her face was priceless. Worth every shilling!"</p>
            <div className="review-name">James Kamau</div>
            <div className="review-meta">Surprise Setup · Karen</div>
          </div>
          <div className="review-card reveal reveal-delay-3 visible">
            <div className="review-quote">"</div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Professional, creative, and so easy to work with. Our corporate event had amazing décor that impressed all our clients and staff. Highly recommend!"</p>
            <div className="review-name">Sarah Njeri</div>
            <div className="review-meta">Corporate Event · CBD</div>
          </div>
        </div>
      </section>

      <hr className="divider" />
    </>
  );
};

export default Testimonials;
