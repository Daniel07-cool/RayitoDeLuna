import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error404 from './components/Error404'
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";




function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Banner />} />
          <Route path={"/category"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/cart"} element={< Cart />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
