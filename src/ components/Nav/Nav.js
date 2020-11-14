import { Link } from "react-router-dom";

render() {
    return (
        <div>
        <Link to="/" className="index-button">index</Link>

        <Link to="/login" className="login-button">
            <div className="login">Log In</div>
        </Link>
        </div>
    )
}


// import React from "react";

// <ul>
//     <li><a href="/">Home</a></li>
//     <li><a href="/admin/">Admin</a></li>
//     <li><a href="/guest/">Guest</a></li>
//     <li><a href="/user/">User</a></li>
//     <li><a href="/dash">Dash</a></li>
// </ul>