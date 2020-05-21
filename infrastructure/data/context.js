const mongoose = require('mongoose');
const appSettings = require('../../config/development.json');
const contactSchema = require('../schemas/contact.schema')

mongoose
   .connect(appSettings.context.connectionstring,  {useNewUrlParser: true})
    const Contact = mongoose.model("Contact", contactSchema)


module.exports ={ 
    Contact
};