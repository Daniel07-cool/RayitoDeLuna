import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if(contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);
            console.log("Agregaste " + contador + " Productos al Carrito!")
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
                    <button type="button" className="btn btn-primary text-white text-uppercase" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;