import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/home" activeClassName="active" className="nav__link">Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" activeClassName="active" className="nav__link">About</NavLink>
          </li>
          <li className="nav__item">
            { props.accountInfo.accountLoggedIn
              ? <NavLink to="/home" activeClassName="active" className="nav__link" onClick={props.logout}>Logout</NavLink>
              : <NavLink to="/login" activeClassName="active" className="nav__link">Login</NavLink>}
          </li>
          { props.accountInfo.accountLoggedIn
            ? <li className="nav__item"><NavLink to="/dashboard/parties" activeClassName="active" className="nav__link">Parties</NavLink></li>
            : ''
          }
          { props.accountInfo.accountLoggedIn
            ? <li className="nav__item"><NavLink to="/dashboard/settings" activeClassName="active" className="nav__link">Settings</NavLink></li>
            : ''
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;