//this function handles routing of requests
module.exports = function (app) {
                            //app->express server
    //load the controller(s)
    var login = require('../controllers/login.server.controller');
    
    //handle the routing of get request to the route
    //by showing the login screen
    app.get('/', function (req, res) {
        //display login page
                            //this argument name should be matched with .ejs
        res.render('login', { loginMessage: 'Login to evaluate the course:' });

    });
    //the form uses a post request to the same path ('/')
    app.post('/', function (req, res) {
        //use the controller function
        //obj dot function name
        login.commentInfo(req, res);
        
    });

    app.post('/thankyou.ejs', function (req, res) {
    //use the controller function
    //obj dot function name
    login.commentResults(req, res);
    
});
};
