const feedback = require('../models/feedback');

module.exports = (router) => {
    router.post('/hello', (req, res) => {
        res.send('Hello World')
    });
    return router;
}