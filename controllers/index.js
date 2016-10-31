var express  = require('express')
  , router = express.Router();


app.use(favicon('./public/favicon.ico'));

router.get('/', function (req, res, next) {
    res.end('Main Page');
});



router.use('/teams', require('./teams'))

router.use('/users', require('./users'))

router.use('/players', require('./players'))





module.exports = router;
