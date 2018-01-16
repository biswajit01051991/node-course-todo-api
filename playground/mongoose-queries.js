const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');


/*
var id='5a5ddbec6b8c8c5415cad8311';

if(!ObjectId.isValid(id))
{
	console.log('Id is not valid');
}
Todo.find({
	_id:id
}).then((todos)=>{
	console.log('Todos',todos);
});

Todo.findOne({
	_id:id
}).then((todo)=>{
	console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
	if(!todo)
	{
		console.log('Id not found');
	}
	console.log('Todo By Id',todo);
}).catch((e)=>{console.log(e);});
*/

var id='5a5c5f5aeee95c74125f2bd9';

if(!ObjectId.isValid(id))
{
	console.log('Id is not valid');
}

User.findById(id).then((user)=>{
	if(!user)
	{
		console.log('Unable to find user');
	}
	console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>{console.log(e);});