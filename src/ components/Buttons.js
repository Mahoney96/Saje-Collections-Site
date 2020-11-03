import { useEffect, useState } from "react";
import React, {Component, useState, useEffect} from "react";
import { Switch, Router } from "react-router-dom";
import axios from "axios";
import { connect } from "redux";

// Create functional buttons for all of the http routes throughout the App // 

        // Allow for the buttons to repeatedly used, and MOST Importantly to be successfully used AS (props) of HOCs...Meaning I can start a component with the necessary change in state already occuring: 
                //Change in state already occurring means that I'm able to reference through That  single '(props)' component, which will hold the Http: Route => the user will be directed to (think routuing will be with axios) 


// Need Buttons for UserCart:

const UserCart = (props ) => {
    const [products, setProducts] = useState([]);


}

// Button that brings user from current view to see their cart.

// Need Button that brings user to view 

