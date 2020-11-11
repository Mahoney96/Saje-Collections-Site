import Axios from "axios";
import React, { useState, useEffect, Component } from "react";

// !IMPORTANT! USE the axios logic after initial (1-4) Steps at Top: //


import React from "react";


// Steps 1-4 ( 1.Simple button, 
//             2.DumbComp 
//             3.SmartComp, 
//             4.Imported counterFunction )
// 1) 
// SimpleButton(aka an atom-like(simplest/smallest) component  for a button) //
    //Button in JSX in simplest terms //
    
        //Opt-1 (uses state)
        <button onClick={() => this.setState({ count: this.state.count +1 })}>
            Click Me
            </button>;

            //Opt-2 (uses a React Hook) (ref URL Link - https://reactjs.org/docs/hooks-state.html)
            <button onClick={() => setCount(count + 1)}>
                Click ME
            </button>;




// 2) //
// (DUMB) HomePage Component //

export default Submit = () => {
    return(
        <div></div>
    )
}



// 3) //
// (SMART) HomePage Component //







// 4) //
// Counter() Component Functionality, Built in to count Button clicks // 















// import axios from "axios";


// function SearchBar(){
//     const [search, setSearch] =   // function SearchBar() {} (2 parts): 
//                                         //  1) Need this to equal what I need the initial seachBar state to consist of[search] 
//                                         //  2)   
//                                         //     a)What events I need handled, 
//                                         //     b)the changes triggered by the events to the DOM-Components & Affect On UserView, 
//                                         //     c)also the data sent/stored/changed in the database itself. 


//     useState(""); // What the user will type in to search the site (which equals to the user searhcing store's API Product database)

//     return (
//         <div> 
//             <p>You Searched for {search}, returning {(setSearch.map)}results</p> 
//             <button onClick={ () => setSearch(products.map.id) }>
//                                                         // this needs to onClick, get the new state to trigger an event that causes the ' useState '( aka the "SearchBar String" that the user types into), to Map(or filter through the API index of the database by keyword, meaning the search function will have to be able to do a boolean keyword search through the attached database to return what the user typed in, caused by the event of the user's search being the trigger.


//             Submit</button>                                                 
//         </div>
//     )

// };

// export default SearchBar;