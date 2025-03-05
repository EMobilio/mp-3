import styled from "styled-components";
import StyledMain from "../StyledMain";
import StyledPageHeading from "../StyledPageHeading";

// styled list for experiences
const ExperienceList = styled.ul`
    list-style: none;
    width: 90%;
    margin: 0 auto;
`;

// styled li for experiences
const ExperienceItem = styled.li`
    margin: 5vh auto 8vh;
`;

// styled p for experience descriptions
const ExperienceHeading = styled.p`
    font-size: calc(2px + 1.25vw);
    margin: 1vh 1.5vw;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3px + 2.25vw);
    }
`;

// styled li for bullet points
const BulletItem = styled.li`
    margin: 1.5vh 0;
    border-left: 3px solid #00ADB5;
`;

// styled p for bullet point text
const BulletText = styled.p`
    font-size: calc(2px + 1vw);
    margin: 1vh 1.5vw;

    @media screen and (max-width: 900px) {
        font-size: calc(4px + 2vw);
    }
`;

export default function Experience() {
    return (
        <StyledMain>
            <StyledPageHeading>Experience</StyledPageHeading>

            {/* List of work experiences */}
            <ExperienceList>
                {/* Work experience #1 (Unfortunately, this one's made up) */}
                <ExperienceItem>
                    <ExperienceHeading><strong><em>Software Development Engineer Intern</em> | Amazon | New York, NY</strong></ExperienceHeading>
                    <ExperienceHeading>May 2024 - August 2024</ExperienceHeading>
                    <ExperienceList>
                        <BulletItem>
                            <BulletText>
                                Developed customer-facing UI components for an internal Amazon Web Services (AWS)
                                dashboard using React, TypeScript, and Tailwind CSS.
                            </BulletText>
                        </BulletItem>
                        <BulletItem>
                            <BulletText>
                                Improved page load performance by 20% by optimizing API calls and implementing
                                lazy loading for heavy UI assets.
                            </BulletText>
                        </BulletItem>
                        <BulletItem>
                            <BulletText>
                                Fixed 15+ UI/UX bugs, ensuring cross-browser compatibility and accessibility
                                compliance with WCAG 2.1 standards.
                            </BulletText>
                        </BulletItem>
                    </ExperienceList>
                </ExperienceItem>

                {/* Work experience #2 */}
                <ExperienceItem>
                    <ExperienceHeading><strong><em>Grader</em> | Department of Computer Science | Boston University</strong></ExperienceHeading>
                    <ExperienceHeading>January 2024 - May 2024</ExperienceHeading>
                    <ExperienceList>
                        <BulletItem>
                            <BulletText>
                                Graded 300 student solutions to long algorithm problems including pseudocode,
                                proofs of correctness, and proofs of runtime and space complexity for assignments
                                for the Analysis of Algorithms course
                            </BulletText>
                        </BulletItem>
                    </ExperienceList>
                </ExperienceItem>

                {/* Work experience #3 */}
                <ExperienceItem>
                    <ExperienceHeading><strong><em>Course Assistant</em> | Department of Computer Science | Boston University</strong></ExperienceHeading>
                    <ExperienceHeading>September 2024 - Present</ExperienceHeading>
                    <ExperienceList>
                        <BulletItem>
                            <BulletText>
                                Assist in leading 50-minute weekly discussion sections for the Probability in
                                Computing course, reinforcing key concepts and facilitating problem-solving
                                exercises
                            </BulletText>
                        </BulletItem>
                        <BulletItem>
                            <BulletText>
                                Hold weekly office hours to assist students with course material, clarify concepts,
                                and provide guidance on homework assignments
                            </BulletText>
                        </BulletItem>
                        <BulletItem>
                            <BulletText>
                                Grade weekly homework assignments, ensuring timely and constructive feedback to
                                support student learning and improvement
                            </BulletText>
                        </BulletItem>
                    </ExperienceList>
                </ExperienceItem>
            </ExperienceList>
        </StyledMain>
    );
}