const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-icon">⬤</span> Linear Clone
        </div>
        
        <div className="footer-links">
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} Kamran Mehboob. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;