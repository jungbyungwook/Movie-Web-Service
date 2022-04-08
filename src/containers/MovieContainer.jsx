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

export default function MovieContainer({ title }) {
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
        if (translateVw < 0) setTranslateVw((current) => current + 100);
    };
    const rightClick = (event) => {
        if (translateVw > -400) setTranslateVw((current) => current - 100);
    };

    useEffect(() => {
        setTranslate(`translate(${translateVw}vw)`);
        // console.log(translateVw);
    }, [translateVw]);

    return (
        <MovieContainerWrapper>
            <h1>{title}</h1>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Movies>
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
                </Movies>
            )}
            <LeftBtn onClick={leftClick}>
                <img
                    src={process.env.PUBLIC_URL + "/img/leftArrow.png"}
                    alt="leftArrow"
                />
            </LeftBtn>
            <RightBtn onClick={rightClick}>
                <img
                    src={process.env.PUBLIC_URL + "/img/rightArrow.png"}
                    alt="rightArrow"
                />
            </RightBtn>
        </MovieContainerWrapper>
    );
}

const MovieContainerWrapper = styled.div`
    margin-top: 2px;
    overflow: hidden;
    color: #ffffff;
    /* padding-top: 80px; */
    /* transform: translate(-100vw); */

    button {
        background-color: transparent;
        border: none;
        height: 40px;
        width: 20px;
        /* position: absolute; */

        img {
            background-color: transparent;
            height: 40px;
            width: 20px;
        }
    }
`;

const Movies = styled.div``;

const LeftBtn = styled.button`
    left: 0px;
    /* bottom: 65px; */
`;
const RightBtn = styled.button`
    right: 0;
    /* bottom: 65px; */
`;
