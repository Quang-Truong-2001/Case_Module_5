import {ErrorMessage, Field, Form, Formik} from "formik";
import * as roomService from "../../services/RoomService"
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup"

function NewServiceRoom(){
    const navigate=useNavigate();
    const initvalue={
        name: "",
        area: "",
        money: "",
        people: "",
        style: "",
        free: ""
    }
    const validateObject={
        name: Yup.string().required("Không được để trống"),
        area: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        money: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        people: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ"),
        style: Yup.string().required("Không được để trống"),
        free: Yup.string().required("Không được để trống")
            .matches(/^[0-9]*$/,"Không hợp lệ")
    }
    const addServiceRoom=async (values)=>{
        let isSuccess=await roomService.addRoomService(values);
        if(isSuccess){
            toast.success("Thêm thành công");
            navigate("/")
        }
    }

    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Thêm mới dịch vụ Room</h3>
                    </div>
                    <div className="form-language">
                        <Formik initialValues={initvalue}
                                onSubmit={(values)=>{
                                    addServiceRoom(values)
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
                                    <label htmlFor="free" className="form-label"><span>Dịch vụ miễn phí đi kèm</span><span
                                        className="text-danger"> (*)</span></label>
                                    <Field type="text" className="form-control" id="free" name="free"/>
                                    <ErrorMessage name="free" className="text-danger" component="span"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Thêm mới</button>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </section>
        </>
    )
}
export default NewServiceRoom;