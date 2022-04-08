import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { romanceTranslate } from "../atom";
import {
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
    useResetRecoilState,
} from "recoil";

function Movie({ id, coverImg, title, summary, genres, translate }) {
    console.log(useRecoilValue(romanceTranslate));
    // const setLeftBtn = useSetRecoilState(leftBtn);
    // console.log(useRecoilValue(leftBtn));
    // console.log(translate);
    return (
        // <MovieWrapper>
        //     <img src={coverImg} alt={title}></img>
        //     <h2>
        //         <Link to={`movie/${id}`}>{title}</Link>
        //     </h2>
        //     <p>
        //         {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        //     </p>
        //     <ul>
        //         {genres.map((g) => (
        //             <li key={g}>{g}</li>
        //         ))}
        //     </ul>
        // </MovieWrapper>
        <MovieWrapper
            translate={useRecoilValue(romanceTranslate)}
            // translate={translate}
            // style={
            //     useRecoilValue(leftBtn)
            //         ? ({ transform: "translate(-90vw)" }, setLeftBtn(false))
            //         : null
            // }
        >
            <Link to={`movie/${id}`}>
                <img src={coverImg} alt={title}></img>
            </Link>
        </MovieWrapper>
    );
}

const MovieWrapper = styled.div`
    width: 500vw;
    transform: ${(props) => props.translate};
    transition: all 1s;
    /* transform: translate(-100vw); */
    img {
        width: 10vw;
        float: left;
    }
    /* position: absolute; */
`;

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
