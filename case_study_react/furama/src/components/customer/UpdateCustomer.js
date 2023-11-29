import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup"
import {useEffect, useState} from "react";
import * as customerService from "../../services/CustomerService"
import {toast} from "react-toastify";

function UpdateCustomer(){
    const {id}=useParams();
    const navigate=useNavigate();
    const [customer,setCustomer]=useState();
    const [listTypeCustomer,setListTypeCustomer]=useState([]);

    const getListTypeCustomer=async ()=>{
        let res=await customerService.getAllTypeCustomer();
        console.log(res)
        setListTypeCustomer(res);
    }
    const getCustomer=async ()=>{
        let value=await customerService.findCustomerById(id);
        let res={...value,typeCustomer: JSON.stringify(value.typeCustomer)}
        setCustomer(res);
    }
    const validateObject={
        name: Yup.string().required("Không được để trống"),
        birthDay: Yup.string().required("Không được để trống"),
        idCard: Yup.string().required("Không được để trống")
            .matches(/^[0-9]{11}$/,"Số CCCD không hợp lệ"),
        gender: Yup.string().required("Không được để trống"),
        phone: Yup.string().required("Không được để trống")
            .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,"Số điện thoại không hợp lệ"),
        email: Yup.string().required("Không được để trống")
            .matches(/^\S+@\S+\.\S+$/, "Email không hợp lệ"),
        address: Yup.string().required("Không được để trống")
    }
    const updateCustomer=async (values)=>{
        let res={...values,typeCustomer: JSON.parse(values.typeCustomer)}
        let isSuccess=await customerService.updateCustomer(id,res);
        if(isSuccess){
            toast.success("Thêm khách hàng thành công")
            navigate("/customer")
        }
    }

    useEffect(()=>{
        getListTypeCustomer();
    },[])
    useEffect(()=>{
        getCustomer();
    },[])

    if(!listTypeCustomer) return null
    if(!customer) return null
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">

                    <div className="d-flex justify-content-center">
                        <div className="bg-white object-fit-contain px-5 py-5 rounded">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <h3 className="text-dark">Cập nhật thông tin khách hàng</h3>
                                </div>
                                <div className="form-language">
                                    <Formik initialValues={{...customer}}
                                            onSubmit={(values)=>{
                                                updateCustomer(values);
                                            }}
                                            validationSchema={Yup.object(validateObject)}
                                    >

                                        <Form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="px-2 py-2">
                                                        <div>
                                                            <div className="form-group">
                                                                <label htmlFor="area"
                                                                       className="form-label"><span>Họ tên</span><span
                                                                    className="text-danger"> (*)</span></label>
                                                                <Field type="text" className="form-control" id="area" name="name"/>
                                                                <ErrorMessage name="name" className="text-danger" component="span"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="money"
                                                                   className="form-label"><span>Ngày sinh</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field type="date" className="form-control" id="money" name="birthDay"/>
                                                            <ErrorMessage name="birthDay" className="text-danger" component="span"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="idCard"
                                                                   className="form-label"><span>Số CCCD</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field type="text" className="form-control" id="idCard" name="idCard"/>
                                                            <ErrorMessage name="idCard" className="text-danger" component="span"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="form-label"><span>Giới tính</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <div className="form-check">
                                                                <Field className="form-check-input" type="radio"
                                                                       name="gender" id="Male" value="1"/>
                                                                <label className="form-check-label" htmlFor="Male">
                                                                    Nam
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Field className="form-check-input" type="radio"
                                                                       name="gender" id="Female" value="0"/>
                                                                <label className="form-check-label" htmlFor="Female">
                                                                    Nữ
                                                                </label>
                                                            </div>
                                                            <ErrorMessage name="gender" className="text-danger" component="span"/>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="px-2 py-2">
                                                        <div className="form-group">
                                                            <label htmlFor="abc"
                                                                   className="form-label"><span>Số điện thoại</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field type="text" className="form-control" id="abc" name="phone"/>
                                                            <ErrorMessage name="phone" className="text-danger" component="span"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="free"
                                                                   className="form-label"><span>Email</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field type="text" className="form-control" id="free" name="email"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="address"
                                                                   className="form-label"><span>Địa chỉ</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field type="text" className="form-control" id="address" name="address"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="typeCustomer"
                                                                   className="form-label"><span>Loại khách hàng</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field as="select" name="typeCustomer" className="form-select" aria-label="Default select example">
                                                                {listTypeCustomer.map((item)=>(
                                                                    <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                                                                ))}
                                                            </Field>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center pt-5">
                                                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                                                    </div>
                                                </div>

                                            </div>


                                        </Form>

                                    </Formik>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UpdateCustomer;