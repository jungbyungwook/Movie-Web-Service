import styled from "styled-components";

export default function Header({
    romanceClick,
    actionClick,
    thrillerClick,
    comedyClick,
}) {
    return (
        <HeaderWrapper>
            <TitleWrapper>JMovie</TitleWrapper>
            <button onClick={romanceClick}>Romance</button>
            <button onClick={actionClick}>Action</button>
            <button onClick={thrillerClick}>Thriller</button>
            <button onClick={comedyClick}>Comedy</button>
        </HeaderWrapper>
    );
}

const TitleWrapper = styled.h1`
    font-family: InterBold;
    display: inline;
    font-size: 35px;
    color: #ffffff;
    background-color: transparent;
`;

const HeaderWrapper = styled.div`
    z-index: 1;
    position: fixed;
    display: inline;
    top: 0;
    left: 0;
    right: 0;
    /* font-family: InterBold; */

    height: 65px;
    font-size: 30px;
    color: #ffffff;
    background-color: #000;
    margin-bottom: 10px;
    padding: 10px;

    button {
        font-family: InterBold;
        font-size: 20px;
        padding-left: 3rem;
        background-color: transparent;
        color: white;
        border: none;
        outline: none;

        transition: all 0.1s linear;

        &:hover {
            transform: scale(1.2);
        }
    }
`;
