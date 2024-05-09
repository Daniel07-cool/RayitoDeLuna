import logoFacebook from "../assets/img/facebook.svg";
import logoWhatsapp from "../assets/img/whatsapp.svg";
import logoInstagram from "../assets/img/instagram.svg";
import medioDePagos from "../assets/img/mediosdepago1.jpg";

let colorFondo = {
    backgroundColor: "#fffbfb"
}

const Footer = () => {

    return (
        <div className="p-4 mt-2 mb-2 " style={colorFondo}>
            <div className="col text-center">
                <div className="row m-4">
                    <h2 >Nuestras redes</h2>
                </div>
                <div className="row">
                    <div className="col ">
                        <img src={logoFacebook} alt="Logo Facebook" width={24} className="m-2" />
                        <img src={logoWhatsapp} alt="Logo Whatsapp" width={24} className="m-2" />
                        <img src={logoInstagram} alt="Logo Instagram" width={24} className="m-2"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                    <img src={medioDePagos} alt="Medio de pago" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;