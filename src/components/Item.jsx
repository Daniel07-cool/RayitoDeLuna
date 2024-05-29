import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


let img = {
    width: "15.5rem",
    height: "15.5rem"
}

const Item = ({ item }) => {

    const {id} = useParams();
    return (



        <div className="col-md-3 text-center mt-2">
            <Link to={"/item/" + item.id}>
                <div className="card h-100 d-flex flex-column align-items-center">

                    <img src={id ? "../" +  item.urlImagen : item.urlImagen}  style={img} alt={item.nombre} />

                    <div className="card-body">
                        <h5 className="card-text text-uppercase">{item.nombre}</h5>
                        <p className="card-text"><b>${item.precio}</b></p>
                        <p className="card-text"><button className="btn bg-info text-white">Agregar al carrito</button></p>
                    </div>
                </div>
            </Link>
        </div>


    )
}

export default Item;