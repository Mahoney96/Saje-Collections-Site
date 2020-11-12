const express = require('express');

const app = express();

app.use(express.json());


// Import Routes //
const authRoute = require('./')


// Route Middlewares
app.use('/api/user', authRoute);




const SERVER_PORT = 3993

app.listen(SERVER_PORT, () => console.log(`Up on ${SERVER_PORT} Arightt Arightt Aright`));