import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-top">
                    <div className="logo">
                        <span>COMMERZBANK</span>
                        <img src={logo} alt="Commerzbank Logo" />
                    </div>
                    <div className="header-top-right">
                        <a href="#" className="language-switch">DE</a>
                        <a className="log-out" href="/logout">Log Out</a>
                    </div>
                </div>
                <div className="header-bottom">
                    <nav className="nav-links">
                        <a href="/dashboard">Dashboard</a>
                        <a href="/deposits">Deposits</a>
                        <a href="/credits">Credits</a>
                        <a href="/exchange-rates">Exchange rates</a>
                        <a href="/faq">FAQ</a>
                        <a href="/contacts">Contacts</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
