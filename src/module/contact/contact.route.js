const express = require('express');
const { createContact, getAllContract, updateContact, deleteContact } = require('./contact.controller');
const route = express.Router()

route.post('/createContact', createContact )
route.get('/getAllContact', getAllContract)
route.put('/updateContact/:id',updateContact)
route.delete('/deleteContact/:id', deleteContact)

module.exports = route