import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import starKLogo from '../../images/star-k-logo.png';

function Header() {

    // If the width is less than 768 and you click outside the menu, it collapses
    useEffect(() => {
        const navbarToggle = document.getElementById('navbarToggle');
        const collapsableNav = document.getElementById('collapsable-nav');

        function handleClickOutside(event) {
            if (collapsableNav.classList.contains('show') && !collapsableNav.contains(event.target) && !navbarToggle.contains(event.target)) {
                collapsableNav.classList.remove('show');
            }
        }

        function handleToggle(event) {
            collapsableNav.classList.toggle('show');
        }

        function handleLinkClick(event) {
            if (window.innerWidth < 768) {
                collapsableNav.classList.remove('show');
            }
        }

        document.addEventListener('click', handleClickOutside);
        navbarToggle.addEventListener('click', handleToggle);

        const links = collapsableNav.getElementsByTagName('a');
        for (let link of links) {
            link.addEventListener('click', handleLinkClick);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            navbarToggle.removeEventListener('click', handleToggle);
            for (let link of links) {
                link.removeEventListener('click', handleLinkClick);
            }
        };
    }, []);

    return (
        <>
            <header>
                <nav id="header-nav" className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <Link to="/" className="pull-left visible-md visible-lg">
                                <div id="logo-img" alt="Logo image"></div>
                            </Link>

                            <div className="navbar-brand">
                                <a><h1>David Chu's China Bistro</h1></a>
                                <p>
                                    <img src={starKLogo} alt="Kosher certification" />
                                    <span> Kosher Certified</span>
                                </p>
                            </div>
                            <button id="navbarToggle" type="button" className="navbar-toggle collapsed" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div id="collapsable-nav" className='collapse navbar-collapse'>
                            <ul id="nav-list" className="nav navbar-nav navbar-right">
                                <li id="navHomeButton" className="visible-xs active">
                                    <Link to="/"><span className="glyphicon glyphicon-home"></span> Home</Link>
                                </li>
                                <li id="navMenuButton">
                                    <Link to="/menu"><span className="glyphicon glyphicon-cutlery"></span><br className="hidden-xs" /> Menu</Link>
                                </li>
                                <li>
                                    <Link to="/about"><span className="glyphicon glyphicon-info-sign"></span><br className="hidden-xs" /> About</Link>
                                </li>
                                <li>
                                    <Link to="/awards"><span className="glyphicon glyphicon-certificate"></span><br className="hidden-xs" /> Awards</Link>
                                </li>
                                <li id="phone" className="hidden-xs">
                                    <a href="tel:410-602-5008"><span>410-602-5008</span></a>
                                    <div>* We Deliver</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div id="call-btn" className="visible-xs">
                <a className="btn" href="tel:410-602-5008">
                    <span className="glyphicon glyphicon-earphone"></span>
                    410-602-5008
                </a>
            </div>
            <div id="xs-deliver" className="text-center visible-xs">* We Deliver</div>
        </>
    );
}

export default Header;