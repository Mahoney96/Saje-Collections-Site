require("dotenv").config();



const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

// const SERVER_PORT = "https://localhost:3993";
    express = require("express");
    massive = require("massive");
    session = require("express-session");
    const middle = require('./controllers/middleware') //Verifies the login in creds to DB, before allowing further event-access(views of DOM views that render for a registered users; Ex. - ' user cart ' , ' user's Dashboard ',  user's favorite items ' , )


const app = express();

app.use(express.json());

// using session as the request object // 
// app.use(
//     session({
//         resave: false,
//         saveUninitialized: true,
//         secret: SESSION_SECRET,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 * 30,
//         },
//     })
// );

// DATABASE SETUP // 
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnathorized: false} 
}).then(db => {
    app.set("db", db);
    console.log("Database UP");
});

//PORT-CHECK//
app.listen(SERVER_PORT, () => console.log(`Server is UP on ${SERVER_PORT} Aright Aright Aright`));


// CONTROLLERS //




// Cart // 

//     app.get("./api/users/id, .then => cart/ ") // logic is that it needs to go from a route that links to: 1st => the backend ' db ', 2nd => routes to the user's stored(saved) session-data, within the 'db'; then 2nd task is => sending a routing request to FILTER SAVED USER_SESSSION-DATA, SPECIFIC TO THAT USER => FOR EVENTS OF REQUESTS SAVED TO CART. So for requests sent to the 'db', for that specific registered user's saved session data (meaning going to need to bring express-session info(write within this controller, which will render in the DOM-View as a 'view-cart' presentational component, that will pull in(REDUX(stateful-functional components that will BE HANDLING THE EVENTS/FUNCTIONALITY of viewing, adding, editing, *BUYING*, ) ))) 
//     app.getCart("./")  // routing to represent: Get request to view the user's cart, and return any saved cart items   
//     app.postCart("./")  // routing to represent:
//     app.postCart("./")  // routing to represent:
//     app.putCart("./")  // routing to represent:
//     app.deleteCart("./")  // routing to represent:

// // Admin //

// // Product //


// // ALL ENDPOINTS //
// // (Look Below for USER LOGIN End points) 

// const { default: HomePage } = require("../src/ components/HomePage/HomePage");

// //ENDPOINTS (1 of 2) // the final destination view, that are the components combined, viewed into a specific path 

// app.post('/homePage/guestUser/', HomePage.guest)   // Default view for viewers visiting Main-landing page. 
//             // HomePage will default to a non-registered userView by default.
// app.post('/homePage/auth/login/', HomePage ) // authenticate user view //
// app.post('/auth/register', auth.register)   // EXPLANATION - (1/"the routing path created" - axios creates, 2/ the url representing it)
// app.post('/auth/logout', auth.logout) 
// app.get('/auth/logout', auth.logout)
// app.get('/auth/user', auth.getUser)

// app.delete('/admin/login/user/id', admin.login.user.id)

// app.delete('/auth/product/id', auth.product.id)






// Server Setup with .json Database local not hosted //

// const express = require('express');

// // massive = require('massive');
// const ctrl = require('./controller.js');
// // console.log(shoes)

// const app = express();  

// app.use(express.json());  // Does what?: Parses the      javavscript into json so internet browsers can read it (or vice-versa*Look Up*) 

// const SERVER_PORT = 3993;


// app.get('/api/shoes',ctrl.getShoes) 

// app.post('/api/shoes', ctrl.addShoe)







// app.listen(SERVER_PORT, () => console.log(`You're servers Ruunnin on ${SERVER_PORT} Aright Aright Aright`));

// app.post('/api/shoes')  // -- What are the 2 parts to this request?
                        // 1) the URL path/address: where retreiving the request from
                        // 2) The handler: the action at the URL 

//endpoint URL, this is an endpoint. Every endpoint has two parts , the url and the handler
// URL - like the label of the item on the menu
// handler - do the logic
//  send() - what were actually sending the the fornnt end

// we calll it the End
// Because our server knows hows to handle the 

// the URL we're sending in POSTMAN has a domain 
// We call it the endpoint, because it's at the END of our URL
// Our server is listening  to 
// based on what endpoints

// two parts 1) URL  2) THe handler - Always a function and it handles the request. BEcause were listening on port 3993 were waiting to hear if any requests come in with the endpoint /api /api/shoes. IF we get the request the handler will send 
//- Chefs knos how to make a grill cheese sanwhich
// if chef knows how to make  a sandwich but is all out of cheese then - sending the 
// if we sent a requests to the chef for something 
// .catch - I know how to make a grille cheese sanwich but we're all out of cheese
// .sandals wouldn't work because we are trying to send a request for something we don't have (like something the chef doesn't know how to make)
