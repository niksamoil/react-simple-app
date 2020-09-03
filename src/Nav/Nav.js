import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (

            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Главная</a>
                            </li>
                            <li>
                                <a href="/pointmap">Пункты обмена</a>
                            </li>
                            <li>
                                <a href="/contacts">Контакты</a>
                            </li>
                            <li>
                                <a href="/about">О нас</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Nav;