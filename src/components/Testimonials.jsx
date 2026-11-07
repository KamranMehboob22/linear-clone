const Testimonials = () => {
  return (
    <section className="testimonials-section">
     <div className="testimonials-header">
       <h2>Loved by developers</h2>
      <p className="section-subtitle">Here is what our users have to say.</p>
     </div>

      <div className="testimonials-grid">
        {/* Card 1 */}
        <div className="testimonial-card">
          <p className="quote">"This tool changed how our team ships software. It's incredibly fast."</p>
          <div className="user-info">
            <div className="avatar">A</div>
            <div>
              <h4>Ali Khan</h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <p className="quote">"The best UI I've ever used. It feels like a native app in the browser."</p>
          <div className="user-info">
            <div className="avatar">S</div>
            <div>
              <h4>Sarah Ahmed</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card">
          <p className="quote">"I recommend this to every software team I work with."</p>
          <div className="user-info">
            <div className="avatar">M</div>
            <div>
              <h4>Mike Johnson</h4>
              <p>CTO at TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;