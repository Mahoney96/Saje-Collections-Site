import React, { Component } from "react";
import axios from axios;
import express from "express";
import session from "express-session";




// class Auth extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             email: "",
//             username: "",
//             password: "",
//             error: ""
//         }
//     }

//     handleInput = e => this.setState({ [e.target.name]: e.target.value})

//     handleRegister = () => {
//         const { e, password } = this.state;
        
//         axios
//         .post('/auth/register', {username})
//     };