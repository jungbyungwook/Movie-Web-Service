import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import MovieContainer from "../containers/MovieContainer";
import MainMovieContainer from "../containers/MainMovieContainer";

import styled from "styled-components";
import { romanceTranslate } from "../atom";
import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useResetRecoilState,
} from "recoil";

function Home() {
    // const [loading, setLoading] = useState(true);
    // const [movies, setMovies] = useState();
    // const setLeftBtn = useSetRecoilState(leftBtn);

    // console.log(useRecoilValue(romanceTranslate));

    // const getMovies = async () => {
    //     const json = await // await fetch(
    //     //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year`
    //     // )
    //     (
    //         await fetch(
    //             `https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=9?&genre=romance&sort_by=year`
    //         )
    //     ).json();

    //     setMovies(json.data.movies);
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     getMovies();
    // }, []);

    // const leftClick = (event) => {
    //     // event.target.style.transform = "translate(-100vw)";
    //     setLeftBtn(true);
    // };
    // const rightClick = (event) => {
    //     // setRightBtn(true);
    // };
    // console.log(movies);

    // console.log(leftBtn);
    return (
        <HomeWrapper>
            <Header />
            <MainMovieContainer />
            <MovieContainer title="Romance" />
            {/* {loading ? (
                <h1>Loading...</h1>
            ) : (
                <MovieSlider>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </MovieSlider>
            )}
            <button onClick={leftClick}>left</button>
            <button onCLick={rightClick}>right</button> */}
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    /* overflow: hidden;
    /* padding-top: 80px; */
`;

// const MovieSlider = styled.div``;

export default Home;
