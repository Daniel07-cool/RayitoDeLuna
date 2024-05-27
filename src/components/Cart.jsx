import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/img/trash-fill.svg";

const Cart = () => {

    const { carrito, totalPrecioProductos, removeItem, countProductos, clear } = useContext(CartContext);

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
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th colSpan={2} scope="col" className="align-middle text-center">Producto</th>
                                <th scope="col" className="align-middle text-center">Precio</th>
                                <th scope="col" className="align-middle text-center">Cantidad</th>
                                <th scope="col" className="align-middle text-center">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            </tr>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle text-start"><img src={trash} alt="Eliminar Producto" width={32} onClick={() => { removeItem(item.id) }} /></td>
                                    <td><img src={"../../public/" + item.urlImagen} alt={item.nombre} width={120} /></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.cantidad}</td>
                                    <td className="align-middle text-center">${item.cantidad * item.precio}</td>


                                </tr>
                            ))}
                            <tr>
                            <td className="text-start"><button className="btn btn-primary text-white rounded-0" onClick={clear}>Vaciar carrito</button></td>
                            <td colSpan={2} className="text"><Link to={"/checkout"} className="btn text-white btn-primary rounded-0">Finalizar compra</Link></td>
                                <td  className="text-center"><b>Total</b></td>
                                <td>&nbsp;</td>
                                <td className="text-center"><b>${totalPrecioProductos()}</b></td>
                                
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
           
        </div>


    )
}

export default Cart;