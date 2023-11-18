function ListContract(){
    return(
        <>
            <section className="site-section bg-light">
                <div className="container">
                    <div>
                        <h3>Danh sách hợp đồng</h3>
                    </div>
                    <div className="card" style={{ fontFamily: '"Times New Roman"' }}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Mã hợp đồng</th>
                                <th scope="col">Tên khách hàng</th>
                                <th scope="col">Tên dịch vụ</th>
                                <th scope="col">Ngày làm hợp đồng</th>
                                <th scope="col">Ngày kết thúc hợp đồng</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ListContract;