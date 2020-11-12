// require("dotenv").config();

const { default: HomePage } = require("../src/ components/HomePage/HomePage");

// const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env,
express = require("express");
// massive = require("massive"),
// session = require("express-session");


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

// database setup // 


// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {rejectUnathorized: false} 
// }).then(db => {
//     app.set("db", db);
//     console.log("Database UP");
// });

//PORT-CHECK//
app.listen(SERVER_PORT, () => console.log(`Server is UP on ${SERVER_PORT} Aright Aright Aright`))


// CONTROLLERS //

// Cart // 

// Admin //

// Product //



// ENDPOINTS // the final destination view, that are the components combined, viewed into a specific path 

app.post('/homePage/guestUser/', HomePage.guest)   // Default view for viewers visiting Main-landing page. 
            // HomePage will default to a non-registered userView by default.
app.post('/homePage/auth/login/', HomePage )
app.post('/auth/register', auth.register)   // EXPLANATION - (1/"the routing path created" - axios creates, 2/ the url representing it)
app.post('/auth/logout', auth.logout) // authenticate user view //
app.get('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)

app.delete('/admin/login/user/id', admin.login.user.id)

app.delete('/auth/product/id', auth.product.id)

