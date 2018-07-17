var mongoose=require('mongoose');
var accSchema=new mongoose.Schema({
Name: {type: String},
Address: {type: String},
Contact: {type: Number},
Password: {type: String}

});
module.exports=mongoose.model('accounts',accSchema);