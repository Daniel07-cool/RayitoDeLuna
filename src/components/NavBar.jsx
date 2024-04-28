import { Link, NavLink } from "react-router-dom"
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
        <div className="my-3 container-fluid">
            <div className="row">
                <div className="col"></div>
                <div className="col text-center">
                <Link className="navbar-brand" to={"/"}><img src={logo} alt="logo" className="img-fluid" style={img}/></Link>
                </div>
                
                <div className="col text-end mx-3">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm bg-secondary">
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ms-auto d-flex justify-content-around align-items-center w-100" >
                                <li className="nav-item">
                                    <NavLink className="nav-link  text-uppercase" style={menu} to={"/"} >Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to={"/category/perro"} style={menu}>Perros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to={"/category/gato"} style={menu}>Gatos</NavLink>
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