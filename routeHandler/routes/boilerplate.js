// Copy all the folloing lines to your new route file
// ==================================================

const express = require('express'); 
const router = express.Router(); 

// Routes
router.get('/', (req,res) => {
     res.status(200).json({
          message: "Hello World!"
     }); 
}); 

module.exports = router;

// ==================================================