function NewService(){
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Thêm mới dịch vụ</h3>
                    </div>
                    <div className="form-language">
                        <form>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="nameService" className="form-label"><span>Tên dịch vụ </span><span
                                        className="text-danger"> (*)</span></label>
                                    <select id="nameService" className="custom-select"
                                            aria-label="Default select example">
                                        <option value="1">Villa</option>
                                        <option value="2">House</option>
                                        <option value="3">Room</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="area" className="form-label"><span>Diện tích sử dụng</span><span
                                        className="text-danger"> (*)</span></label>
                                    <input type="text" className="form-control" id="area"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="money" className="form-label"><span>Chi phí thuê</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="money"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="style" className="form-label"><span>Kiểu thuê</span><span
                                    className="text-danger"> (*)</span></label>
                                <select id="style" className="custom-select" aria-label="Default select example">
                                    <option value="1">Năm</option>
                                    <option value="2">Tháng</option>
                                    <option value="3">Ngày</option>
                                    <option value="4">Giờ</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="stardard" className="form-label"><span>Tiêu chuẩn phòng</span><span
                                    className="text-danger"> (*)</span></label>
                                <input type="text" className="form-control" id="stardard"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="abc" className="form-label">Tiện nghi khác</label>
                                <input type="text" className="form-control" id="abc"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="free" className="form-label">Dịch vụ miễn phí đi kèm</label>
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
export default NewService;