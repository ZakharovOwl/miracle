import {Link} from 'react-scroll'

export default function Header({activeMenu, setActiveMenu}) {
    return (
        <nav className={"container-block header-block" + (activeMenu ? '-active' : '')}>
            <div className="header-wrapper">
                <div className="header">
                    <ul className="menu-wrapper">
                        <Link to="main" smooth={true} duration={1000} className="menu-logo menu-item">
                            <div className="logo-wrapper">
                                <img className="logo" src="assets/logo-white.svg" alt="tree"/>
                                <h1 className="logo-title"><span className="first">M</span>iracle</h1>
                            </div>
                        </Link>
                        <Link to="service" smooth={true} duration={1000} className="menu-item">Наши услуги</Link>
                        <Link to="why" smooth={true} duration={1000} className="menu-item">О нас</Link>
                        <Link to="form" smooth={true} duration={1000} className="menu-item">Оставить заявку</Link>
                        <Link to="contact" smooth={true} duration={1000} className="menu-item">Контакты</Link>
                    </ul>

                    <ul className={"menu-mobile-wrapper"}>
                        <Link to="main" smooth={true} duration={1000} className="menu-logo menu-item">
                            <div className="logo-wrapper">
                                <h1 className="logo-title"><span className="first">M</span>iracle</h1>
                            </div>
                        </Link>

                        <Link to="main" smooth={true} duration={1000} className="menu-logo menu-item">
                            <div className="logo-wrapper">
                                <img className="logo" src="assets/logo-white.svg" alt="tree"/>
                            </div>
                        </Link>

                        <li className={"menu-btn"}
                            onClick={() => setActiveMenu(!activeMenu)}>
                            <div className={"menu-line btn-menu-top" + (activeMenu ? ' line1' : '')}>
                            </div>
                            <div className={"menu-line btn-menu-bottom" + (activeMenu ? ' line2' : '')}>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className={"menu-mobile-list" + (activeMenu ? ' mobile-list-active' : '')}>
                <Link to="service"
                      smooth={true}
                      duration={1000}
                      className="menu-mobile-item"
                      onClick={() => setActiveMenu(!activeMenu)}>Наши услуги</Link>
                <Link to="why"
                      smooth={true}
                      duration={1000}
                      className="menu-mobile-item"
                      onClick={() => setActiveMenu(!activeMenu)}>О нас</Link>
                <Link to="form"
                      smooth={true}
                      duration={1000}
                      className="menu-mobile-item"
                      onClick={() => setActiveMenu(!activeMenu)}>Оставить заявку</Link>
                <Link to="contact"
                      smooth={true}
                      duration={1000}
                      className="menu-mobile-item"
                      onClick={() => setActiveMenu(!activeMenu)}>Контакты</Link>
            </ul>
        </nav>
    )
}
