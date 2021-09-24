import './styles/App.scss';

//components
import Main from "./components/Main";
import Header from "./components/Header";
import Services from "./components/Services";
import Why from "./components/Why";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <Services />
        <Why />
        <Form />
    </div>
  );
}

export default App;
