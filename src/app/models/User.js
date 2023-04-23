const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
  userName:{type:String},
  password:{type:Number}
},{
  collection:'user'
})
module.exports = mongoose.model('User', User);
