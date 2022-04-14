import styled from "styled-components";

export default function Footer() {
    return (
        <FooterWrapper>
            {/* <Email>email</Email> */}
            {/* <Github>github</Github> */}
            <Github src={process.env.PUBLIC_URL + "/img/github.svg"} alt="" />
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
    font-size: 1.5rem;
`;

const Github = styled.img`
    width: 4.5rem;
    padding: 1rem;
`;
const Copyright = styled.div``;
