const express = require('express');
const route =  express();
const ContactService  = require('../../core/usecases/contacts/contact.service');
const context = require('../../infrastructure/data/context');
const service = new ContactService(context)

route.get('/', async (req, res) => {
     const mod = await service.get();
     res.send(mod);
})

route.get('/:id', async (req, res) => {
    try{
    const mod = await service.getById(req.params.id)
    if(!mod.id) res.status(404).send('Not found');
    res.send(mod);
    } catch(err) {
        return new Error(err)
    }
})

route.post('/', async (req, res) => {
    try {
        const contact = await service.create(req.body)        
        res.send(contact);
    } catch (err) {
        return new Error(err)
    }
})

route.put('/', async (req, res) => {
    try {
        const contact = await service.update(req.body)                
        res.send(contact);
    } catch (err) {
        return new Error(err)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const contact = await service.remove(req.params.id)                
        res.send(contact);
    } catch (err) {
        return new Error(err)
    }
})

module.exports = route;