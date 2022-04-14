import { useEffect, useState, useRef } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainMovieContainer from "../containers/MainMovieContainer";
import CarouselContainer from "../containers/CarouselContainer";

import styled from "styled-components";

function Home() {
    const romanceRef = useRef(null);
    const actionRef = useRef(null);
    const thrillerRef = useRef(null);
    const comedyRef = useRef(null);

    const scroll = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const handleRomanceClick = async () => {
        scroll(romanceRef);
    };
    const handleActionClick = async () => {
        scroll(actionRef);
    };
    const handleThrillerClick = async () => {
        scroll(thrillerRef);
    };
    const handleComedyClick = async () => {
        scroll(comedyRef);
    };

    return (
        <HomeWrapper>
            <Header
                romanceClick={handleRomanceClick}
                actionClick={handleActionClick}
                comedyClick={handleComedyClick}
                thrillerClick={handleThrillerClick}
            />
            <MainMovieContainer />
            <CarouselContainer
                genre="romance"
                title="Romance"
                buttonRef={romanceRef}
            />
            <CarouselContainer
                genre="action"
                title="action"
                buttonRef={actionRef}
            />
            <CarouselContainer
                genre="thriller"
                title="thriller"
                buttonRef={thrillerRef}
            />
            <CarouselContainer
                genre="comedy"
                title="comedy"
                buttonRef={comedyRef}
            />
            <Footer />
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    /* scroll-margin-top: 100px; */
`;

export default Home;
