import {useEffect, useState} from "react";
import * as customerService from "../../services/CustomerService"
import {getAllCustomer} from "../../services/CustomerService";
function ListCustomer(){
    const [listCustomer, setListCustomer]=useState([]);

    const getListCustomer=async ()=>{
        if (listCustomer){
            let data=await customerService.getAllCustomer();
            setListCustomer(data);
        }
    }

    useEffect(()=>{
        getListCustomer();
    },[])
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Danh sách khách hàng</h3>
                    </div>
                    <div className="card" style={{ fontFamily: '"Times New Roman"' }}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên khách hàng</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>

                            </tr>
                            </thead>
                            <tbody>
                            {listCustomer.map((item, index)=>(
                                <tr key={item.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>

                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ListCustomer;