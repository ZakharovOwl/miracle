import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function Footer() {
    useEffect(()=>{
        AOS.init({duration:700,
            easing: "ease-in-out"})
    },[])

    return (
        <div className="footer-block container-block">
            <div className="footer-wrapper">
                <h2 data-aos="fade-in" className="footer-logo-text" id="contact">Наши контакты</h2>
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
                            <img className="contact-icon phone-icon" src="assets/icons/phone.png" alt="phone"/>
                            <a href="tel:+375173363033">+375 25 626 58 76</a>
                        </li>
                        <li className="footer-item contact-item  mail">
                            <img className="contact-icon mail-icon" src="assets/icons/email.png" alt="mail"/>
                            <a href="mailto:info@miracle.by">info@miracle.by</a>
                        </li>
                        <li className="footer-item contact-item">
                            <img className="contact-icon telegram-icon" src="assets/icons/telegram-color.png" alt="telegram"/>
                            <a href="https://t.me/miracle_by">@miracle_by</a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}
