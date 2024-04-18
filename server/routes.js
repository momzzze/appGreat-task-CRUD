const router = require('express').Router();
const photoController = require('./controllers/photoController');

router.use('/photos', photoController);

router.get('/', (req, res) => {
    res.send('Hello from photos');
});

module.exports = router;