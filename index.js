// Dependencies
require('dotenv').config(); 
const express = require('express'); 
const morgan = require('morgan'); 
const helmet = require('helmet'); 
const cors = require('cors'); 

// Initializing Application
const app = express(); 

// Middlewares
app.use(morgan('dev')); 
app.use(helmet()); 
app.use(cors()); 

// Routes 
const routes = require('./routeHandler/handler');
routes(app); 

// Firing up Application
const port = process.env.PORT; 
app.listen(port, () => {
     console.log(`Express API Running on port ${port}`); 
}); 