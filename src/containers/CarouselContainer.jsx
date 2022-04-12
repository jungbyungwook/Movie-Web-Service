import { useRef, Children, useEffect, useState } from "react";
import usePosition from "../hooks/usePosition";
import axios from "axios";
import Movie from "../components/Movie";

import {
    H1,
    Relative,
    Flex,
    HorizontalCenter,
    Container,
    Item,
    CarouserContainer,
    CarouserContainerInner,
    CarouselItem,
    LeftCarouselButton,
    RightCarouselButton,
    RightBtn,
    LeftBtn,
} from "./Carousel.style";

const ArrowLeft = ({ size = 30, color = "white" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 12H6M12 5l-7 7 7 7" />
    </svg>
);

const ArrowRight = ({ size = 30, color = "white" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
    // <img src={process.env.PUBLIC_URL + "/img/rightArrow.png"}></img>
);

function Carousel({ children }) {
    const ref = useRef();

    const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
        usePosition(ref);

    return (
        <CarouserContainer role="region" aria-label="Colors carousel">
            <CarouserContainerInner ref={ref}>
                {Children.map(children, (child, index) => (
                    <CarouselItem key={index}>{child}</CarouselItem>
                ))}
            </CarouserContainerInner>
            <LeftCarouselButton
                hasItemsOnLeft={hasItemsOnLeft}
                onClick={scrollLeft}
                aria-label="Previous slide"
            >
                <ArrowLeft />
            </LeftCarouselButton>
            <RightCarouselButton
                hasItemsOnRight={hasItemsOnRight}
                onClick={scrollRight}
                aria-label="Next slide"
            >
                <ArrowRight />
            </RightCarouselButton>
        </CarouserContainer>
    );
}

export default function CarouselContainer({ title, genre }) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await axios.get(
            `https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=9?&genre=${genre}&sort_by=year`
        );
        setMovies(response.data.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <Container>
            <H1>{title}</H1>
            <HorizontalCenter>
                <Carousel>
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : (
                        movies.map((movie) => (
                            <Movie
                                size={13}
                                style={{ borderRadius: "20px", opacity: 0.9 }}
                                key={movie.id}
                                id={movie.id}
                                img={movie.medium_cover_image}
                            />
                        ))
                    )}
                </Carousel>
            </HorizontalCenter>
        </Container>
    );
}
