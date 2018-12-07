import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
  return(
    <footer className="footer">
      <div className="footer-section">
        <ul className="footer-group">
          <li className="footer-group__item">
            <h4 className="footer-group__title">Legal</h4>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">Privacy</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">Terms of use</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">Contact</Link>
          </li>
        </ul>
        <ul className="footer-group">
          <li className="footer-group__item">
            <h4 className="footer-group__title">Info</h4>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About Blunderly</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">The Creator</Link>
          </li>
        </ul>
        <ul className="footer-group">
          <li className="footer-group__item">
            <h4 className="footer-group__title">Contribute</h4>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">Documentation</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">Social Media</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">Help Code</Link>
          </li>
        </ul>
      </div>
      <div className="txt-center mid spacing--top--2">
        Created with Bluntness by Matthew LeFevre &copy; 2018
      </div>
    </footer>
  );
}
export default Footer;