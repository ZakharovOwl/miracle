import './styles/App.scss';

//components
import Main from "./components/Main";
import Header from "./components/Header";
import Services from "./components/Services";
import Why from "./components/Why";
import Form from "./components/Form";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
    const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className="App">
        <Header  activeMenu={activeMenu}
                 setActiveMenu={setActiveMenu}/>
        <Main />
        <Services />
        <Why />
        <Form />
        <Footer />
    </div>
  );
}

export default App;
