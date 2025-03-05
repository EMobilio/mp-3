import styled from "styled-components";

const StyledPageHeading = styled.h2`
    text-align: center;
    font-size: calc(2px + 2vw);
    margin: 2% 0;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3px + 3vw);
    }
`;

export default StyledPageHeading;