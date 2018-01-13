const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err)
	{
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
/*	
	db.collection('Todos').findOneAndUpdate({
		_id:ObjectId('5a573d5ba1b59429e4b5d897')
	},{
		$set:{
			completed:true
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});
	
	*/
		db.collection('Users').findOneAndUpdate({
		_id:ObjectId('5a572d4cd9167013248c9cf2')
	},{
		$set:{
			name:"Biswajit Singha"
		},
		$inc:{
			age:1
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});
	
});