function Footer(){
    return(
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <h3>Phone Support</h3>
                            <p>24/7 Call us now.</p>
                            <p className="lead"><a href="tel://">84-236-3847 333</a></p>
                        </div>
                        <div className="col-md-4">
                            <h3>Connect With Us</h3>
                            <p>We are socialized. Follow us</p>
                            <p>
                                <a href="#" className="pl-0 p-3"><span className="fa fa-facebook"></span></a>
                                <a href="#" className="p-3"><span className="fa fa-twitter"></span></a>
                                <a href="#" className="p-3"><span className="fa fa-instagram"></span></a>
                                <a href="#" className="p-3"><span className="fa fa-vimeo"></span></a>
                                <a href="#" className="p-3"><span className="fa fa-youtube-play"></span></a>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Connect With Us</h3>
                            <p>103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City,
                                Vietnam
                                Email: reservation@furamavietnam.com * www.furamavietnam.com GDS Codes: Amadeus-GD
                                DADFUR, Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan- GD DADFU</p>
                            <form action="#" className="subscribe">
                                <div className="form-group">
                                    <button type="submit"><span className="ion-ios-arrow-thin-right"></span></button>
                                    <input type="email" className="form-control" placeholder="Enter email"/>
                                </div>

                            </form>
                        </div>
                    </div>
                    {/*<div className="row justify-content-center">*/}
                    {/*    <div className="col-md-7 text-center">*/}
                    {/*        &copy;*/}
                    {/*        <script>document.write(new Date().getFullYear());</script>*/}
                    {/*        Furama Resort Danang.*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </footer>
        </>
    )
}
export default Footer;