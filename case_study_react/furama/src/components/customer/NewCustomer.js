import {Field, Form, Formik} from "formik";
import * as customerService from "../../services/CustomerService"
import {useNavigate} from "react-router-dom";

function NewCustomer(){
    const navigate=useNavigate();
    const initValue={
        name: "",
        birthDay: "",
        gender: "",
        phone: "",
        email: "",
        address: ""
    }
    const createCustomer=async (values)=>{
        let isSuccess=await customerService.addCustomer(values);
        if(isSuccess){
            navigate("/customer")
        }
    }
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">

                    <div className="d-flex justify-content-center">
                        <div className="bg-white object-fit-contain px-5 py-5 rounded">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <h3 className="text-dark">Nhập thông tin</h3>
                                </div>
                                <div className="form-language">
                                    <Formik initialValues={initValue}
                                            onSubmit={(values)=>{
                                                console.log(values)
                                                createCustomer(values);
                                            }}>

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
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="money"
                                                                   className="form-label"><span>Ngày sinh</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field type="date" className="form-control" id="money" name="birthDay"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="stardard"
                                                                   className="form-label"><span>Số CCCD</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <Field type="text" className="form-control" id="stardard" name="gender"/>
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
export default NewCustomer;