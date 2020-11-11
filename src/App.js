import React from "react";
import logo from './logo.svg';
import './App.css';
import Submit from './ components/Submit/Submit';
import HomePage from './ components/HomePage/HomePage';
import Shop from './ components/Shop/Shop';
import Profile from './ components/Profile/Profile';
import Dashboard from "./ components/DashBoard/DashBoard";




// Free Code Camp App setup example //


// using 'Products' as a naming convention here could lead to issues with routiing from the backend. // => CHANGE ' Products ' to => 'Shop' throughout. 
   
export default function App(){
  return (
    <main>
      <nav>
        <ul>
          <li><Shop/><a href="/">HomePage</a></li>
          <li><HomePage/><a href="/">Shop</a></li>
          <li><Dashboard/><a href="/">Profile</a></li>
          <li><About/><a href="/">About</a></li>
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