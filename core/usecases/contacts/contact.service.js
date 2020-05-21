const context = require("../../../infrastructure/data/context");
function ContactService() {
    this.get= () => getContacts();
    this.getById= id => getContactById(id);
    this.create = data => createContact(data);
    this.update = data => updateContact(data);
    this.remove = id => removeContact(id);
}

async function getContacts(pageNumber = 1, pageSize = 10) {
  try {
    return await context.Contact.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
  } catch (err) {
    return new Error(err.message);
  }
}

async function getContactById(id) {
  try {
    const contact = await context.Contact.findById(id);
    if (!contact) return;
    return contact;
  } catch (err) {
    return new Error(err.message);
  }
}

async function createContact(data) {
  try {    
    const contact = await new context.Contact(data);
    return await contact.save();
  } catch (err) {
    return new Error(err.message);
  }
}

async function updateContact(data) {  
    try {
      const contact = await context.Contact.findById(data._id);            
      if (!contact) return;
      contact.set({
          name: data.name,
          lastname: data.lastname,
          phonenumber: data.phonenumber,
          email: data.email
      })
      return await contact.save();
    } catch (err) {
      return new Error(err.message);
    }
  }

  async function removeContact(id) {
        return await context.Contact.findByIdAndDelete(id)
  }
module.exports = ContactService