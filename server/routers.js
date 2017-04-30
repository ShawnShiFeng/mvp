const router = require('express').Router();
const controller = require('./controller');







// send user search input to google translation API
// and return the translation back to the client
// router.post('/record', controller.post.recordAudio);
router.post('/findPic', controller.post.findPic);


module.exports = router;