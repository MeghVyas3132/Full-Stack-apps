// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

import React from 'react';
import AddTwoNumbers from './Add';
import IFIMS from './ifim';
import Calculator from './calculator';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Calculator</h1>
      <h1>IFIMS</h1>
      <IFIMS />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center', alignItems: 'flex-start', marginTop: '30px' }}>
        <AddTwoNumbers />
        <Calculator />
      </div>
    </div>
  );
}

export default App;



