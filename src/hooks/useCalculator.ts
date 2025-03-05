import {useState} from "react";

// custom useCalculator hook
export default function useCalculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [output, setOutput] = useState("");

    // takes a string op and performs the corresponding operation on firstNumber and secondNumber, updating output
    function calculate(op: string) {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        let result;

        if (op === "add") {
            result = first + second;
        } else if (op === "subtract") {
            result = first - second;
        } else if (op === "multiply") {
            result = first * second;
        } else if (op === "divide") {
            result = first / second;
        } else if (op === "power") {
            let exponent = second;
            if (exponent < 0) {
                exponent = -1 * exponent; // if the exponent is negative will take the absolute value
            }

            // multiply result (starting at 1) by firstNumber exponent many times
            result = 1;
            for (let i = 0; i < exponent; i++) {
                result = result * first;
            }

            if (second < 0) {
                result = 1 / result; // if the exponent was negative result should be 1/result
            }

            if (isNaN(first) || isNaN(second)) {
                result = NaN; // if first/second is not a number we set result to NaN (instead of leaving it as 1)
            }
        } else {
            result = "";
        }

        setOutput(String(result));
    }

    // clear the calculator, resetting firstNumber, secondNumber, and output to empty strings
    function clearCalc() {
        setFirstNumber("");
        setSecondNumber("");
        setOutput("");
    }

    return { firstNumber, setFirstNumber, secondNumber, setSecondNumber, output, calculate, clearCalc };
}