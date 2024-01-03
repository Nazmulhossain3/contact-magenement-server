const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  number: Number,
  address: String,
  imageUrl: String,
  isFavorite: { type: Boolean, default: false },
});

const Contacts = mongoose.model("Contact", contactSchema);

module.exports = {
  Contacts,
};
