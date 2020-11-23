import { Update } from "massive";
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../src/ components/HomePage/HomePage";
// proto routing to pull in backend //


//Actual Routing to use for  // most complex to shortest , will stop once it finds match //
export default (
    <Switch>
        {/*MainView Paths - Default View generated when visting Site HomePage from Browser*/}
    <Route exact path="/" component={HomePage} />

    <Route path="HomePage/Guest" component={DefaultUser}/> 

    <Route path="HomePage/Guest/Login" component={Login}/>

    <Route path="HomePage/Login/Admin" component={UserAdmin} />
    <Route path="HomePage/Login/User" component={RegUser}/>

{/* GuestUser */}

{/* RegisterView SignUp: (Yes/No) */}
    <Route path="HomePage/Login/Register/SignUp/NewUserAgreement/" component={Register}/>

{/* Guest Cart  */}
    <Route path="/Guest/Cart/ViewCart" component={ViewCart}/>
    <Route path="/Guest/Cart/UpdateCart" component={UpdateUserCart}/>


{/* NewUser - CreateProfileView */}
    <Route path="HomePage/Login/Register/User/NewUser" component={NewUser}/>

    <Route path="HomePage/Login/NewUser/CreateUserProfile" component={CreateUserProfile}/>




{/* User Cart */}
    <Route path="/User/Cart/ViewCart" component={ViewCart}/>
    <Route path="/User/Cart/UpdateCart" component={UpdateUserCart}/>
                    {/* Then will use same (4) CRUD requests as RegisteredUser does to (Get - cart; Post - add new items to car ; Put- save new cart items for late ; delete - delete cart items);  */}
        <Route path="/User/Cart/UpdateCart" component={UpdateUserCart}/>

{/* Admin Control Login*/}
        {/* Admin Login will be a view of a Registered User, but with ADDITIONAL View Privileges, to make changes to overall site - a) Update Shop Controller b) View-Site-Performance-Controller(showing Clicks - PPC, Views, Time-Spent on each page(need to track EACH single DOM VIEW VARIATION, User to User, to know where exited, from where - using cookies, express-sesssion))*/}
    <Route path="HomePage/Login/UserAdmin/Profile/Dash" component={AdminDash}/>  
    

    {/* PATHS FOR THE (3) VARATIONS OF USER */}


{/* AdminUser Controls*/}
    <Route path="HomePage/Login/Admin/Profile/AdminDash/UpdateShop" component={AdminUpdateShop}/>
    <Route path="HomePage//Login/Admin/"/>

{/* LoggedIn User*/} 
    <Route path="HomePage/Login/User/Profile/UserDash" component={UserDash}/>
    <Route path="HomePage/Login/User/EditUserProfile" component={EditProfile}/>
    <Route path="HomePage/UserProfile/Delete/UserProfile" component={ConfirmDeleteUserProfile}/>




  

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