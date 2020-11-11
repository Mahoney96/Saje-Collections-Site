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
// (DUMB) ShopPage Component //

export default Shop = () => {
    return (
        <div>
            <h1>ShopPage Title</h1>
        </div>
    )
}




// 3) //
// (SMART) ShopPage Component //

export default title => class ShopPage extends Other.Component {
    render() {
        return (
            <h1>ShopPage Title</h1>
        )
    }
}





// 4) //
// Counter() Component Functionality, Built in to count Button clicks // 


class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 0 };
        this.buttonClicked = 
        this.buttonClicked.bind(this);
    }

        buttonClicked(event) {
            this.setState({value:
            this.state.value+1})
        }

    render(){
        return (
            <div>
                <div>{this.state.value}</div>
                <button onClick=
    {this.buttonClicked}>Home</button>
            </div>
        );
    }
}