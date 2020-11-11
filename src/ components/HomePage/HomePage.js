import React, { Component } from "react";
import HomePage from "../../routes";

// (DUMB) HomePage Component //

export default HomePage => () => (
    <div>
        <h1>Header Here</h1>
    </div>
);


// (SMART) HomePage Component //


export default HomePage => class M



// class Header extends Component{
//    constructor(props){
//        super(props);
//             return() => {
//                 <div className = "header-guest">  
//                     <Logo/>
//                     <Search/>
//                     <Banner/>
//                     <Nav/>
//                 </div>
//             }
//     }
// }


// ROUTING EXPORT = DUMB COMPONENT FUNCTIONALITY NEEDED.
        // Would be: 
                // 1) Routes module 
                            // As only need to export the pre-determined routes once grouped together as one default function(why it can be an arrow=>(func))
                // 2) Module.exports
                            // As it is combining a collection of all the necessary backend request functions needed for a stateful component. 

                            //Ex. For cartController.js:
                            //  Module.exports {
                            //         .getProducts("./"),
                            //         .postProducts("./"),
                            //         .editProducts("/."),
                            //         .addProducts("./"),
                            //         .deleteProducts("./")
                            //         };