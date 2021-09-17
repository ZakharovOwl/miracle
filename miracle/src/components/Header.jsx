export default function Header() {
    return (
        <div className="header-block container-block">
            <div className="container-wrapper">
                <header className="header">
                    <a href="#/" className="logo-wrapper">
                        <img  className="logo" src="assets/logo1.svg" alt="tree"/>
                        <h1 className="logo-title"><span className="first">M</span>iracle</h1>
                    </a>
                    <div className="contacts">
                        <div className="contact-item phone">
                            <img className="contact-icon phone-icon" src="assets/phone.svg" alt="phone"/>
                            <a href="tel:+375173363033">+375 25 626 58 76</a>
                        </div>
                        <div className="contact-item  mail">
                            <img className="contact-icon mail-icon" src="assets/mail.svg" alt="mail"/>
                            <a href="mailto:zakharov.faur@gmail.com">Zakharov.faur@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <img className="contact-icon telegram-icon" src="assets/telegram.svg" alt="telegram"/>
                            <a href="https://t.me/zakharov_faur">@zakharov_faur</a>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}
