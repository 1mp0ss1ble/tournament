var express  = require('express')
  , router = express.Router();


router.get('/', function (req, res, next) {
    res.render("common/index");
});



router.use('/teams', require('./teams'));

router.use('/users', require('./users'));

router.use('/players', require('./players'));

router.use('/events', require('./events'));

router.use('/options', require('./options'));




module.exports = router;
