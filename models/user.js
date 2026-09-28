let mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    name: String,
    email:{type: String, unique: true},
    password: String
    role:{                                                                               
        type: String,
        enum: ['HR','EMPLOYEE'],
        
    }
});