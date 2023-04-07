module.exports={
    handelArr:function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject())
    },
    handelObj:function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose 
    }
}