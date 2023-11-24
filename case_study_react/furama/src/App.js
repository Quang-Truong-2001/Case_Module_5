import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListContract from "./components/contract/ListContract";
import NewContract from "./components/contract/NewContract";
import ListCustomer from "./components/customer/ListCustomer";
import NewCustomer from "./components/customer/NewCustomer";
import NewServiceVilla from "./components/service/NewServiceVilla";
import ListService from "./components/service/ListService";
import {Route, Routes} from "react-router-dom";
import UpdateCustomer from "./components/customer/UpdateCustomer";
import NewServiceRoom from "./components/service/NewServiceRoom";
import NewServiceHouse from "./components/service/NewServiceHouse";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


function App() {
  return (
    <>
      <Header/>
          <Routes>
            <Route path="/" element={<ListService />} />
            <Route path="/customer" element={<ListCustomer />} />
            <Route path="/contract" element={<ListContract />} />
            <Route path="/service/room/new" element={<NewServiceRoom />} />
            <Route path="/service/villa/new" element={<NewServiceVilla />} />
            <Route path="/service/house/new" element={<NewServiceHouse />} />
            <Route path="/customer/new" element={<NewCustomer />} />
            <Route path="/contract/new" element={<NewContract />} />
            <Route path="/customer/update" element={<UpdateCustomer />} />
          </Routes>
      <Footer/>
        <ToastContainer/>
    </>
  );
}

export default App;
