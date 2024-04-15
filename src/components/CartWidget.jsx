import cart from "../assets/img/cart-check-fill.svg";

const CartWidget = () => {
    return (
        <>
            <button type="button" class="btn btn-info position-relative">
                <img src={cart} alt="Carrito" width={24} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                </span>
            </button>
        </>
    )
}

export default CartWidget