import styled from 'styled-components';
import StyledMain from "../StyledMain";
import StyledPageHeading from "../StyledPageHeading";

// styled h3 for table title
const TableTitle = styled.h3`
    font-size: calc(2px + 1.5vw);
    text-align: center;
    margin: 4vh 0;
    
    @media screen and (max-width: 900px) {
        font-size: calc(3px + 2.5vw);
    }
`;

// styled table for references
const ReferenceTable = styled.table`
    margin: 2vh auto 12%;
    width: 60%;
    
    @media screen and (max-width: 900px) {
        margin-bottom: 18%;
        width: 80%;
    }
`;

// styled th for reference table header cells
const StyledTableHead = styled.th`
    padding: 1vh 1vw;
    border: 2px solid #00ADB5;
    font-size: calc(2px + 1vw);

    @media screen and (max-width: 900px) {
        font-size: calc(3px + 2.25vw);
    }
`;

// styled td for reference table cells
const StyledCell = styled.td`
    padding: 1vh 1vw;
    border: 2px solid #00ADB5;
    font-size: calc(2px + 1vw);

    @media screen and (max-width: 900px) {
        font-size: calc(3px + 2.25vw);
    }
`;

export default function References() {
    return (
        <StyledMain>
            <StyledPageHeading>References</StyledPageHeading>

            {/* Professional references table (more or less made up) */}
            <TableTitle>Professional</TableTitle>
            <ReferenceTable>
                <thead>
                    <tr>
                        <StyledTableHead>Name</StyledTableHead>
                        <StyledTableHead>Relation</StyledTableHead>
                        <StyledTableHead>Phone</StyledTableHead>
                    </tr>
                </thead>

                <tbody>
                    {/* Reference #1 */}
                    <tr>
                        <StyledCell>Mr. Boss</StyledCell>
                        <StyledCell>Boss</StyledCell>
                        <StyledCell>908-111-1111</StyledCell>
                    </tr>

                    {/* Reference #2 */}
                    <tr>
                        <StyledCell>Tiago Januario</StyledCell>
                        <StyledCell>Boss</StyledCell>
                        <StyledCell>908-111-1111</StyledCell>
                    </tr>

                    {/* Reference #3 */}
                    <tr>
                        <StyledCell>Dora Erdos</StyledCell>
                        <StyledCell>Boss</StyledCell>
                        <StyledCell>908-111-1111</StyledCell>
                    </tr>
                </tbody>
            </ReferenceTable>

            {/* Personal references table (more or less made up) */}
            <TableTitle>Personal</TableTitle>
            <ReferenceTable>
                <thead>
                    <tr>
                        <StyledTableHead>Name</StyledTableHead>
                        <StyledTableHead>Relation</StyledTableHead>
                        <StyledTableHead>Phone</StyledTableHead>
                    </tr>
                </thead>

                <tbody>
                    {/* Reference #1 */}
                    <tr>
                        <StyledCell>Dominick</StyledCell>
                        <StyledCell>Father</StyledCell>
                        <StyledCell>908-111-1111</StyledCell>
                    </tr>

                    {/* Reference #2 */}
                    <tr>
                        <StyledCell>Joan</StyledCell>
                        <StyledCell>Mother</StyledCell>
                        <StyledCell>908-111-1111</StyledCell>
                    </tr>

                    {/* Reference #3 */}
                    <tr>
                        <StyledCell>Jacob</StyledCell>
                        <StyledCell>Friend</StyledCell>
                        <StyledCell>908-111-1111</StyledCell>
                    </tr>
                </tbody>
            </ReferenceTable>
        </StyledMain>
    );
}