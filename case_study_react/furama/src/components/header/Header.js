
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
                                    <a className="nav-link" href="">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="dropdown04"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Rooms</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                                        <a className="dropdown-item" href="">Room Videos</a>
                                        <a className="dropdown-item" href="">Presidential Room</a>
                                        <a className="dropdown-item" href="">Luxury Room</a>
                                        <a className="dropdown-item" href="">Deluxe Room</a>
                                    </div>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Contact</a>
                                </li>

                                <li className="nav-item cta">
                                    <a className="nav-link" href=""><span>Book Now</span></a>
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