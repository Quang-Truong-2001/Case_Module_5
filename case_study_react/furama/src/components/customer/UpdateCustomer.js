function UpdateCustomer(){
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3></h3>
                    </div>
                    <div className="form-language">
                        <form>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="area" className="form-label"><span>Họ tên</span><span
                                        className="text-danger"> (*)</span></label>
                                    <input type="text" className="form-control" id="area"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="money" className="form-label"><span>Ngày sinh</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="money"/>
                            </div>
                            <div className="form-group">
                                <label className="form-label"><span>Giới tính</span><span
                                    className="text-danger"> (*)</span></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="Male"/>
                                        <label className="form-check-label" htmlFor="Male">
                                            Nam
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           id="Female"/>
                                        <label className="form-check-label" htmlFor="Female">
                                            Nữ
                                        </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="stardard" className="form-label"><span>Số CCCD</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="stardard"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="abc" className="form-label"><span>Số điện thoại</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="abc"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="free" className="form-label"><span>Email</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="free"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address" className="form-label"><span>Địa chỉ</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="address"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nameService" className="form-label"><span>Loại khách hàng </span><span
                                    className="text-danger"> (*)</span></label>
                                <select id="nameService" className="custom-select" aria-label="Default select example">
                                    <option value="1">Member</option>
                                    <option value="2">Silver</option>
                                    <option value="3">Gold</option>
                                    <option value="4">Platinium</option>
                                    <option value="5">Diamond</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Cập nhật</button>
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default UpdateCustomer;