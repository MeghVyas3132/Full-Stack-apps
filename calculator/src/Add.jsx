import React, { useState } from 'react';

function AddTwoNumbers() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(Number(num1) + Number(num2));
    };

    return (
        <div>
            <h1>Add Two Numbers</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="First Number"
                    value={num1}
                    onChange={e => setNum1(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Second Number"
                    value={num2}
                    onChange={e => setNum2(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            {result !== null && (
                <p>Result: {result}</p>
            )}
        </div>
    );
}

export default AddTwoNumbers;