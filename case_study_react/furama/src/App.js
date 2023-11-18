import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListContract from "./components/contract/ListContract";
import NewContract from "./components/contract/NewContract";
import ListCustomer from "./components/customer/ListCustomer";
import NewCustomer from "./components/customer/NewCustomer";
import NewService from "./components/service/NewService";
import ListService from "./components/service/ListService";

function App() {
  return (
    <>
      <Header/>
        {/*<ListContract/>*/}
      {/*<NewContract/>*/}
      {/*<ListCustomer/>*/}
      {/*<NewCustomer/>*/}
      {/*<NewService/>*/}
        <ListService/>
        <Footer/>

    </>
  );
}

export default App;
