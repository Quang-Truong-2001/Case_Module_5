function NewContract(){
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Thêm mới hợp đồng</h3>
                    </div>
                    <div className="form-language">
                        <form>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="area" className="form-label"><span>Mã hợp đồng</span><span
                                        className="text-danger"> (*)</span></label>
                                    <input type="text" className="form-control" id="area"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="style" className="form-label"><span>Khách hàng làm hợp đồng</span><span
                                    className="text-danger"> (*)</span></label>
                                <select id="style" className="custom-select" aria-label="Default select example">
                                    <option value="0">Nguyễn Văn A</option>
                                    <option value="1">Nguyễn Văn B</option>
                                    <option value="2">Nguyễn Văn C</option>
                                    <option value="3">Nguyễn Văn D</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="styl" className="form-label"><span>Thông tin dịch vụ</span><span
                                    className="text-danger"> (*)</span></label>
                                <select id="styl" className="custom-select" aria-label="Default select example">
                                    <option value="0">Dịch vụ A</option>
                                    <option value="0">Dịch vụ B</option>
                                    <option value="0">Dịch vụ C</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="stanrdard" className="form-label"><span>Ngày làm hợp đồng</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="date" className="form-control" id="stanrdard"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="abc" className="form-label"><span>Ngày kết thúc hợp đồng</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="date" className="form-control" id="abc"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="free" className="form-label"><span>Tiền đặt cọc</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="free"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Thêm mới</button>
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default NewContract;