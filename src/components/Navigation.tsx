import { Link } from "react-router-dom";
import styled from "styled-components";
import {useParams} from "react-router";
import {useEffect} from "react";

// styled nav element for nav bar
const StyledNav = styled.nav`
    width: 30%;
    padding: 2%;
    background-color: #27272c;

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 0;
    }
`;

// styled ul for nav links
const StyledNavList = styled.ul`
    list-style: none;
    font-size: calc(3px + 1.5vw);
    padding-left: 0;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: row;
        font-size: calc(3px + 2vw);
    }
`;

// styled li for links
const StyledListItem = styled.li`
    margin: 10% auto;
    width: 80%;
    padding: 1%;
    text-align: center;
    background-color: #00ADB5;
    border-radius: 20px;
    
    &:hover{
        background-color: #107273;
    }

    @media screen and (max-width: 900px) {
        border-radius: 0;
        margin: 0;
    }
`;

// style Link component
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #27272c;
    
    &:hover {
        color: #EEEEEE;
    }
`;

export default function Navigation() {
    const currentPath= useParams(); // get the current path from the params
    let lastValue= Object.values(currentPath).pop() || ""; // get the last value is the path
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1); // capitalize the name of the page
    // change the document title to match the page whenever the path changes
    useEffect(()=> {
        if (lastValue === "") {
            document.title = "Home | Eytan's Resume";
        } else {
            document.title = lastValue + " | Eytan's Resume";
        }
    },[lastValue]);

     return (
         <StyledNav>
             <StyledNavList>
                 <StyledListItem><StyledLink to="/" >Home</StyledLink></StyledListItem>
                 <StyledListItem><StyledLink to="/education">Education</StyledLink></StyledListItem>
                 <StyledListItem><StyledLink to="/experience">Experience</StyledLink></StyledListItem>
                 <StyledListItem><StyledLink to="/projects">Projects</StyledLink></StyledListItem>
                 <StyledListItem><StyledLink to="/skills">Skills</StyledLink></StyledListItem>
                 <StyledListItem><StyledLink to="/references">References</StyledLink></StyledListItem>
             </StyledNavList>
         </StyledNav>
     );
}