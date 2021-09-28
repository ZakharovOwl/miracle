import './styles/App.scss';

//components
import Main from "./components/Main";
import Header from "./components/Header";
import Services from "./components/Services";
import Why from "./components/Why";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Services />
        <Why />
        <Form />
        <Footer />
    </div>
  );
}

export default App;
