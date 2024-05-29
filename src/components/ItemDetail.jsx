import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(item, cantidad);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                <img src={"../" + item.urlImagen} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col-md-5">
                    <h3 className="text-uppercase">{item.nombre}</h3>
                    <p className="fs-2 fw-bold"><b>${item.precio}</b></p>
                    <p>{item.descripcion}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;