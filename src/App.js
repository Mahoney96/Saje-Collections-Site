import React from "react";
import logo from './logo.svg';
import './App.css';
import HomePage from "./ components/HomePage/HomePage";


// using 'Products' as a naming convention here could lead to issues with routiing from the backend. // => CHANGE ' Products ' to => 'Shop' throughout. 
   
function App(){
  return(
    <div>
      <HomePage/>
    </div>
  
  );
};

export default App;






// 1st function Header Compnenent (Attempt watching Pluralsight)
// function App() {
//   return (
//     <div className="App">
//       <header className="homePage-header">

//       </header>
//     </div>
//   );
// }

// export default App;


// Original React App.js Code // 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Submit/>
//         <Submit/>
//         <Submit/>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }