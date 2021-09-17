import Header from "./Header";

export default function Main() {
    return (
        <div className="main-block container-block">
            <div className="container-wrapper">
                <div className="main-content">
                    <div className="main-content-left">
                        <div className="logo-wrapper">
                            <div className="logo-main"></div>
                            {/*<img  className="logo-main" src="assets/logo-main.svg" alt="tree"/>*/}
                            <h1 className="logo-title-main"><span className="first-main">M</span>iracle</h1>
                        </div>
                    </div>
                    <div className="main-content-right">
                        <h2 className="select-title">Создадим сайт для твоих идей</h2>
                        <button className="main-btn">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
