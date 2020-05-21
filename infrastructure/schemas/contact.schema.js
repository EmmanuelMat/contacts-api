const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
     name: {
         type: String, 
         required: true, 
         maxlength: 20,
         minlength: 1 ,
         validate:{
            validator: function(v) {
                return  v && v.length > 0
            },
            message: "Name is required"
        }
        },
    lastname:  {
        type: String, 
        required: true, 
        maxlength: 20,
        minlength: 1 ,
        validate:{
            validator: function(v) {
                return  v && v.length > 0
            },
            message: "Last name is required"
        }
       },
    phonenumber: {
        type: String,
        minlength: 9,
        validate:{
            validator: function(v) {
                return  v && v.length > 9
            },
            message: "Phone number should be more than 10 digits"
        }
    },
    email: String,
    creattiondate: {
        type: Date,
        default: Date.now
    } 
})

module.exports = contactSchema;