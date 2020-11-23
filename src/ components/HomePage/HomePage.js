import React, { Component } from "react";
import UserCart from "../UserCart/UserCart";
import ShopPage from "../ShopPage/ShopPage";
import Login from "../Login/Login";
// import Router from routes;
// import routes from "../../../server/routes/routes";

class HomePage extends Component{
    render(){
        return(


        <div>
        <ShopPage/>
        <UserCart/>
        <About/>
        <Login>SIGN-IN OR SIGN UP</Login>
        </div>
        );

    }
};

export default HomePage;












// // Steps 1-4 ( 1.Simple button, 
// //             2.DumbComp 
// //             3.SmartComp, 
// //             4.Imported counterFunction )
// // 1) 
// // SimpleButton(aka an atom-like(simplest/smallest) component  for a button) //
//     //Button in JSX in simplest terms //
    
//         //Opt-1 (uses state)
//         <button onClick={() => this.setState({ count: this.state.count +1 })}>
//             Click Me
//             </button>;

//             //Opt-2 (uses a React Hook) (ref URL Link - https://reactjs.org/docs/hooks-state.html)
//             <button onClick={() => setCount(count + 1)}>
//                 Click ME
//             </button>;


// // 2 //
//     // (DUMB) HomePage Component //

// export default HomePage => () => (
//     <div>
//         <h1>Header Here</h1>
//     </div>
// );

// // 3 //
// // (SMART) HomePage Component //

// export default HomePage => class HomePage extends Other.Component{
//     render(){
//         <div>
//             <HomeButton/>
//         </div>
//         return (
//             <div>
//                 <h1>Title of HomePage</h1>
//                 <DashBoard/>
//                 <div>Nav</div>
//                 <div>Shop</div>
//                 <div>Profile</div>
//                 <div>About</div>
//                 <div>Contact</div>
//             </div>
//         );
//     }
// }

// // 4 //
// // Counter() Component Functionality, Built in to count Button clicks // 

// class HomeButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {value: 0};
//         this.buttonClicked = 
//         this.buttonClicked.bind(this);
//     }

//       butttonClicked(event) {
//         this.setState({value:
//    this.state.value+1});  
//     }

//     render(){
//         return (
//             <div>
//                 <div>{this.state.value}</div>
//                 <button onClick= 
//     {this.buttonClicked}>Home</button>
//             </div>
//         );
//     }
// }








// // class Header extends Component{
// //    constructor(props){
// //        super(props);
// //             return() => {
// //                 <div className = "header-guest">  
// //                     <Logo/>
// //                     <Search/>
// //                     <Banner/>
// //                     <Nav/>
// //                 </div>
// //             }
// //     }
// // }


// // ROUTING EXPORT = DUMB COMPONENT FUNCTIONALITY NEEDED.
//         // Would be: 
//                 // 1) Routes module 
//                             // As only need to export the pre-determined routes once grouped together as one default function(why it can be an arrow=>(func))
//                 // 2) Module.exports
//                             // As it is combining a collection of all the necessary backend request functions needed for a stateful component. 

//                             //Ex. For cartController.js:
//                             //  Module.exports {
//                             //         .getProducts("./"),
//                             //         .postProducts("./"),
//                             //         .editProducts("/."),
//                             //         .addProducts("./"),
//                             //         .deleteProducts("./")
//                             //         };