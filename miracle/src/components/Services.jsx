export default function Services() {
    return (
        <div className="services-block">
            <div className="container-wrapper services-wrapper">
                <div className="title-block">
                    <h2 className="title-simple">Что мы предлагаем?</h2>
                    <h3 className="title-secondary-simple">Полный перечень услуг по разработке сайтов</h3>
                </div>
            </div>
            <div className="services-content">
                <div className="services-card card-design">
                    <div className="card-text design-text">
                        <h4 className="title-card">Дизайн</h4>
                        <p className="content-card">
                            Согласование с клиентом индивидуального дизайна сайта
                        </p>
                    </div>
                    <img className="card-img" src="assets/work/smoke.png" alt="smoke"/>
                </div>
                <div className="services-card card-dev">
                    <div className="card-text">
                        <h4 className="title-card">Разработка сайта</h4>
                        <p className="content-card">Разработка сайта по самым современным стандартам</p>
                    </div>
                    <img className="card-img wave-img" src="assets/work/wave.png" alt="smoke"/>
                </div>
                <div className="services-card">
                    <div className="card-text smile-text">
                        <h4 className="title-card">Обновление вашего сайта</h4>
                        <p className="content-card">Внесение изменений, добавление функционала к уже существующему сайту</p>
                    </div>
                    <img className="card-img update" src="assets/work/circle.png" alt="smoke"/>
                </div>
                <div className="services-card">
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
