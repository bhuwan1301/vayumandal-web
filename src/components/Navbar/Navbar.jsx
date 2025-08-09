import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/schools', label: 'Schools' },
    { to: '/competitions', label: 'Competitions' },
    { to: '/about', label: 'About us' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-grid">
        <Link to="/" className="brand">
          <img src={logo} alt="Vayumandal Innovations logo" />
        </Link>

        <div className="nav-items">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-pill ${pathname === l.to ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="contact-pill">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
