import { Link } from "react-router-dom";

let colorFondo = {
    backgroundColor: "#fffafa"
}


const Carousel = ({noticia}) => {

    let tamCard = {

    }

    return (
        <div className="carousel-item active ">
                <img src={noticia.img} className="card-img-top img-fluid" style={tamCard} alt="Perros y Gatos castración" />
                <div className="carousel-caption d-none d-md-block text-dark" style={colorFondo}>
                    <h5>{noticia.titulo}</h5>
                    <p >{noticia.descripcion}</p>
                    <Link to={noticia.link} className="btn btn-primary">Más información</Link>
                </div>
        </div>
    )
}

export default Carousel;