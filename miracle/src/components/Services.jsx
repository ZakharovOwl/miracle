import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function Services() {
    useEffect(()=>{
        AOS.init({duration:1500,
            easing: "ease-in-out"})
    },[])

    return (
        <div className="services-block" id="service">
            <div className="container-wrapper services-wrapper">
                <div className="title-block">
                    <h2 data-aos="fade-in" className="title-simple">Что мы предлагаем?</h2>
                    <h3 data-aos="fade-in" className="title-secondary-simple">Полный перечень услуг по разработке сайтов</h3>
                </div>
            </div>
            <div className="services-content">
                <div data-aos="fade-up" className="services-card card-design">
                    <div className="card-text design-text">
                        <h4 className="title-card">Дизайн</h4>
                        <p className="content-card">
                            Согласование с клиентом индивидуального дизайна сайта
                        </p>
                    </div>
                    <img className="card-img" src="assets/work/smoke.png" alt="smoke"/>
                </div>
                <div data-aos="fade-up" className="services-card card-dev">
                    <div className="card-text">
                        <h4 className="title-card">Разработка сайта</h4>
                        <p className="content-card">Разработка сайта по самым современным стандартам</p>
                    </div>
                    <img className="card-img wave-img" src="assets/work/wave.png" alt="smoke"/>
                </div>
                <div data-aos="fade-up" className="services-card">
                    <div className="card-text smile-text">
                        <h4 className="title-card">Обновление вашего сайта</h4>
                        <p className="content-card">Внесение изменений, добавление функционала к уже существующему сайту</p>
                    </div>
                    <img className="card-img update" src="assets/work/circle.png" alt="smoke"/>
                </div>
                <div data-aos="fade-up" className="services-card">
                    <div className="card-text">
                        <h4 className="title-card">Хостинг</h4>
                        <p className="content-card">Размещение сайта в интернете</p>
                    </div>
                    <img className="card-img card-dev-img" src="assets/work/space.png" alt="smoke"/>
                </div>
            </div>
        </div>
    )
}
