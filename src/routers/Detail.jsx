import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [movie, setMovie] = useState("");
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        // console.log(movie);
        setMovie(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    });

    return (
        <div>
            <h1>
                {movie.year} {movie.title}
            </h1>
            <img src={movie.medium_cover_image}></img>
            <p>{movie.description_full}</p>
        </div>
    );
}
export default Detail;
