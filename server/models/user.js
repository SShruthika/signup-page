const mongoose=require('mongoose')
const {schema} = mongoose

const userSchema = new Schema({
    name:String,
    email:{
        type: String,
        unique:true
    },
    password: String
})

const UserModel = mongoose.model('user',userSchema)

module.exports = UserModel;