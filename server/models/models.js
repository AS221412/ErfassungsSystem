const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    vorname: {
      type: String,
      required: true
    },
    Adresse: {
      type: String,
      required: true
    },
    Preis: {
      type: String,
      required: true
    }

  }
);

const Customer = mongoose.model("Customer", CustomerSchema)

module.exports = Customer;