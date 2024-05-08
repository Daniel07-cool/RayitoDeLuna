import cart from "../assets/img/cart-check-fill.svg";

const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn  position-relative">
                <img src={cart} alt="Carrito" width={30} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                </span>
            </button>
        </>
    )
}

export default CartWidget