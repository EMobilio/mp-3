import styled from 'styled-components';
import StyledMain from "../ui-components/StyledMain";
import StyledPageHeading from "../ui-components/StyledPageHeading";

// styled list for education experiences
const EducationList = styled.ul`
    list-style: none;
    height: 60%;
    min-height: 60vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media screen and (max-width: 900px) {
        height: 60vh;
    }
`;

// styled li for education items
const EducationItem = styled.li`
    border-left: 3px solid #00ADB5;
`;

// styled p for education text
const StyledP = styled.p`
    font-size: calc(2px + 1.25vw);
    margin: 0 1.5vw;
    
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 2.5vw);
    }
`;

export default function Education() {
    return (
        <StyledMain>
            <StyledPageHeading>Education</StyledPageHeading>

            {/* List of education */}
            <EducationList>
                {/* Masters (made this one up) */}
                <EducationItem>
                    <StyledP>
                        Boston University | Boston, MA <br/>
                        Master of Science in Computer Science <br/>
                        Degree expected May 2027
                    </StyledP>
                </EducationItem>

                {/*College */}
                <EducationItem>
                    <StyledP>
                        Boston University | Boston, MA <br/>
                        Bachelor of Arts in Computer Science <br/>
                        May 2025 <br/>
                        GPA: 4.0 <br/>
                        Dean's List (7 of 7 semesters)
                    </StyledP>
                </EducationItem>

                {/* High School */}
                <EducationItem>
                    <StyledP>
                        Rae Kushner Yeshiva High School | Livingston, NJ <br/>
                        High School Diploma<br/>
                        June 2021 <br/>
                        GPA: 4.46 (weighted)
                    </StyledP>
                </EducationItem>
            </EducationList>
        </StyledMain>
    );
}