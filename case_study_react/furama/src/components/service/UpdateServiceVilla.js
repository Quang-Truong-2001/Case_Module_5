import {ErrorMessage, Field, Form, Formik} from "formik";
import * as villaService from "../../services/VillaService"
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import {useEffect, useState} from "react";

function UpdateServiceVilla(){
    const {id}=useParams();
    const [villa, setVilla]=useState();
    const navigate=useNavigate();
    const validateObject={
        name: Yup.string().required("Không được để trống"),
        area: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        money: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        people: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        style: Yup.string().required("Không được để trống"),
        standard: Yup.string().required("Không được để trống"),
        different: Yup.string().required("Không được để trống"),
        poolArea: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        floor: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        image: Yup.string().required("Không được để trống")
    }
    const updateVilla=async (values)=>{
        let isSuccess=await villaService.updateVillaService(id,values);
        if(isSuccess){
            toast.success("Cập nhật thành công");
            navigate("/service/villa");
        }
    }
    const getVilla=async ()=>{
        let res=await villaService.getVillaService(id);
        setVilla(res);
    }
    useEffect(()=>{
        getVilla();
    },[])
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Cập nhật dịch vụ Villa</h3>
                    </div>
                    <div className="form-language">
                        <Formik initialValues={{...villa}}
                                onSubmit={(values)=>{
                                    updateVilla(values)
                                }}
                                validationSchema={Yup.object(validateObject)}
                        >
                            <Form>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label"><span>Tên dịch vụ</span><span
                                            className="text-danger"> (*)</span></label>
                                        <Field type="text" className="form-control" id="name" name="name"/>
                                        <ErrorMessage name="name" className="text-danger" component="span"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="area" className="form-label"><span>Diện tích sử dụng</span><span
                                            className="text-danger"> (*)</span></label>
                                        <Field type="text" className="form-control" id="area" name="area"/>
                                        <ErrorMessage name="area" className="text-danger" component="span"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="money" className="form-label"><span>Chi phí thuê</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="money" name="money"/>
                                    <ErrorMessage name="money" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="people" className="form-label"><span>Số lượng người tối đa</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="people" name="people"/>
                                    <ErrorMessage name="people" className="text-danger" component="span"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="style" className="form-label"><span>Kiểu thuê</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field name="style" component="select" className="custom-select">
                                        <option>Chọn kiểu thuê</option>
                                        <option value="1">Năm</option>
                                        <option value="2">Tháng</option>
                                        <option value="3">Ngày</option>
                                        <option value="4">Giờ</option>
                                    </Field>
                                    <ErrorMessage name="style" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="standard" className="form-label"><span>Tiêu chuẩn phòng</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="standard" name="standard"/>
                                    <ErrorMessage name="standard" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="different" className="form-label"><span>Tiện nghi khác</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="different" name="different"/>
                                    <ErrorMessage name="different" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="poolArea" className="form-label"><span>Diện tích hồ bơi</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="poolArea" name="poolArea"/>
                                    <ErrorMessage name="poolArea" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="floor" className="form-label"><span>Số tầng</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="floor" name="floor"/>
                                    <ErrorMessage name="floor" className="text-danger" component="span"/>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="image" className="form-label"><span>Hình ảnh</span><span
                                            className="text-danger"> (*)</span></label>
                                        <Field type="text" className="form-control" id="image" name="image"/>
                                        <ErrorMessage name="image" className="text-danger" component="span"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Thêm mới</button>
                            </Form>
                        </Formik>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default UpdateServiceVilla;