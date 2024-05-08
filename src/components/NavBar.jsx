import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/portada.jpeg";
import CartWidget from "./CartWidget";
import user from "../assets/img/person-fill.svg";

const NavBar = () => {

    let menu = {
        fontSize: "20px"
    }

    let img = {
        width: "16rem"
    }





    return (
        <>
        <nav className="bg-info p-3"></nav>
        <div className="container-fluid">
            
                <nav className="navbar navbar-expand-sm  p-4">
                    <div className="container-fluid">
                        <div className="col">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to={"/"}><img src={logo} alt="logo" className="img-fluid" style={img} /></Link>
                        </div>
                        </div>
                        <div className="col"></div>
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col collapse navbar-collapse  " id="collapsibleNavbar">
                            <ul className="nav navbar-nav ms-auto d-flex justify-content-end  align-items-end" >
                                <li className="nav-item">
                                    <NavLink className="nav-link  text-uppercase" style={menu} to={"/"} >Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to={"/category/perro"} style={menu}>Perros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to={"/category/gato"} style={menu}>Gatos</NavLink>
                                </li>
                                <li><NavLink to={"/"} style={menu} className="nav-link text-uppercase"> <img src={user} alt="Logo Usuario" width={30}  />Acceder</NavLink></li>
                                <li><CartWidget /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
        </>

    )
}

export default NavBar