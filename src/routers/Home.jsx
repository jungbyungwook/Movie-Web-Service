import { useEffect, useState, useRef } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import MainMovieContainer from "../containers/MainMovieContainer";
import CarouselContainer from "../containers/CarouselContainer";

import styled from "styled-components";

function Home() {
    const comedyRef = useRef(null);

    const scrollToComedy = () => {
        comedyRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleComedyClick = async () => {
        scrollToComedy();
    };
    return (
        <HomeWrapper>
            <Header comedyClick={handleComedyClick} />
            <MainMovieContainer />
            <CarouselContainer genre="romance" title="Romance" />
            <CarouselContainer genre="action" title="action" />
            <CarouselContainer genre="thriller" title="thriller" />
            <div ref={comedyRef}>
                <CarouselContainer
                    genre="comedy"
                    title="comedy"
                    comedyRef={useRef(null)}
                />
            </div>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div``;

export default Home;
