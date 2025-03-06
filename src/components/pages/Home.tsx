import styled from 'styled-components';
import {Link} from "react-router-dom";
import StyledMain from "../ui-components/StyledMain";
import StyledPageHeading from "../ui-components/StyledPageHeading";

// styled container div for two column layout
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 3vh 1vw;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

// styled container div for image
const ImageContainer = styled.div`
    width: 35%;
    margin: 0 3%;
    
    @media screen and (max-width: 900px) {
        width: 45%;
        margin-bottom: 10%;
    }
`;

const StyledImg = styled.img`
    max-width: 100%;
`;

// styled p for the about me text
const AboutText = styled.p`
    font-size: calc(2px + 1.5vw);
    width: 65%;
    margin: 0 3%;

    @media screen and (max-width: 900px) {
        font-size: calc(5px + 2vw);
    }
`;

// styled p for the subtext
const Subtext = styled.p`
    font-size: calc(2px + 1.5vw);
    margin: 3vh 3vw;
    
    @media screen and (max-width: 900px) {
        font-size: calc(5px + 2vw);
        width: 80%;
        margin: 5% auto;
        text-align: center;
    }
`;

// styled link component
const StyledLink = styled(Link)`
    color: #04f5ff;
    
    &:hover {
        color: #107273;
    }
`;

export default function Home() {
    return (
        <StyledMain>
            <StyledPageHeading>Home</StyledPageHeading>

            <ColumnContainer>
                <ImageContainer>
                    <StyledImg src={"/portrait.jpeg"} alt="Eytan Mobilio"/>
                </ImageContainer>

                <AboutText>
                    My name is Eytan Mobilio, and I am a senior studying Computer Science at Boston University.
                    I'm passionate about web development and have a growing interest in AI. I am eager to continue
                    gaining real-world experience, learning about AI and data science, and refining my programming
                    skills.
                </AboutText>
            </ColumnContainer>

            <Subtext>
                Explore to learn more about my <StyledLink to="/education">education</StyledLink>, {/* Preventing whitespace stripping */}
                <StyledLink to="/experience">experience</StyledLink>, {/* Preventing whitespace stripping */}
                <StyledLink to="/projects">projects</StyledLink>, {/* Preventing whitespace stripping */}
                and more all on this site!
            </Subtext>
        </StyledMain>
    );
}