import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/img/trash-fill.svg";

const Cart = () => {

    const { carrito, totalPrecioProductos,removeItem, countProductos,clear } = useContext(CartContext);

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
                    <table className="table">
                        <tbody>
                            <tr>
                            <td colSpan={6} className="text-end"><button className="btn btn-primary text-white rounded-0" onClick={clear}>Vaciar carrito</button></td>
                            </tr>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    
                                    <td><img src={item.urlImagen} alt={item.nombre} width={120} /></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.cantidad}</td>
                                    
                                    <td className="align-middle text-end"><img src={trash} alt="Eliminar Producto" width={32} onClick={() => {removeItem(item.id)}}/></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-center"><b>${totalPrecioProductos()}</b></td>
                                <td>&nbsp;</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn text-white btn-primary rounded-0">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;