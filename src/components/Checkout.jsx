import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { carrito, totalPrecioProductos, countProductos } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");



    const generarOrden = () => {

        if (nombre == "" || email == "" || telephone == "") {
            return false;
        }
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = carrito.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const date = new Date();
        const fechaActual = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items,date:fechaActual, total:totalPrecioProductos()};
        
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });

        
    }

    if (countProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">

                        <h3>No se encontraron Productos en el Carrito</h3>
                        <Link to={"/"} className="btn text-white btn-primary my-5">Volver a la página principal</Link>

                    </div>
                </div>
            </div>
        )
    } 



    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.urlImagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>X{item.cantidad}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${totalPrecioProductos()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;