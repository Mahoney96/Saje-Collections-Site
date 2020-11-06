import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Home extends Component(){
        cosntructor(){
        super();
    }
};

function Home2 () {
    return (
        <div className="Header">
            <NavLink>Home</NavLink>
            <NavLink>MyProducts</NavLink>
            <NavLink>Dashboard</NavLink>
            <NavLink>Store</NavLink>
            <NavLink>About Saje</NavLink>
            
        </div>
    )
}