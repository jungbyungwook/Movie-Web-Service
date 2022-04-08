import { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import { romanceTranslate } from "../atom";
import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useResetRecoilState,
} from "recoil";

export default function MovieContainer() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();
    const setTranslate = useSetRecoilState(romanceTranslate);
    const [translateVw, setTranslateVw] = useState(0);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=9?&genre=romance&sort_by=year`
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const leftClick = (event) => {
        // event.target.style.transform = "translate(-100vw)";
        // setLeftBtn(true);
        if (translateVw < 0) setTranslateVw((current) => current + 100);
    };
    const rightClick = (event) => {
        // setRightBtn(true);
        if (translateVw > -400) setTranslateVw((current) => current - 100);
    };
    useEffect(() => {
        setTranslate(`translate(${translateVw}vw)`);
        // console.log(translateVw);
    }, [translateVw]);

    return (
        <MovieContainerWrapper>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
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
                </div>
            )}
            <button onClick={leftClick}>left</button>
            <button onClick={rightClick}>Right</button>
        </MovieContainerWrapper>
    );
}

const MovieContainerWrapper = styled.div`
    overflow: hidden;
    padding-top: 80px;
    /* transform: translate(-100vw); */
`;
