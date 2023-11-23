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
import {Route, Routes} from "react-router-dom";
import UpdateCustomer from "./components/customer/UpdateCustomer";

function App() {
  return (
    <>
      <Header/>
          <Routes>
            <Route path="/service" element={<ListService />} />
            <Route path="/customer" element={<ListCustomer />} />
            <Route path="/contract" element={<ListContract />} />
            <Route path="/service/new" element={<NewService />} />
            <Route path="/customer/new" element={<NewCustomer />} />
            <Route path="/contract/new" element={<NewContract />} />
            <Route path="/customer/update" element={<UpdateCustomer />} />
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
