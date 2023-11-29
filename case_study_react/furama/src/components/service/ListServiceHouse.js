import image from "./images/big_image_1.jpg";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as houseService from "../../services/HouseService"
import axios from "axios";
function ListServiceHouse(){
    const [house, setHouse]=useState({});
    const [listHouse, setListHouse]=useState([]);
    const getAllServiceHouse=async ()=>{
        let res=await houseService.getAllHouseService();
        console.log(res)
        setListHouse(res);
    }
    const deleteHouse=async ()=>{
        await houseService.deleteHouseService(house.id);
        getAllServiceHouse();
    }
    useEffect(()=>{
        getAllServiceHouse();
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
                    <h1 style={{ fontFamily: '"-apple-system"' }} className="d-flex justify-content-center">Danh sách dịch vụ House</h1>
                    <div className="row mb-5 mt-5">
                        {listHouse.map((item)=>(
                            <div className="col-md-4">
                                <div className="post-entry">
                                    <img src={item.image} alt="Image placeholder" className="img-fluid"/>
                                    <div className="body-text">
                                        <div className="category">House</div>
                                        <h3 className="mb-3"><a href="">{item.name}</a></h3>
                                        <p className="mb-4">Room size: {item.area} m2</p>
                                        <div className="d-flex">
                                            <div>
                                                <Link to={`/service/house/update/${item.id}`} className="btn btn-info">Chỉnh sửa</Link>
                                            </div>
                                            <div className="ms-5">
                                                <button onClick={()=>setHouse(item)} type="button" className="btn btn-danger" data-bs-toggle="modal"
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
                            <button onClick={deleteHouse} type="button" className="btn btn-primary"
                                    data-bs-dismiss="modal">Có
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListServiceHouse;