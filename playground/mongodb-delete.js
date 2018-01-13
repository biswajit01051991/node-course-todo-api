const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err)
	{
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	//delete Many
/*
	db.collection('Todos').deleteMany({text:"Eating launch"}).then((result)=>{
	console.log(result);	
	},(err)=>{
		console.log('Unable to delete todos item',err);
	});*/
	
	//delete One
	
		/*db.collection('Todos').deleteOne({text:"Eat launch"}).then((result)=>{
	console.log(result);	
	},(err)=>{
		console.log('Unable to delete todos item',err);
	});*/
	//findOneAndDelete
	/*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	console.log(result);	
	},(err)=>{
		console.log('Unable to delete todos item',err);
	});*/
	
	//db.collection('Users').deleteMany({name:"Biswajit Singha"});
	db.collection('Users').findOneAndDelete({_id:new ObjectId('5a5605acaf191e10981717fe')}).then((result)=>{
	console.log(result);	
	},(err)=>{
		console.log('Unable to delete todos item',err);
	});
	
	//db.close()
});