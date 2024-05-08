import { useEffect, useState } from "react";
import arrayNoticias from "./json/noticias.json"
import CarouselList from "./CarouselList";

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
        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            
                                <CarouselList noticias={noticias} />
           

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Próximo</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselListContainer;