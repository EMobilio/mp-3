import styled from "styled-components";
import {Link} from "react-router-dom";

// styled footer component
const StyledFooter = styled.footer`
    text-align: center;
    padding: 2%;
    background-color: #393E46;
    color: #EEEEEE;
    font-size: calc(1px + 1.25vw);

    @media screen and (max-width: 900px) {
        font-size: calc(1px + 2.25vw);
    }
`;

const StyledLink = styled(Link)`
    color: #04f5ff;
    
    &:hover {
        color: #107273;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            {/* Copyright statement */}
            <p>All Rights Reserved by Eytan Mobilio: <StyledLink to="/credits">Credits</StyledLink> &copy;</p>
        </StyledFooter>
    );
}