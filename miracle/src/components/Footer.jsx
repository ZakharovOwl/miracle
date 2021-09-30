export default function Footer() {
    return (
        <div className="footer-block container-block">
            <div className="footer-wrapper">
                <h2 className="footer-logo-text" id="contact">Наши контакты</h2>
                <footer className="footer">
                    <div className="footer-item">
                        <div className="footer-logo-wrapper logo-wrapper">
                            <div className="footer-logo">
                                <img className="footer-logo-img" src="assets/logo1.svg" alt="tree"/>
                                <h1 className="footer-logo-title"><span className="first">M</span>iracle</h1>
                            </div>
                        </div>
                    </div>
                    <ul className="footer-content">
                        <li className="footer-item contact-item phone">
                            <img className="contact-icon phone-icon" src="assets/phone.svg" alt="phone"/>
                            <a href="tel:+375173363033">+375 25 626 58 76</a>
                        </li>
                        <li className="footer-item contact-item  mail">
                            <img className="contact-icon mail-icon" src="assets/mail.svg" alt="mail"/>
                            <a href="mailto:zakharov.faur@gmail.com">Zakharov.faur@gmail.com</a>
                        </li>
                        <li className="footer-item contact-item">
                            <img className="contact-icon telegram-icon" src="assets/telegram.svg" alt="telegram"/>
                            <a href="https://t.me/zakharov_faur">@zakharov_faur</a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}
