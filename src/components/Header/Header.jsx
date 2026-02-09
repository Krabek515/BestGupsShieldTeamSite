import { useState } from 'react'
import './Header.css'

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    function showNavigation() {
        setShowNav(!showNav);
    }

    return (
        <header className='header'>
            <a href="#" className="logo"><img src="pictures/logo-white.png" alt="logo" /></a>
            <nav className="nav">
                <button type="button" className="nav-toggle">
                    <i className='menu-logo' onClick={showNavigation}>{showNav ? 'x' : '≡'}</i>
                </button>
                <ul className={showNav ? 'nav-list active' : 'nav-list'}>
                    <li className="nav-item"><a href="#">Главная</a></li>
                    <li className="nav-item"><a href="#">О нас</a></li>
                    <li className="nav-item"><a href="#">Наша команда</a></li>
                    <li className="nav-item"><a href="#">Контакты</a></li>
                </ul>
            </nav>

        </header>
    )
}