export default function Why() {
    return (
        <div className="why-block">
            <div className="container-wrapper why-wrapper">
                <div className="title-block why-title-block">
                    <h2 className="title-simple title-simple-why">Почему следует выбрать нас?</h2>
                    <h3 className="title-secondary-simple title-simple-why">
                        Мы гарантируем качественное исполнение
                    </h3>
                    <img className="why-img" src="assets/work/tr.png" alt="smoke"/>
                </div>
                <div className="why-content">
                    <div className="why-card">
                        <h3 className="why-title">Лучшие цены</h3>
                        <p className="why-text">Мы молодая команда профисионалов,
                            которая наработывает клиентскую базу,
                            поэтому предлагаем лучшие цены.</p>
                    </div>

                    <div className="why-card">
                        <h3 className="why-title">Оплата после передачи сайта</h3>
                        <p className="why-text">В отличии от своих конкурентов мы не берем предоплату.</p>
                    </div>

                    <div className="why-card">
                        <h3 className="why-title">Современные технологии</h3>
                        <p className="why-text">Используем самые современные стандарты
                            по разработке сайтов и web приложений.</p>
                    </div>

                    <div className="why-card">
                        <h3 className="why-title">Общение с клиентом</h3>
                        <p className="why-text">Информируем клиента обо всех этапах разработки.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
