import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function Why() {
    useEffect(()=>{
        AOS.init({duration:1500,
            easing: "ease-in-out"})
    },[])

    return (
        <div className="why-block" id="why">
            <div className="container-wrapper why-wrapper">
                <div className="title-block why-title-block">
                    <h2 data-aos="fade-in" className="title-simple title-simple-why">Почему следует <span className="select">выбрать</span> нас?</h2>
                    <h3 data-aos="fade-in" className="title-secondary-simple title-simple-why">
                        Мы гарантируем качественное исполнение
                    </h3>
                </div>
                <div className="why-content">
                    <div data-aos="fade-up" className="why-card card-one">
                        <h3 className="why-title">Лучшие цены</h3>
                        <p className="why-text">Мы молодая команда профессионалов,
                            которая нарабатывает клиентскую базу,
                            поэтому предлагаем лучшие цены.</p>
                    </div>

                    <div data-aos="fade-up" className="why-card card-two">
                        <h3 className="why-title">Оплата после передачи сайта</h3>
                        <p className="why-text">В отличии от своих конкурентов мы не берем предоплату.</p>
                    </div>

                    <div data-aos="fade-up" className="why-card card-three">
                        <h3 className="why-title">Современные технологии</h3>
                        <p className="why-text">Используем самые современные стандарты
                            по разработке сайтов и web приложений.</p>
                    </div>

                    <div data-aos="fade-up" className="why-card card-four">
                        <h3 className="why-title">Общение с клиентом</h3>
                        <p className="why-text">Информируем клиента обо всех этапах разработки.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
