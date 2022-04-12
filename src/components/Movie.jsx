// import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movie({ id, img, size, style }) {
    const onClick = () => {
        console.log(1);
    };

    return (
        <MovieWrapper
            onClick={onClick}
            id={id}
            img={img}
            size={size}
            style={style}
        />
    );
}

const MovieWrapper = styled.div`
    color: white;
    font-size: 2rem;
    text-transform: capitalize;

    width: ${({ size }) => `${size}rem`};
    height: ${({ size }) => `${size + 8}rem`};
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;

    display: flex;

    align-items: center;
    justify-content: center;
`;

// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     coverImg: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Movie;
