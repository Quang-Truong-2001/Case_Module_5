import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as contractService from "../../services/ContractService"
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function NewContract(){
    let navigate=useNavigate();
    const initValue={
        idContract: "",
        nameCustomer: "",
        nameService: "",
        startDay: "",
        endDay: "",
        money: ""
    }
    const validateObject={
        // idContract: Yup.string().required("Không được để trống"),
        // nameCustomer: Yup.string().required("Không được để trống"),
        // nameService: Yup.string().required("Không được để trống"),
        // startDay: Yup.date().required("Không được để trống"),
        // endDay: Yup.date().required("Không được để trống"),
        // money: Yup.number().required("Không được để trống").min(1,"Tổng tiền lớn hơn 0")
    }
    const addContract= async (value)=>{
        let isSucceed = await contractService.addContract(value);
        if (isSucceed){
            toast.success("Thêm mới thành công");
            navigate("/contract")
        }
    }
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Thêm mới hợp đồng</h3>
                    </div>
                    <div className="form-language">
                        <Formik initialValues={initValue}
                                onSubmit={(values)=>{
                                    addContract(values);
                                }}
                        validationSchema={Yup.object(validateObject)}>
                            <Form>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="idContract" className="form-label"><span>Mã hợp đồng</span><span
                                            className="text-danger"> (*)</span></label>
                                        <Field type="text" className="form-control" id="idContract" name="idContract"/>
                                        <ErrorMessage name="idContract" className="text-danger" component="span"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="nameCustomer" className="form-label"><span>Tên khách hàng</span><span
                                            className="text-danger"> (*)</span></label>
                                        <Field type="text" className="form-control" id="nameCustomer" name="nameCustomer"/>
                                        <ErrorMessage name="nameCustomer" className="text-danger" component="span"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="nameService" className="form-label"><span>Tên dịch vụ</span><span
                                            className="text-danger"> (*)</span></label>
                                        <Field type="text" className="form-control" id="nameService" name="nameService"/>
                                        <ErrorMessage name="nameService" className="text-danger" component="span"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDay" className="form-label"><span>Ngày làm hợp đồng</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="date" className="form-control" id="startDay" name="startDay"/>
                                    <ErrorMessage name="startDay" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endDay" className="form-label"><span>Ngày kết thúc hợp đồng</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="date" className="form-control" id="endDay" name="endDay"/>
                                    <ErrorMessage name="endDay" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="money" className="form-label"><span>Tiền đặt cọc</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="money" name="money"/>
                                    <ErrorMessage name="money" className="text-danger" component="span"/>
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
export default NewContract;