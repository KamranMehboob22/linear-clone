import { useState } from "react";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">⬤</span> Linear
      </div>

      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
        {/* PRODUCTS DROPDOWN */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <a href="#" className="dropdown-trigger">
            Products ▾
          </a>
          {isProductsOpen && (
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <span className="icon">📝</span>
                <div>
                  <h4>Issue Tracking</h4>
                  <p>Track bugs</p>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <span className="icon">📊</span>
                <div>
                  <h4>Project Boards</h4>
                  <p>Plan roadmaps</p>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <span className="icon">🤖</span>
                <div>
                  <h4>Automations</h4>
                  <p>Connect your tools</p>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* RESOURCES DROPDOWN */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setIsResourcesOpen(true)}
          onMouseLeave={() => setIsResourcesOpen(false)}
        >
          <a href="#" className="dropdown-trigger">
            Resources ▾
          </a>
          {isResourcesOpen && (
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <span className="icon">📚</span>
                <div>
                  <h4>Documentation</h4>
                  <p>Learn the tools</p>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <span className="icon">💬</span>
                <div>
                  <h4>Community</h4>
                  <p>Join discussion</p>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <span className="icon">📰</span>
                <div>
                  <h4>Blog</h4>
                  <p>Read the latest news</p>
                </div>
              </a>
            </div>
          )}
        </div>

        <a href="#">Customers</a>
        <a href="#">Changelog</a>
        <a href="#">Pricing</a>

        {/* Buttons inside mobile menu */}
        <div className="mobile-buttons">
          <a href="#" className="login-link">
            Log in
          </a>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>

      {/* NEW: Desktop buttons outside the nav-links */}
      <div className="nav-buttons">
        <a href="#" className="login-link">
          Log in
        </a>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Header;
