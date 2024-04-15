const NavBar = () => {

    let menu = {
        fontWeight: "bold",
    }

    let logo = {
        width: "200px"
    }



    return (
        <div className="container-fluid my-2">
            <div className="row">
                    <nav className="navbar navbar-expand-sm">
                        <div className="container-fluid mx-5">
                            <a class="navbar-brand" href="#"><img src="public/portada.jpeg" alt="portada" class="img-fluid" style={logo} /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav ms-auto" >
                                    <li className="nav-item">
                                        <a className="nav-link active text-uppercase" href="#" style={menu}>Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase" href="#" style={menu}>Clinica</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase" href="#" style={menu}>Tienda</a>
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
       
    )
}

export default NavBar