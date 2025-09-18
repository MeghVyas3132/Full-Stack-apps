import React, { useState } from 'react';
import AddTwoNumbers from './Add';
import IFIMS from './ifim';
import Calculator from './calculator';
import Votex from './votex';
import LoginForm from './LoginPage';

const programs = [
  { name: 'Login', component: <LoginForm /> },
  { name: 'Calculator', component: <Calculator /> },
  { name: 'Add Two Numbers', component: <AddTwoNumbers /> },
  { name: 'IFIMS', component: <IFIMS /> },
  { name: 'Vote Counting System', component: <Votex /> }
];

function ProgramSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? programs.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === programs.length - 1 ? 0 : i + 1));

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>{programs[index].name}</h1>
      <div style={{ minHeight: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {programs[index].component}
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={prev} style={{ marginRight: 20, padding: '10px 30px', fontSize: 18 }}>Previous</button>
        <button onClick={next} style={{ padding: '10px 30px', fontSize: 18 }}>Next</button>
      </div>
    </div>
  );
}

export default ProgramSlider;
