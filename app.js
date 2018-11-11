var express = require('express');
var app = express();
var route = express.Router();
route.get('/test',function(req,res){
    res.json({
        message : 'Hello world'
    })
})
app.use('/api',route);


app.listen(5000,function(){
    console.log('Server starts at 5000')
})