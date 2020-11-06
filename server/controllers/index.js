require("dotenv").config();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env,
express = require("express"),
massivve = require("massive"),
session = require("express-session");

// CONTROLLERS //


// Cart // 

// Admin //

// Product //

const app = express();

app.use(express.json());

// using session as the reqeust object // 
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
    ssl: { rejectUnathorized: false },

})
.catch((err) => console.log(`Database error: ${err}`));

// Cart Endpoints



// Admin Endpoints



// Product Endpoints



