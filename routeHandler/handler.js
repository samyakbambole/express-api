const slashRoute = require('./routes/slashRoute');
// const route = require('path-to-route');

module.exports = (app) => {
     app.use('/', slashRoute); 
     // app.use('/route', route);
}