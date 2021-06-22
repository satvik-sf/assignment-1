var bodyParser = require("body-parser");
var express=require("express");
var app=express();
var mongoose=require('mongoose');

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



mongoose.connect('mongodb://localhost:27017/nec', {useNewUrlParser: true,useUnifiedTopology: true});

var admin=require('./routes/admin.js');

app.use('/admin',admin);

app.listen(3000,function(){
    console.log('server started');
});