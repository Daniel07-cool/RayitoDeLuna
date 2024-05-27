import {createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    

    const [carrito, setCarrito] = useState([]);

    const addItem = (item, cantidad) => {
        if(estaEnCarrito(item.id)) {
            let producto = carrito.find(prod => prod.id === item.id);
            producto.cantidad += cantidad;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, {...item, cantidad:cantidad}]);
        }
    }

    const removeItem = (id) => {
        const nuevoItems = carrito.filter(item => item.id !== id);
        setCarrito([...nuevoItems]);
    }

    const clear = () => {
        setCarrito([]);
    }

    const estaEnCarrito = (id) => {
        return carrito.some(item => item.id === id);
    }

    const countProductos = () => {
        return carrito.reduce((acc, item) => acc += item.cantidad, 0);
    }

    const totalPrecioProductos = () => {
        return carrito.reduce((acc, item) => acc += item.cantidad * item.precio, 0);
    }


    return (
        <CartContext.Provider value={{carrito, removeItem, addItem, clear, countProductos, totalPrecioProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;