import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
  return(
    <footer className="footer">
      <div className="footer-section">
        <ul className="footer-group">
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
        </ul>
        <ul className="footer-group">
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
        </ul>
        <ul className="footer-group">
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
          <li className="footer-group__item">
            <Link to="/about" className="footer-group__link">About</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;