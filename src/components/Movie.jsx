import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
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
        <MovieWrapper>
            <img src={coverImg} alt={title}></img>
        </MovieWrapper>
    );
}

const MovieWrapper = styled.div`
    display: inline;
`;

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
