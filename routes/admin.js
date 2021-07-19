var express=require('express');
var router=express.Router(); 
var express=require('express');
var router=express.Router(); 
var User=require('../models/user.js');


router.get("/user",function(req,res){
	User.find(function(err,user){
		if(err) return console.log(err);
		res.render('admin-user',{
			user:user
		});
	});
});

router.get("/add-user",function(req,res){
    res.render("add-user.ejs");
});

router.post('/add-user',function(req,res){
	var email=req.body.email;
	var address=req.body.address;
	var name=req.body.name;
	var number=req.body.number;
	
    var user= new User({
        name:name,
        number:number,
        email:email,
        address:address,
    });
    user.save(function(err){
        if(err){
            return console.log(err);
        }
        res.redirect('/admin/user');
    });
});

router.post("/user/delete/:id", function(req, res){
	User.findById(req.params.id, function(err, user){
		if(err){
			console.log(err);
		} else {
			user.remove();
			res.redirect("/admin/user");
		}
	}); 
 });

module.exports = router;
