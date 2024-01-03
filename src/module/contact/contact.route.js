const express = require('express');
const { createContact, getAllContract, updateContact, deleteContact, makeFavourite } = require('./contact.controller');
const route = express.Router()

route.post('/createContact', createContact )
route.get('/getAllContact', getAllContract)
route.put('/updateContact/:id',updateContact)
route.delete('/deleteContact/:id', deleteContact)
route.put('/makeFavourite/:id',makeFavourite )

module.exports = route