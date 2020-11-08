require("dotenv").config();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env,
express = require("express"),
massive = require("massive"),
session = require("express-session");

// CONTROLLERS //


// Cart // 

// Admin //

// Product //

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
    console.log('DB Up N Runnin Connected');
    app.set('db', db);
});


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

app.listen(SERVER_PORT, () => console.log(`Server is Up N Runnin on ${SERVER_PORT} Aright Aright Aright`))