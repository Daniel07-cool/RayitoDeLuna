import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const agregarCarrito = () => {
        if(contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div className="container my-2">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary text-white" onClick={decrementar}> - </button>
                        <button type="button" className="btn btn-primary text-white">{contador}</button>
                        <button type="button" className="btn btn-primary text-white" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col">
                    {visible ? <button type="button" className="btn btn-primary text-white text-uppercase rounded-0" onClick={agregarCarrito}>Agregar al carrito</button> : <Link to={"/cart"} type="button" className="btn btn-primary  text-white text-uppercase rounded-0" >Finalizar compra</Link>}
                    
                </div>
            </div>
        </div>
    )
}

export default ItemCount;