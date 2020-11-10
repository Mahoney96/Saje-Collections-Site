require("dotenv").config();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env,
express = require("express");
massive = require("massive"),
session = require("express-session");


const app = express();

app.use(express.json());

// using session as the request object // 
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
        },
    })
);

// database setup // 


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnathorized: false} 
}).then(db => {
    app.set("db", db);
    console.log("Database UP");
});


app.listen(SERVER_PORT, () => console.log(`Server is UP on ${SERVER_PORT} Aright Aright Aright`))


// CONTROLLERS //


// Cart // 

// Admin //

// Product //

// second version of Massive install //


// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: { rejectUnathorized: false },

// })
// .catch((err) => console.log(`Database error: ${err}`));

// Cart Endpoints



// Admin Endpoints



// Product Endpoints



// Checking Port //

