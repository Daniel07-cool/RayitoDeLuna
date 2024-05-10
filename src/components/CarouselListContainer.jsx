import { useEffect, useState } from "react";
import arrayNoticias from "./json/noticias.json"
import CarouselList from "./CarouselList";
import Banner from "./Banner";

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
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
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