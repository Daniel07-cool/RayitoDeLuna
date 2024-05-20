import { Link } from "react-router-dom";
import cart from "../assets/img/cart-check-fill.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const { countProductos } = useContext(CartContext);



    if (countProductos() > 0) {
        return (
            <Link to={"/cart"} className="btn  position-relative">
                <img src={cart} alt="Carrito" width={30} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {countProductos()}
                </span>
            </Link>
        )
    }


}

export default CartWidget;