require('dotenv').config(); 

const express = require('express'); 
const morgan = require('morgan'); 
const helmet = require('helmet'); 
const cors = require('cors'); 

const app = express(); 

// Middlewares
app.use(morgan('dev')); 
app.use(helmet()); 
app.use(cors()); 

// Routes
app.get('/', (req,res) => {
     res.status(200).json({
          message: "Hello World!"
     }); 
}); 

const port = process.env.PORT; 
app.listen(port, () => {
     console.log(`Express API Running on port ${port}`); 
}); 