export default function Header() {
    return (
        <div className="header-block container-block">
            <div className="header-wrapper">
                <header className="header">
                    <ul className="menu-wrapper">
                        <li className="menu-item">
                            <a href="/" className="logo-wrapper">
                                <img  className="logo" src="assets/logo-white.svg" alt="tree"/>
                                <h1 className="logo-title"><span className="first">M</span>iracle</h1>
                            </a>
                        </li>
                        <li className="menu-item">Наши услуги</li>
                        <li className="menu-item">Как мы работаем</li>
                        <li className="menu-item">Оставить заявку</li>
                        <li className="menu-item">Контакты</li>
                    </ul>
                </header>
            </div>
        </div>
    )
}
