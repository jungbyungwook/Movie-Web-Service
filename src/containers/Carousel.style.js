import styled from "styled-components";
export const H1 = styled.h1`
    /* text-align: center; */
    font-family: InterBold;
    color: white;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 3.5rem;
`;

export const Relative = styled.div`
    position: relative;
`;

export const Flex = styled.div`
    display: flex;
`;

export const HorizontalCenter = styled(Flex)`
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    max-width: 80rem;
`;

export const Container = styled.div`
    height: stretch;
    width: 100%;
    background: transparent;
`;

export const Item = styled.div`
    color: white;
    font-size: 2rem;
    text-transform: capitalize;

    width: ${({ size }) => `${size}rem`};
    height: ${({ size }) => `${size + 8}rem`};
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;

    display: flex;

    align-items: center;
    justify-content: center;
`;

export const CarouserContainer = styled(Relative)`
    overflow: hidden;
`;

export const CarouselItem = styled.div`
    flex: 0 0 auto;

    margin-left: 1rem;
`;

export const CarouselButton = styled.button`
    position: absolute;

    cursor: pointer;

    top: 50%;
    z-index: 1;

    transition: transform 0.1s ease-in-out;

    /* background: transparent; */
    background: white;
    border-radius: 15px;
    border: none;
    padding: 0.5rem;
`;
export const LeftCarouselButton = styled(CarouselButton)`
    left: 0;
    transform: translate(-100%, -50%);

    ${CarouserContainer}:hover & {
        transform: translate(0%, -50%);
    }

    visibility: ${({ hasItemsOnLeft }) => (hasItemsOnLeft ? `all` : `hidden`)};
`;

export const RightCarouselButton = styled(CarouselButton)`
    right: 0;
    transform: translate(100%, -50%);

    ${CarouserContainer}:hover & {
        transform: translate(0%, -50%);
    }

    visibility: ${({ hasItemsOnRight }) =>
        hasItemsOnRight ? `all` : `hidden`};
`;

export const CarouserContainerInner = styled(Flex)`
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    // offset for children spacing
    margin-left: -1rem;

    &::-webkit-scrollbar {
        display: none;
    }

    ${CarouselItem} & {
        scroll-snap-align: center;
    }
`;

export const RightBtn = styled.img`
    height: 40px;
    width: 20px;
`;
export const LeftBtn = styled.img`
    height: 40px;
    width: 20px;
`;
