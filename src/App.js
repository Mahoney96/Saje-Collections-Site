import React from "react";
import logo from './logo.svg';
import './App.css';
import Submit from './ components/Submit/Submit';
import HomePage from './ components/HomePage/HomePage'

// Free Code Camp App setup example //


// using 'Products' as naming convention could lead to issues with routiing from the backend. // => CHANGE ' Products ' to => 'Shop'
   
export default function App(){
  return (
    <main>
      <nav>
        <ul>
          <li><a href="/">HomePage</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
    </main>
  )
}






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