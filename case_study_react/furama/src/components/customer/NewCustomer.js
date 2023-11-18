function NewCustomer(){
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">

                    <div className="d-flex justify-content-center">
                        <div className="bg-white object-fit-contain px-5 py-5 rounded">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <h3 className="text-dark">Mời bạn nhập thông tin</h3>
                                </div>
                                <div className="form-language">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="px-2 py-2">
                                                    <div>
                                                        <div className="form-group">
                                                            <label htmlFor="area"
                                                                   className="form-label"><span>Họ tên</span><span
                                                                className="text-danger"> (*)</span></label>
                                                            <input type="text" className="form-control" id="area"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="money"
                                                               className="form-label"><span>Ngày sinh</span><span
                                                            className="text-danger"> (*)</span></label>
                                                        <input type="text" className="form-control" id="money"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="stardard"
                                                               className="form-label"><span>Số CCCD</span><span
                                                            className="text-danger"> (*)</span></label>
                                                        <input type="text" className="form-control" id="stardard"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label"><span>Giới tính</span><span
                                                            className="text-danger"> (*)</span></label>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                   name="flexRadioDefault" id="Male"/>
                                                                <label className="form-check-label" htmlFor="Male">
                                                                    Nam
                                                                </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                   name="flexRadioDefault" id="Female"/>
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
                                                        <input type="text" className="form-control" id="abc"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="free"
                                                               className="form-label"><span>Email</span><span
                                                            className="text-danger"> (*)</span></label>
                                                        <input type="text" className="form-control" id="free"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="address"
                                                               className="form-label"><span>Địa chỉ</span><span
                                                            className="text-danger"> (*)</span></label>
                                                        <input type="text" className="form-control" id="address"/>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center pt-5">
                                                    <button type="submit" className="btn btn-primary">Cập nhật</button>
                                                </div>
                                            </div>

                                        </div>


                                    </form>
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