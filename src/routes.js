import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/Admin" component={Admin} />
    <Route path="/Guest" component={NonUser}/>
    <Route path="/User" component={RegUser}/>
    <Route path="/dash" component={dash}/>
    </Switch>
);



// Paths needed for Header & Home Page //



// - USER 
// - Guest 

// Guest - 
//         - Able to login 
//                 OR
//         - Able shop as guest 


// Series of Events // 

// 1) Users clicks "Saje-Store-Landing-Page":

        // User would be sending a request to view that routing path of the site- 



        // export default(
        //     <Switch>
        //         <Route exact path="/" component={}>HomePage</Route>
        //         <Route path="/AddToCart" component={}>AddToCart</Route>
        //         <Route path="/Buy" component={}>Buy</Route>
        //         <Route path="/GoToUserDash" component={}>UserDashboard</Route>
        //         <Route path="/Products" component={}>ViewProducts</Route>
        //     </Switch>
        // );