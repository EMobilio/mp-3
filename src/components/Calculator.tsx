import styled from "styled-components";
import useCalculator from "../hooks/useCalculator";

// styled container div for calculator
const CalculatorContainer = styled.div`
    background-color: #00ADB5;
    width: 80%;
    height: fit-content;
    margin: 3vh auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #222831;
    border: 3px solid goldenrod;
    font-family: 'Nimbus Mono PS', 'Courier New', monospace;
`;

const StyledHeading = styled.h3`
    font-size: calc(2px + 2vw);
    margin: 3% auto;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 3.25vw);
    }
`;

// styled container div for calculator inputs
const InputContainer = styled.div`
    width: 50%;
    height: 8vw;
    display: flex;
    justify-content: center;
    margin: 2% auto;
`;

// styled inputs for calculator
const StyledInput = styled.input`
    width: 8vw;
    height: 100%;
    padding: 1%;
    text-align: center;
    margin: auto;
    background-color: #27272c;
    border: 3px solid goldenrod;
    color: goldenrod;
    font-size: calc(2px + 1.75vw);
    font-family: 'Nimbus Mono PS', 'Courier New', monospace;
    
    @media screen and (max-width: 900px) {
        width: 45%;
        font-size: calc(1px + 3vw);
    }
`;

const HiddenLabel = styled.label`
    display: none;
`;


// styled container div for calculator buttons
const ButtonContainer = styled.div`
    width: 80%;
    height: 4vw;
    margin: 2% auto;
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 900px) {
        width: 16vw;
        height: fit-content;
        flex-wrap: wrap;
    }
`;

// styled buttons for calculator
const StyledButton = styled.button`
    width: 4vw;
    height: 100%;
    border-radius: 50%;
    min-width: fit-content;
    margin: 0 auto;
    background-color: #27272c;
    border: 3px solid goldenrod;
    color: goldenrod;
    font-size: calc(2px + 1.75vw);
    font-family: 'Nimbus Mono PS', 'Courier New', monospace;
    
    @media screen and (max-width: 900px) {
        width: 6vw;
        height: 6vw;
        margin: 0.5vw auto;
        padding: 5%;
        border-width: 2px;
        font-size: calc(1px + 3vw);
    }
`;

// styled button for calculator clear button
const ClearButton = styled.button`
    width: 8vw;
    height: 100%;
    background-color: darkred;
    color: gold;
    border-radius: 50%;
    min-width: fit-content;
    margin: 0 auto;
    border: 3px solid goldenrod;
    font-size: calc(2px + 1.75vw);
    font-family: 'Nimbus Mono PS', 'Courier New', monospace;

    @media screen and (max-width: 900px) {
        width: 10vw;
        margin: 0.5vw auto;
        padding: 5%;
        border-width: 2px;
        font-size: calc(1px + 3vw);
    }
`;

// styled container div for calculator output
const OutputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 3%;
    min-width: 30%;
    height: 8vw;
    margin: 3% auto;
    background-color: #27272c;
    border: 3px solid goldenrod;
    font-size: calc(2px + 1.75vw);
    font-family: 'Nimbus Mono PS', 'Courier New', monospace;
    
    @media screen and (max-width: 900px) {
        font-size: calc(1px + 3vw);
    }
`;

export default function Calculator() {
    const {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        output,
        calculate,
        clearCalc
    } = useCalculator();

    return (
        <CalculatorContainer>
            <StyledHeading>Super Calc 3000</StyledHeading>

            {/* Inputs for operands */}
            <InputContainer>
                <HiddenLabel htmlFor="first-number">First #:</HiddenLabel>
                <StyledInput
                    type="text"
                    id="first-number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                />
                <HiddenLabel htmlFor="second-number">Second #:</HiddenLabel>
                <StyledInput
                    type="text"
                    id="second-number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)}
                />
            </InputContainer>

            {/* Buttons for operations */}
            <ButtonContainer>
                <StyledButton onClick={() => calculate("add")}>+</StyledButton>
                <StyledButton onClick={() => calculate("subtract")}>-</StyledButton>
                <StyledButton onClick={() => calculate("multiply")}>*</StyledButton>
                <StyledButton onClick={() => calculate("divide")}>/</StyledButton>
                <StyledButton onClick={() => calculate("power")}>**</StyledButton>
                <ClearButton onClick={clearCalc}>Clear</ClearButton>
            </ButtonContainer>

            {/* Output */}
            <OutputContainer>
                {/* Change color of output depending on positive/negative */}
                <h4 id="output" style={{ color: (Number(output) < 0 ? 'red' : 'goldenrod') }}>{output}</h4>
            </OutputContainer>
        </CalculatorContainer>
    );
}