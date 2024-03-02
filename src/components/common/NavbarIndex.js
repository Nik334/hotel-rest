import {useNavigate} from "react-router-dom";

const NavbarIndex = ({component}) => {

    const navigate = useNavigate();

    return <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <div className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"/>Restoran</h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Service</a>
                    <a href="menu.html" className="nav-item nav-link">Menu</a>
                    <div className="nav-item dropdown">
                        <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="booking.html" className="dropdown-item">Booking</a>
                            <a href="team.html" className="dropdown-item">Our Team</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <a href="" className="btn btn-primary py-2 px-4" onClick={() => navigate("/online-order")}>Book A Table</a>
            </div>
        </nav>

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
            {component}
        </div>
    </div>
}
export default NavbarIndex;