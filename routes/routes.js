/* eslint-disable no-undef */
// load up our shiny new route for users
const userRoutes = require('./data');
const cors = require('cors');

const appRouter = (app, fs) => {
    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/', cors(), (req, res) => {
        res.send('welcome to the development api-server');
    });

    // run our user route module here to complete the wire up
    userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;
