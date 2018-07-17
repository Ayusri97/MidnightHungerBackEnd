var mongoose=require('mongoose');
var contactSchema=new mongoose.Schema({
Name: {type: String},
Phone: {type: Number},
Email: {type: String},
Message: {type: String}

});
module.exports=mongoose.model('contact',contactSchema);