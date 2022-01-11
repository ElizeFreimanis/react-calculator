import './App.css';
import { useState, useEffect } from 'react';
import * as FaIcon from 'react-icons/fa';

const ops = ['/', '*', '+', '-', '.'];

function App() {
    const [calculation, setCalculation] = useState('');
    const [result, setResult] = useState('');
    const [calculated, setCalculated] = useState(false);

    const updateCalc = (value) => {
        setCalculated(false);

        if (
            // make sure you can't start with a operator
            (ops.includes(value) && calculation === '') ||
            // make sure you can't press double operators
            (ops.includes(value) && ops.includes(calculation.slice(-1)))
        ) {
            return;
        }
        // calculator starts over after pressing new number after calculation
        if (!ops.includes(value) && calculated) {
            setCalculation(value);

            return;
        }

        setCalculation(calculation + value);
    };

    const deleteLast = () => {
        if (calculation === '') {
            return;
        }

        setCalculation(calculation.slice(0, -1));
    };

    // making sure that the result dissapears when the calculation is fully deleted
    useEffect(() => {
        if (calculation === '') {
            setResult('');
        }
    }, [calculation]);

    const clearAll = () => {
        setCalculation('');
        setResult('');
    };

    const calculate = (value) => {
        setResult(eval(calculation).toString());

        setCalculated(true);
    };

    return (
        <div className='App'>
            <div className='calculator'>
                <div className='display'>
                    <span className='calculation'>{calculation}</span>
                    <span
                        className='result'
                        style={{ fontSize: result.length > 9 ? '9vw' : false }}
                    >
                        {result || '0'}
                    </span>
                </div>
                <div className='btn-field'>
                    <div className='operators'>
                        <button
                            onClick={() => {
                                updateCalc('+');
                            }}
                        >
                            <FaIcon.FaPlus className='icon operator' />
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('-');
                            }}
                        >
                            <FaIcon.FaMinus className='icon operator' />
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('/');
                            }}
                        >
                            <FaIcon.FaDivide className='icon operator' />
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('*');
                            }}
                        >
                            <FaIcon.FaAsterisk className='icon operator' />
                        </button>
                        <button onClick={deleteLast}>DEL</button>
                        <button onClick={clearAll}>CA</button>
                    </div>
                    <div className='digits'>
                        <button
                            onClick={() => {
                                updateCalc('1');
                            }}
                        >
                            1
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('2');
                            }}
                        >
                            2
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('3');
                            }}
                        >
                            3
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('4');
                            }}
                        >
                            4
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('5');
                            }}
                        >
                            5
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('6');
                            }}
                        >
                            6
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('7');
                            }}
                        >
                            7
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('8');
                            }}
                        >
                            8
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('9');
                            }}
                        >
                            9
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('0');
                            }}
                        >
                            0
                        </button>
                        <button
                            onClick={() => {
                                updateCalc('.');
                            }}
                        >
                            .
                        </button>
                        <button onClick={calculate}>
                            <FaIcon.FaEquals className='icon' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
