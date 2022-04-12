import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import MainMovieContainer from "../containers/MainMovieContainer";
import CarouselContainer from "../containers/CarouselContainer";

import styled from "styled-components";

function Home() {
    return (
        <HomeWrapper>
            <Header />
            <MainMovieContainer />
            <CarouselContainer />
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div``;

export default Home;
