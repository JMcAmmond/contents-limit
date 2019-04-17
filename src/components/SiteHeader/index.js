import React from 'react';
import './style.scss';

/**
 * Unimportant site header. Just used to fill out the page a bit more
 */
const SiteHeader = () => {
    return (
        <header className="site-header">
            <div className="site-header__wrapper">
                <div className="site-header__logo">
                    Company Logo
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#some">Some</a>
                        </li>
                        <li>
                            <a href="#fake">Fake</a>
                        </li>
                        <li>
                            <a href="#links">Links</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default SiteHeader;