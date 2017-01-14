var express = require('express')
  , router = express.Router()
  , path   = require('path')
  , events = require('../models/events');



router.get('/', function(req, res){
   events.getAll(req,res);
    //res.end("events");
});


router.post('/add',function(req,res){
   events.add(req.body,function(err, model){
    
    if(err) res.end(err.toString());
    //res.redirect('events/event?desc="'+model.desc+'"')
    res.send(model);
   });
});


router.get('/event/:desc',function(req,res){
 
 events.get(req, function(err,event){
  if(err) res.end(err.message);
  
  if(req.xhr){
      res.json(event);
  }
  else{
      res.render('events/event.jade',{ event: event });
  }
  
 });
 
})


router.get('/subevent/:id',function(req, res){
 if(req.xhr){
  res.json(req.params.id);
 }
})

//router.use(express.static(__dirname+'/views'))


/*


router.get('/:id(\\d+)/', function(req, res){
   events.get(req,res);
});




router.get('/add',function(req, res){
   //res.sendFile('teams/add.html'); 
   //res.sendFile(path.join(__dirname, '../views/events', 'add.jade'));
    res.render("events/add");
});
*/


/*
router.post('/add', function(req,res){
    events.add(req, res);
});


router.get('/deleteTable',function(req,res){
    events.table.delete(req,res);
});

router.get('/createTable',function(req,res){
    events.table.create(req,res);
});
*/





module.exports = router;