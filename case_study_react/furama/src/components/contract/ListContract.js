import {useEffect, useState} from "react";
import * as contractService from "../../services/ContractService"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


function ListContract(){
    const [listContract,setListContract]=useState([]);
    const [deleteContract, setDeleteContract]=useState({})
    const getAllContract=async ()=>{
        if(listContract){
            let res=await contractService.getAllContract();
            setListContract(res);
        }
    }
    const deleteContractById=()=>{
        let isSucceed=contractService.deleteContract(deleteContract.id);
        if(isSucceed){
            toast.success("Xóa thành công");
            getAllContract();
        }
    }
    useEffect(()=>{
        getAllContract();
    },[])
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Danh sách hợp đồng</h3>
                    </div>
                    <div className="card" style={{ fontFamily: '"Times New Roman"' }}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Mã hợp đồng</th>
                                <th scope="col">Tên khách hàng</th>
                                <th scope="col">Tên dịch vụ</th>
                                <th scope="col">Ngày làm hợp đồng</th>
                                <th scope="col">Ngày kết thúc hợp đồng</th>
                                <th scope="col">Tổng tiền</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {listContract.map((item,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.idContract}</td>
                                    <td>{item.customer.name}</td>
                                    <td>{item.nameService}</td>
                                    <td>{item.startDay}</td>
                                    <td>{item.endDay}</td>
                                    <td>{item.money}</td>
                                    <td>
                                        <button onClick={()=> setDeleteContract(item)} type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thông báo xóa</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Bạn có chắc chắn muốn xóa không?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Không</button>
                                        <button onClick={deleteContractById} type="button" class="btn btn-primary" data-bs-dismiss="modal">Có</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ListContract;