import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    height: fit-content;
    min-height: 100vh;
    background-color: #222831;
    color: #EEEEEE;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        min-height: 82vh;
    }
`;

export default StyledMain;