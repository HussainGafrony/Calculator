import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext';
import { StyledButton, StyledEqual, StyledOpt } from './Style';

function HandleOperation({ value, optclass }: any) {
    const { calc, setCalc } = useContext(CalcContext);

    // Opertion Start
    const insertComma = () => {
        const { num } = calc;

        setCalc({
            ...calc,
            num: !num.toString().includes('.') ? num + value : num
        })
    }

    const computePercentage = () => {
        const { res, num } = calc;

        setCalc({
            num: (num / 100),
            res: (res / 100),
            opertion: ''
        })
    }

    const clearCalculator = () => {

        setCalc({
            opertion: '',
            num: 0,
            res: 0
        })
    }

    const invertNumberSign = () => {
        const { res, num } = calc;

        setCalc({
            num: num ? num * -1 : 0,
            res: res ? res * -1 : 0,
            opertion: ''
        })
    }

    const OperationClick = () => {
        const { res, num, opertion } = calc;
        setCalc({
            opertion: value,
            res: !res && num ? num : res,
            num: 0
        })
        console.log('num : ', num);
        console.log('res : ', res);
        console.log('opt : ', opertion);

    }
    // fix bug in add value next result

    const processNumber = () => {
        const { num } = calc;
        const inputValue = Number(value);
        const newNumber = num === 0 ? inputValue : Number(num.toString() + value);

        setCalc({
            ...calc,
            num: newNumber
        })
    }

    const handleButtonClick = () => {

        const buttonAction: any = {
            '.': insertComma,
            'C': clearCalculator,
            '/': OperationClick,
            'x': OperationClick,
            '-': OperationClick,
            '+': OperationClick,
            '=': updateResultFromOperation,
            '%': computePercentage,
            '+-': invertNumberSign
        }
        const action = buttonAction[value];
        if (action) {
            return buttonAction[value]()
        } else {
            return processNumber()
        }
    }

    // This could be implemented in an alternative manner.
    // const getMathOperation = (operation: string) => {
    //     switch (operation) {
    //         case '+':
    //             return (a: any, b: any) => a + b;
    //         case '-':
    //             return (a: any, b: any) => a - b;
    //         case 'x':
    //             return (a: any, b: any) => a * b;
    //         case '/':
    //             return (a: any, b: any) => a / b;
    //         default:
    //             return null;
    //     }
    // };

    const operators: { [key: string]: (a: any, b: any) => any } = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const updateResultFromOperation = () => {
        const { res, num, opertion } = calc;
        if (res && num) {
            // This could be implemented in an alternative manner. 
            // const mathOperation = getMathOperation(operation);
            const mathOperation = operators[opertion];
            if (mathOperation) {
                const newResult = mathOperation(res, num);
                setCalc({ res: newResult, opertion: '', num: 0 })
            }
            else {
                console.error("Invalid operation:", opertion);
            }
        }

    }

    // Opertion End

    // Style Opertion Button Start
    let getStyleComponent = (optclass: string) => {
        switch (optclass) {
            case '=': return StyledEqual;
            case 'x':
            case '-':
            case '+':
            case '/': return StyledOpt;
            default: return StyledButton;
        }
    }
    // Style Opertion Button end

    const StyleComponent: any = getStyleComponent(optclass);

    return (
        <>
            <StyleComponent onClick={handleButtonClick}>
                {value}
            </StyleComponent>
        </>

    )
}

export default HandleOperation