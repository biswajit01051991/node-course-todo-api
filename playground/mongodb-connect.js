//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');
//var obj=new ObjectId();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server ');
	/*db.collection('Todos').insertOne({
		text:'Something to do',
		completed:false
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});  
	
	//Insert new doc into Users(name,age,location)
	db.collection('Users').insertOne({
		name:'Biswajit Singha',
		age:27,
		location:'Kolkata'
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert users',err);
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	});*/
	
	db.close();
	
})