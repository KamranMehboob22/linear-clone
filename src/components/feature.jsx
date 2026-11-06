const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Built for the way you work</h2>
        <p>Everything you need to manage your projects, from planning to shipping.</p>
      </div>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Fast & Lightweight</h3>
          <p>Designed to feel instantly responsive. No loading screens, no lag.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-icon">🛠️</div>
          <h3>Powerful Tools</h3>
          <p>Built-in workflows to help your team stay in sync and move faster.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure by Default</h3>
          <p>Your data is encrypted and safe. Enterprise-grade security out of the box.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;