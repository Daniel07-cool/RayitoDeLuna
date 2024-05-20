import { useEffect, useState } from "react";
import arrayNoticias from "./json/noticias.json"
import CarouselList from "./CarouselList";
import Banner from "./Banner";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import arrayProductos from "../components/json/productos.json";

const CarouselListContainer = () => {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayNoticias);
            }, 2000) // 2 segundos
        });

        promesa.then(respuesta => {
            setNoticias(respuesta);
        })
    })

     
         

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <CarouselList noticias={noticias} />
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    )

}

export default CarouselListContainer;