const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

var password='123abc!';
/*bcrypt.genSalt(10,(err,salt)=>{
	bcrypt.hash(password,salt,(err,hash)=>{
		console.log(hash);
	});
});*/

var hashPassword='$2a$10$4fBnKBIaft80AIlltmIdIeJ2AygfNEK7pMF.4sXStqu0q57T7YHF6';
bcrypt.compare(password,hashPassword,(err,res)=>{
	console.log(res);
});
/*
var data={
	id:10
};
var token=jwt.sign(data,'bisu123');
console.log(token);
var decoded=jwt.verify(token,'bisu123');
console.log('Decoded',decoded);
*/

/*
var message='I am user number 3';
var hash=SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);




var data={
	id:4
};

var token={
	data,
	hash:SHA256(JSON.stringify(data)+'somesecret').toString()
};

var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();

//token.data.id=5;
//token.hash=SHA256(JSON.stringify(token.data)).toString();

if(token.hash === resultHash){
	console.log('Data is not change');
}else{
	console.log('Data is changed');
}

*/