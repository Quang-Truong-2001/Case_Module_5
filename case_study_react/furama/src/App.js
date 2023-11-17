import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListContract from "./components/contract/ListContract";

function App() {
  return (
    <>
      <Header/>
        <ListContract/>
        <Footer/>
    </>
  );
}

export default App;
