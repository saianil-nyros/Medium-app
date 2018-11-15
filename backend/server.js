var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var users = require('./models/users.js');
var adminstory = require('./models/admin.js');

app.use(cors());
// set ejs as rendering engine
var http=require('http');
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/users');
mongoose.connection.once('open', function () {
   console.log('MongoDB connection open');
});
// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

// render the ejs page
// app.get('/', function (req, res) {
  
// });

app.post("/save_details", (req, res) => {

console.log(req.body);
	new adminstory({
		title   : req.body.title,
		content   : req.body.content,
		category   : req.body.category,
		description : req.body.description,
	}).save(function(err, story){
       res.json({
       	status:'success',
       	message :'admin posted a story',
       	reguser : story
       })
	})
});


app.get('/get_data',(req,res)=>{
	// console.log(req.body);
	
	adminstory.find({},function(err,stories){
		// console.log('------', stories)
		if (!err) {
			res.json({
				status:'success',
				message:'found',
				user:stories
			})

		}else{
			res.json({
				status:'error',
				message:'Not found'
			})
		}
	})

	
});




app.post('/validate', function (req, res) {
  // var username='medium';
  // var password='medium';
  // if (username==req.body.username && password==req.body.password) {
  // 	res.render('dashboard');
  // }
  // else{
  // 	res.json({

  // 	})
  // }
 users.findOne({username:req.body.username}, function(err, data){

if(data != null){

users.findOne({username:req.body.username, password:req.body.password}, function(err, user){

if(user){

res.render('dashboard');
}else{

res.send("you are not an admin");
}



})

}else{

res.send("admin not found");

}
});
});
app.use('/adminstory',function(req,res){
	res.render('adminstory');
})

app.use('/adminlogin',function(req,res){
	res.render('form');

})


// when Add to Bottom button is clicked
app.get('/', function (req, res) {
	 res.render('form.ejs');
  // console.log(req.body.todo + " is added to bottom of the list.");
 
});



app.listen(8000);
console.log('App is listening on PORT 8000');