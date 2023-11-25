import image from "./images/big_image_1.jpg";
import {Link} from "react-router-dom";
function ListService(){
    return(
        <>
            <section className="site-hero site-hero-innerpage overlay" data-stellar-background-ratio="0.5"
                     style={{ backgroundImage:`url(${image})` }}>
                <div className="container">
                    <div className="row align-items-center site-hero-inner justify-content-center">
                        <div className="col-md-12 text-center">

                            <div className="mb-5 element-animate">
                                <h1>News &amp; Events</h1>
                                <p>Read our daily news and events of our luxury resort.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="site-section bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <div className="post-entry">
                                <a href="blog-single.html"><img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg" alt="Image placeholder"
                                                                className="img-fluid"/></a>
                                <div className="body-text">
                                    <div className="category">Danh sách dịch vụ room</div>
                                    <h3 className="mb-3"><a href="blog-single.html">ROOM</a></h3>
                                    <p><Link to={"/service/room"}className="btn btn-primary btn-outline-primary btn-sm">Chi tiết</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="post-entry">
                                <a href="blog-single.html"><img src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-370x239.jpg" alt="Image placeholder"
                                                                className="img-fluid"/></a>
                                <div className="body-text">
                                    <div className="category">Danh sách dịch vụ house</div>
                                    <h3 className="mb-3"><a href="blog-single.html">HOUSE</a></h3>
                                    <p><Link to={"/service/house"}className="btn btn-primary btn-outline-primary btn-sm">Chi tiết</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="post-entry">
                                <a href="blog-single.html"><img src="https://furama-resort-da-nang.hotelmix.vn/data/Photos/OriginalPhoto/12779/1277944/1277944198/Furama-Resort-Danang-Exterior.JPEG" alt="Image placeholder"
                                                                className="img-fluid"/></a>
                                <div className="body-text">
                                    <div className="category">Danh sách dịch vụ Villa</div>
                                    <h3 className="mb-3"><a href="blog-single.html">VILLA</a></h3>
                                    <p><Link to={"/service/villa"}className="btn btn-primary btn-outline-primary btn-sm">Chi tiết</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ListService;