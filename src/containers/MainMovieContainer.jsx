import styled from "styled-components";

export default function MainMovieContainer() {
    return (
        <MainMovieWrapper>
            <img src="https://img.yts.mx/assets/images/movies/redeeming_love_2022/large-cover.jpg"></img>
        </MainMovieWrapper>
    );
}

const MainMovieWrapper = styled.div`
    /* background-color: #000; */
    background-color: black;
    padding-top: 80px;
    height: 800px;
    overflow: hidden;

    img {
        display: block;
        margin: -20px auto;
    }
`;
