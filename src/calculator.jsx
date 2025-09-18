import React, { useState } from 'react';

// A simple calculator component
// It supports basic operations: addition, subtraction, multiplication, and division

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const inputNum = (num) => {
    if (waiting) {
      setDisplay(String(num));
      setWaiting(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waiting) {
      setDisplay('0.');
      setWaiting(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
    setWaiting(false);
  };

  const doOp = (nextOp) => {
    const input = parseFloat(display);
    
    if (prev === null) {
      setPrev(input);
    } else if (op) {
      const result = calc(prev, input, op);
      setDisplay(String(result));
      setPrev(result);
    }
    
    setWaiting(true);
    setOp(nextOp);
  };

  const calc = (a, b, operation) => {
    switch (operation) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      case '%': return a % b;
      case '^': return Math.pow(a, b);
      default: return b;
    }
  };

  const toggleSign = () => {
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
  };

  const equals = () => {
    if (prev !== null && op) {
      const result = calc(prev, parseFloat(display), op);
      setDisplay(String(result));
      setPrev(null);
      setOp(null);
      setWaiting(true);
    }
  };

  const buttonStyle = {
    padding: '20px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    margin: '2px'
  };

 return (
    <div style={{ width: '300px', margin: '50px auto', border: '1px solid #ccc', padding: '20px' }}>
      <div style={{ 
        padding: '10px', 
        fontSize: '24px', 
        textAlign: 'right', 
        backgroundColor: '#fff', 
        border: '1px solid #ddd',
        marginBottom: '10px'
      }}>
        {display}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        <button style={buttonStyle} onClick={clear}>C</button>
        <button style={buttonStyle} onClick={() => doOp('/')}>/</button>
        <button style={buttonStyle} onClick={() => doOp('*')}>*</button>
        <button style={buttonStyle} onClick={() => doOp('-')}>-</button>
        <button style={buttonStyle} onClick={() => doOp('+')}>+</button>
        
        <button style={buttonStyle} onClick={() => inputNum(7)}>7</button>
        <button style={buttonStyle} onClick={() => inputNum(8)}>8</button>
        <button style={buttonStyle} onClick={() => inputNum(9)}>9</button>
        <button style={buttonStyle} onClick={toggleSign}>+/-</button>
        
        <button style={buttonStyle} onClick={() => inputNum(4)}>4</button>
        <button style={buttonStyle} onClick={() => inputNum(5)}>5</button>
        <button style={buttonStyle} onClick={() => inputNum(6)}>6</button>
        <button style={buttonStyle} onClick={() => doOp('^')} rowSpan="2">^</button>
        
        <button style={buttonStyle} onClick={() => inputNum(1)}>1</button>
        <button style={buttonStyle} onClick={() => inputNum(2)}>2</button>
        <button style={buttonStyle} onClick={() => inputNum(3)}>3</button>
        <button style={buttonStyle} onClick={equals} rowSpan="2">=</button>
        
        <button style={{...buttonStyle, gridColumn: 'span 2'}} onClick={() => inputNum(0)}>0</button>
        <button style={buttonStyle} onClick={inputDecimal}>.</button>
      </div>
    </div>
  );
 };

export default Calculator;