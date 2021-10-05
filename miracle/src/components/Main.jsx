import {Link} from 'react-scroll'
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Main() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out"
        })
    }, [])

    return (
        <div className="main-block container-block" id="main">
            <div className="container-wrapper">
                <div className="main-content">
                    <div className="main-content-left">
                        <div className="logo-wrapper">
                            <div data-aos="fade-in" className="logo-main"></div>
                            <h1 data-aos="fade-in" className="logo-title-main"><span className="first-main">M</span>iracle</h1>
                        </div>
                    </div>
                    <div className="main-content-right">
                        <h2 data-aos="fade-in" duration="3500" className="select-title">Создадим сайт для <span className="your">твоих</span> идей</h2>
                        <Link to="form" smooth={true} duration={1000} className="main-btn">Оставить заявку</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
