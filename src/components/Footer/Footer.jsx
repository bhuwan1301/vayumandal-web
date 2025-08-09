import './Footer.css';
import footerLogo from '../../assets/logo.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import youtubeIcon from '../../assets/youtube-icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-main">
          {/* Left section - Logo and contact */}
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img className="footer-logo" src={footerLogo} alt="Vayuxplore Pvt. Ltd." />
              <span className="footer-company">VAYUMANDAL INNOVATIONS</span>
            </div>
            <div className="footer-contact">
              <span className="contact-item">
                +91 9811969408, 9266302047
              </span>
              <span className="contact-item">
                vayumandalinnovations@gmail.com
              </span>
              <span className="contact-item">Delhi</span>
            </div>

            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </div>

          {/* Right section - Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Other Links :</h4>
              <div className="footer-nav">
                <div className="nav-group">
                  <a href="/schools" className="footer-link">Schools</a>
                  <a href="/programs" className="footer-link">Programs</a>
                  <a href="/competitions" className="footer-link">Competitions</a>
                  <a href="/about" className="footer-link">About Us</a>
                </div>
                <div className="nav-group">
                  <a href="/privacy" className="footer-link">Privacy Policy</a>
                  <a href="/terms" className="footer-link">Terms & Conditions</a>
                  <a href="/refund" className="footer-link">Return, Refund and Cancellation policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
