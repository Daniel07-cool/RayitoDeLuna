import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-3 text-center">
            <Link to={"/item/" + item.id}>
                <div className="card h-100 d-flex flex-column">
                    <img src={item.urlImagen} className="img-fluid" alt={item.nombre} />
                    <div className="card-body">
                        <h5 className="card-text text-uppercase">{item.nombre}</h5>
                        <p className="card-text"><b>${item.precio}</b></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;