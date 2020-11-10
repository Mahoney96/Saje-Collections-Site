import React, { Component } from "react";

// class HomePage extends Component{
//     render(){{
//         return(){
//             <div className = "header-guest">
//                 <Logo/>
//                 <Search/>
//                 <Banner/>
//                 <Nav/>
//             </div>
//         }
//         return(){

//         }
//     }
        
// }

const HomePage = (props) => (
    <div>
        <Header/>
    </div>
);




class Header extends Component{
   constructor(props){
       super(props);
            return() => {
                <div className = "header-guest">  
                    <Logo/>
                    <Search/>
                    <Banner/>
                    <Nav/>
                </div>
            }
    }
}