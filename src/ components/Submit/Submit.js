import Axios from "axios";
import React, { useState, useEffect, Component } from "react";

import axios from Axios;





function SearchBar(){
    const [search, setSearch] =   // function SearchBar() {} (2 parts): 
                                        //  1) Need this to equal what I need the initial seachBar state to consist of[search] 
                                        //  2)   
                                        //     a)What events I need handled, 
                                        //     b)the changes triggered by the events to the DOM-Components & Affect On UserView, 
                                        //     c)also the data sent/stored/changed in the database itself. 


    useState(""); // What the user will type in to search the site (which equals to the user searhcing store's API Product database)

    return (
        <div> 
            <p>You Searched for {search}, returning {(setSearch.map)}results</p> 
            <button onClick={ () => setSearch(products.map.id) }>
                                                        // this needs to onClick, get the new state to trigger an event that causes the ' useState '( aka the "SearchBar String" that the user types into), to Map(or filter through the API index of the database by keyword, meaning the search function will have to be able to do a boolean keyword search through the attached database to return what the user typed in, caused by the event of the user's search being the trigger.


            Submit</button>                                                 
        </div>
    );


}

export default SearchBar;