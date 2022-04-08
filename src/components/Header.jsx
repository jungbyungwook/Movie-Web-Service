import styled from "styled-components";
import Title from "./Title";

export default function Header() {
    return (
        <HeaderWrapper>
            <Title />
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 65px;
    font-size: 30px;
    color: #ffffff;
    background-color: #000;
    margin-bottom: 10px;
    padding: 10px;
`;
