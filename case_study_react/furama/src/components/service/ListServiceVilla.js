import image from "./images/big_image_1.jpg";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as villaService from "../../services/VillaService"
import axios from "axios";
import {toast} from "react-toastify";
function ListServiceVilla(){
    const [listVilla, setListVilla]=useState([]);
    const [villa,setVilla]=useState({});
    const getAllServiceVilla=async ()=>{
        let res=await villaService.getAllVilla();
        setListVilla(res);
    }

    const deleteVilla= ()=>{
        villaService.deleteVillaService(villa.id);
        toast.success("Xóa thành công");
        getAllServiceVilla();

    }
    useEffect(()=>{
        getAllServiceVilla();
    },[])
    return(
        <>
            <section className="site-hero site-hero-innerpage overlay" data-stellar-background-ratio="0.5"
                     style={{ backgroundImage:`url(${image})` }}>
                <div className="container">
                    <div className="row align-items-center site-hero-inner justify-content-center">
                        <div className="col-md-12 text-center">

                            <div className="mb-5 element-animate">
                                <h1>News &amp; Events</h1>
                                <p>Read our daily news and events of our luxury resort.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="site-section bg-light">
                <div className="container">
                    <h1 className="d-flex justify-content-center">Danh sách dịch vụ Villa</h1>
                    <div className="row mb-5">
                        {listVilla.map((item)=>(
                            <div className="col-md-4">
                                <div className="post-entry">
                                    <img src={item.image} alt="Image placeholder" className="img-fluid"/>
                                    <div className="body-text">
                                        <div className="category">Villa</div>
                                        <h3 className="mb-3"><a href="">{item.name}</a></h3>
                                        <p className="mb-4">Room size: {item.area} m2</p>
                                        <div className="d-flex">
                                            <div>
                                                <Link to={`/service/villa/update/${item.id}`} className="btn btn-info">Chỉnh sửa</Link>
                                            </div>
                                            <div className="ms-5">
                                                <button onClick={()=>setVilla(item)} type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">Xóa</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thông báo xóa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn muốn xóa không?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Không</button>
                            <button onClick={deleteVilla} type="button" className="btn btn-primary"
                                    data-bs-dismiss="modal">Có
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListServiceVilla;