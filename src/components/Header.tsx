import styled from 'styled-components';

// styled header component
const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1.5vh 1.5vw;
    background-color: #393E46;
    color: #EEEEEE;

    @media screen and (max-width: 900px) {  
        align-items: center;
    }
`;

const StyledH1 = styled.h1`
    margin-bottom: 1vh;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledH1>Eytan Mobilio</StyledH1>
            <p>Online Resume</p>
        </StyledHeader>
    );
}