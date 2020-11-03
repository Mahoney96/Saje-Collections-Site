import React, { Component, useState, useEffect } from 'react';
import axios from "axios";


const UserDash = (props) => {
    const [count, setCount] = useState([]);

    useEffect(() => {
        axios
        .get("/api/Home")
        .then((res) => {
            setUserView(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const addToCart = (id) => {
        axios.post(`/api/cart/${id}`)
    }
    

};

class Submit extends Component {
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: ""
        };

        this.handLogin = this.handleLogin.bind(this);
    }

    handleUserNameChange(name) {
        this.setState({ username: name });
    }

    handlePasswordChange(pass){
        this.setState({ password: pass });
    }

    handleLoginChange() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }


    render() {
        return (
            <div> 
                <input
                 onChange={e => this.handleUserNameChange(e.target.value)}
                 type="text"
                 />
                 <input
                 onChange={e => this.handlePasswordChange(e.target.value)}
                 type="text"
                 />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}


return (
    <div> 
        <button onClick={() => setCount(count + 1)}>
            Submit
        </button>
    </div>
);



// class Submit extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {

//         }

//     }
// }






<button onClick={() => this.setState({ count: this.state.count +1 })}>
    Click Me
</button>
;

<button onClick={() => setCount(count + 1)}>
    Click ME
</button>

