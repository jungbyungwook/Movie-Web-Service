import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
    const onClickBtn = () => {};

    return (
        <FooterWrapper>
            <a href="https://github.com/jungbyungwook/Movie-Web-Service">
                <GithubBtn
                    src={process.env.PUBLIC_URL + "/img/github.svg"}
                    alt=""
                />
            </a>
            <Copyright>
                Copyright © 2022 All Rights Reserved by JMovie
            </Copyright>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center; */
    text-align: center;
    height: 160px;
    font-family: InterBold;
    color: white;
    font-size: 1.3rem;
    margin-top: 3rem;
`;

const GithubBtn = styled.button`
    background: ${({ src }) => `url(${src})`};
    background-size: cover;
    border: 0;
    outline: 0;

    width: 1rem;
    padding: 1rem;
    margin-bottom: 0.3rem;

    transition: all 0.1s linear;

    &:hover {
        /* padding: 1.2rem; */
        transform: scale(1.2);
    }
`;

const Copyright = styled.div``;
