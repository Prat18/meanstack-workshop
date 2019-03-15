const feedback = require('../models/feedback');

module.exports = (router) => {
    router.post('/form', (req, res) => {
        if(!req.body.email){
            res.send({success: false, message: 'Enter the email'});
        } else if(!req.body.name){
            res.send({success: false, message: 'Enter the name'})
        } else if(!req.body.usn){
            res.send({success: false, message: 'Enter the USN'})
        } else if(!req.body.feedback){
            res.send({success: false, message: "Please provide your feedback"})
        } else{
            console.log(req);
            res.send("Thanks for your feedback!");
        }
    });
    return router;
}