const router = require('express').Router();
const controller = require('./controller');







// send user search input to google translation API
// and return the translation back to the client
router.post('/search', controller.post.getTranslation);



module.exports = router;