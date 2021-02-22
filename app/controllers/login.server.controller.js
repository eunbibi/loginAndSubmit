//This function handles the following task:
//captures the form input and passes it to comment.ejs page for friendly output
exports.commentInfo = function (req, res) {

    //get user input using request object
                            //field name
    var email = req.body.email;
    var password = req.body.password;

    //make a reference to the session object
    var session = req.session;

    //store the email in session object
            //can be any name
    session.email = email;
    console.log("email in session: " + session.email);
    //show the comment.ejs page and pass email to it
                //to other ejs page
    res.render('comment', {
        email: email
    });   

}; //end of function

exports.commentResults = function (req, res) {

    //get user input using request object
                            //field name
    var email = req.body.email;
    var comment = req.body.comment;
    
    //show the results.ejs page and pass comment to it
    //sending value of comment in result page
    res.render('thankyou', {
        comment: comment,
        email: email

    });   

}; //end of function