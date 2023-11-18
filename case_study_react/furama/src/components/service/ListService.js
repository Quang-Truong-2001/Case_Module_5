import image from "./images/big_image_1.jpg";
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
                                <a href="blog-single.html"><img src="images/img_1.jpg" alt="Image placeholder"
                                                                className="img-fluid"/></a>
                                <div className="body-text">
                                    <div className="category">Rooms</div>
                                    <h3 className="mb-3"><a href="blog-single.html">OCEAN SUITE</a></h3>
                                    <p className="mb-4">Room size: 85.8 m2</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Chi tiết</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="post-entry">
                                <a href="blog-single.html"><img src="images/img_2.jpg" alt="Image placeholder"
                                                                className="img-fluid"/></a>
                                <div className="body-text">
                                    <div className="category">News</div>
                                    <h3 className="mb-3"><a href="blog-single.html">OCEAN STUDIO SUITE</a></h3>
                                    <p className="mb-4">Room size: 85.8 m2</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Chi tiết</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="post-entry">
                                <a href="blog-single.html"><img src="images/img_3.jpg" alt="Image placeholder"
                                                                className="img-fluid"/></a>
                                <div className="body-text">
                                    <div className="category">New Rooms</div>
                                    <h3 className="mb-3"><a href="blog-single.html">OCEAN DELUXE</a></h3>
                                    <p className="mb-4">Room size: 85.8 m2</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Chi tiết</a>
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