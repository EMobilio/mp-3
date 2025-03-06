import styled from 'styled-components';
import StyledMain from "../ui-components/StyledMain";
import StyledPageHeading from "../ui-components/StyledPageHeading";

// styled container div for column layout
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 3vh 1vw;
`;

// styled div for a column
const Column = styled.div`
    width: 50%;
`;

const ColumnHeading = styled.h3`
    font-size: calc(2px + 1.5vw);
    text-align: center;
    margin-bottom: 3vh;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3px + 2.5vw);
    }
`;

// styled list for skills
const SkillsList = styled.ul`
    list-style: none;
`;

// styled li for skill item
const SkillItem = styled.li`
    font-size: calc(2px + 1.25vw);
    margin: 2vh 1.5vw;
    border-left: 3px solid #00ADB5;
    padding-left: 1.5vw;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3px + 2.25vw);
        margin-bottom: 3vh;
    }
`;

export default function Skills() {
    return (
        <StyledMain>
            <StyledPageHeading>Skills</StyledPageHeading>

            <ColumnContainer>
                <Column>
                    {/* List of technical skills */}
                    <ColumnHeading>Technical Skills</ColumnHeading>
                    <SkillsList>
                        <SkillItem>Python</SkillItem>
                        <SkillItem>Java</SkillItem>
                        <SkillItem>C</SkillItem>
                        <SkillItem>OCaml</SkillItem>
                        <SkillItem>Go</SkillItem>
                        <SkillItem>HTML/CSS/JS</SkillItem>
                        <SkillItem>SQL</SkillItem>
                        <SkillItem>React.JS</SkillItem>
                        <SkillItem>Django</SkillItem>
                        <SkillItem>Express.JS</SkillItem>
                        <SkillItem>MongoDB</SkillItem>
                        <SkillItem>Git/GitHub</SkillItem>
                    </SkillsList>
                </Column>

                <Column>
                    {/* List of soft skills */}
                    <ColumnHeading>Soft Skills</ColumnHeading>
                    <SkillsList>
                        <SkillItem>Problem solving</SkillItem>
                        <SkillItem>Quick and eager learner</SkillItem>
                        <SkillItem>Team player</SkillItem>
                        <SkillItem>Oral and written communication</SkillItem>
                    </SkillsList>
                </Column>
            </ColumnContainer>
        </StyledMain>
    );
}