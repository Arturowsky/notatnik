import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import Header from "../src/components/header/Header";
import Main from "../src/components/main/Main";
import Footer from "../src/components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
