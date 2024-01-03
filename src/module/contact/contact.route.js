const express = require('express');
const { createContact, getAllContract, updateContact } = require('./contact.controller');
const route = express.Router()

route.post('/createContact', createContact )
route.get('/getAllContact', getAllContract)
route.put('/updateContact/:id',updateContact)

module.exports = route