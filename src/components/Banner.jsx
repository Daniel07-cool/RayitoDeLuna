import { Link } from "react-router-dom";
import bannerPerro from "../assets/img/Connie.jpeg";
import bannerGato from "../assets/img/gato.jpeg";

const Banner = () => {
    return (
        <div className="container mb-5">
            <div className="row ">
                
                <div className="col justify-content-around" style={{ backgroundImage:`url(${bannerPerro})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, marginRight:20, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Link to={"/category/perro"} className="text-decoration-none">
                        <span className="bg-info text-white text-uppercase px-3 py-2">Ver categoria</span>
                    </Link>
                </div>
                <div className="col" style={{ backgroundImage:`url(${bannerGato})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Link to={"/category/gato"} className="text-decoration-none">
                        <span className="bg-info text-white text-uppercase px-3 py-2">Ver categoria</span>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Banner;
