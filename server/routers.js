const router = require('express').Router();
const controller = require('./controller');


router.get('/getHistory', controller.get.getAllHistory);

router.post('/addItem', controller.post.displayOption);
router.post('/randomize', controller.post.pickRandomNumber);

module.exports = router;