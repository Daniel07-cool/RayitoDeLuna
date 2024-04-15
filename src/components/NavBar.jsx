import logo from "../assets/img/portada.jpeg"
import CartWidget from "./CartWidget"

const NavBar = () => {

    let menu = {
        fontWeight: "bold",
        color: "#fff"
    }

    let img = {
        width: "200px"
    }





    return (
        <div className="my-3">
            <div className="row">
                <div className="col"></div>
                <div className="col text-center">
                <a class="navbar-brand" href="#"><img src={logo} alt="logo" class="img-fluid" style={img}/></a>
                </div>
                
                <div className="col text-end mx-3">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm bg-secondary">
                    <div className="container-fluid">
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ms-auto d-flex justify-content-around align-items-center w-100" >
                                <li className="nav-item">
                                    <a className="nav-link  text-uppercase " style={menu} href="#" >Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#" style={menu}>Clinica</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase active text-info" href="#" style={menu}>Tienda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#" style={menu}>ONG's</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#" style={menu}>Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#" style={menu}>Acceder</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
        </div>

    )
}

export default NavBar