import Carousel from "./Carousel";

const CarouselList = ({noticias}) => {

    return (
        <>
        {noticias.map(news => (
                <Carousel key={news.id} noticia={news} />
            ))}
        </>
    )
}

export default CarouselList;