const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

/*
Todo.remove({}).then((result)=>{
	console.log(result);
});*/

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5a5f216996962f75445f493a'}).then((todo)=>{
	
});

Todo.findByIdAndRemove('5a5f216996962f75445f493a').then((todo)=>{
	console.log(todo);
});
