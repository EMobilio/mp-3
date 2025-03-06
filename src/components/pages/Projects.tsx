import styled from "styled-components";
import StyledMain from "../ui-components/StyledMain";
import StyledPageHeading from "../ui-components/StyledPageHeading";
import Calculator from "../Calculator";

// styled list for projects
const ProjectList = styled.ul`
    list-style: none;
    width: 90%;
    margin: 0 auto;
`;

// styled li for project item
const ProjectItem = styled.li`
    margin: 5vh auto;
`;

// styled anchor for links to projects
const ProjectLink = styled.a`
    font-size: calc(2px + 1.25vw);
    text-decoration: underline;
    color: #00ADB5;
    
    &:hover {
        color: #107273;
    }
    
    @media screen and (max-width: 900px) {
        font-size: calc(4px + 2.25vw);
    }
`;

// styled li for project bullet points
const ProjectBullet = styled.li`
    margin: 1.5vh auto;
    border-left: 3px solid #00ADB5;
`;

// styled p for bullet point text
const BulletText = styled.p`
    font-size: calc(2px + 1vw);
    margin: 3vh 1.5vw;
    
    @media screen and (max-width: 900px) {
        font-size: calc(4px + 2vw);
    }
`;

export default function Projects() {
    return (
        <StyledMain>
            <StyledPageHeading>Projects</StyledPageHeading>

            {/* List of projects */}
            <ProjectList>
                {/* Project # 1 */}
                <ProjectItem>
                    <ProjectLink href="https://marketdig.app" target="_blank" >MarketDig</ProjectLink>
                    <ProjectList>
                        <ProjectBullet>
                            <BulletText>
                                Specialized in development of the frontend of a market research tool
                                for aspiring small business owners using React and Redux, delivering a
                                responsive and user-friendly interface
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Designed and implemented web scraping scripts using Playwright to efficiently
                                gather data for backend integration
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Played a key role in the design and development of the application architecture,
                                optimizing the overall structure and performance, while also assisting in debugging
                                and troubleshooting backend code to maintain system stability and reliability
                            </BulletText>
                        </ProjectBullet>
                    </ProjectList>
                </ProjectItem>

                {/* Project # 2 */}
                <ProjectItem>
                    <ProjectLink href="https://limitless-sierra-80433-a3b989f436f9.herokuapp.com/project/"
                       target="_blank">
                        FlickPick
                    </ProjectLink>
                    <ProjectList>
                        <ProjectBullet>
                            <BulletText>
                                Designed and developed a full-stack web application using Django, enabling users
                                to browse, review, and receive recommendations for movies and TV shows stored in
                                a SQLite database with thousands of records
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Designed and implemented personalized recommendation systems using user
                                preferences and social features like friend-based suggestions
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Created a trending page with interactive line charts using Pandas and
                                Plotly to visualize weekly movie/TV trends
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Delivered a robust platform that enhanced user engagement and discoverability
                                through features like ratings, reviews, watchlists, and personalized
                                recommendations
                            </BulletText>
                        </ProjectBullet>
                    </ProjectList>
                </ProjectItem>

                {/* Project # 3 */}
                <ProjectItem>
                    <ProjectLink href="https://github.com/EMobilio/tetris-agent"
                       target="_blank">
                        Tetris Agent
                    </ProjectLink>
                    <ProjectList>
                        <ProjectBullet>
                            <BulletText>
                                Designed and implemented a Temporal Difference Learning Q-Agent in Java using
                                neural network and linear algebra libraries (developed for a course) to play Tetris
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Engineered features, designed the neural network structure, and developed a
                                custom reward function to guide the agent’s learning
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Trained the agent on hundreds of thousands of games, improving performance
                                from consistently scoring 0 points to clearing dozens of lines per game
                            </BulletText>
                        </ProjectBullet>
                        <ProjectBullet>
                            <BulletText>
                                Leveraged reinforcement learning principles to transform random gameplay into
                                more strategic decision-making
                            </BulletText>
                        </ProjectBullet>
                    </ProjectList>
                </ProjectItem>
            </ProjectList>

            {/* Render calculator component */}
            <Calculator />
        </StyledMain>
    );
}