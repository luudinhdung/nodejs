const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  mongooseDelete = require('mongoose-delete');
var slug = require('mongoose-slug-generator');
const Course = new Schema({
  name: {type:String},
  description:{type:String,maxLength:255},
  image: {type:String,maxLength:255},
  videoID: {type:String},
  IdImage:{type:Number},
  slug:{type:String,slug:'name',unique:true}
},{
  timeseries:true
});
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ overrideMethods: 'all' });
module.exports = mongoose.model('Course', Course);
