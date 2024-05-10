import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [mensajeError, setMensajeError] = useState("");

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            const productosFiltrados = id? arrayProductos.filter(item => item.categoria == id) : arrayProductos;

            setTimeout(() => {
                if (productosFiltrados.length > 0) {
                    resolve(productosFiltrados);
                    setMensajeError("");
                } else {
                    setItems([]);
                    reject("Lo siento! No se encontraron productos por esa Categoría!");
                }
                
            }, 2000) // 2 segundos
        });
        
        promesa.then(respuesta => {
            setItems(respuesta);
        })
        .catch(motivo => {
            setMensajeError(motivo);
        })
    }, [id])



    return (
        <div className="container">
            <div className="row my-5">
                    <ItemList items={items} />
            </div>
            <div className="row">
                <div className="col">
                    {mensajeError ? <div className="alert alert-info text-center" role="alert"><h4>{mensajeError}</h4></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;