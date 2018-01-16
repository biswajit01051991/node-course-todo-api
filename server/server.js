var express=require('express');
var bodyParser=require('body-parser');

var {mongoose} =require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {User}=require('./models/user.js');

var app=express();
app.use(bodyParser.json());



app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text: req.body.text
	});
	
todo.save().then((docs)=>{
	res.send(docs);
},(e)=>{
	res.status(400).send(e);
});

});





app.listen(3000,()=>{
	console.log('Started on Port 3000');
});


module.exports={app};

/*

*/

/*var newTodo=new Todo({
	text:'Cook dinner'
});

newTodo.save().then((docs)=>{
	console.log(docs)
},(e)=>{
	console.log('Unable to save the data');
});*/

/*
var otherTodo=new Todo({
	text:true
	//completed:true,
	//completedAt:123
});

otherTodo.save().then((docs)=>{
	console.log(docs)
},(e)=>{
	console.log('Unable to save the data',e);
});*/

//user

//email -require it-trim it-set type-set min length of 1

/*
var User=mongoose.model('User',{
	email:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	}
});


var newUser=new User({
	email:'biswasingha.09@gmail.com'
});

newUser.save().then((docs)=>{
	console.log(docs)
},(e)=>{
	console.log('Unable to save the data',e);
});
*/