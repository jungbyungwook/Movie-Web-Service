import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import styled from "styled-components";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();

    const getMovies = async () => {
        const json = await // await fetch(
        //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year`
        // )
        (
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

    // console.log(movies);
    return (
        <HomeWrapper>
            <Header />
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
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    padding-top: 80px;
`;

export default Home;
