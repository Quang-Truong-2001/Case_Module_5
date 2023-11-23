import {Link, NavLink} from "react-router-dom";

function Header(){
    return(
        <>
            <header style={{ backgroundColor: "#0c5460", position: "fixed" }} role="banner">
                <nav className="navbar navbar-expand-md navbar-dark bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">Furama Resort</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                            <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                                <li className="nav-item">
                                    <NavLink to="/service" className="nav-link active">Trang chủ</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Khách hàng
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/customer/new" className="dropdown-item">Thêm khách hàng</Link></li>
                                        <li><Link to="/customer" className="dropdown-item">Danh sách khách hàng</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active"  role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Dịch vụ
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/service/new" className="dropdown-item">Thêm dịch vụ</Link></li>
                                        <li><Link to="/service" className="dropdown-item">Danh sách dịch vụ</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active"  role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Hợp đồng
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/contract/new" className="dropdown-item">Thêm hợp đồng</Link></li>
                                        <li><Link to="/contract" className="dropdown-item">Danh sách hợp đồng</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;