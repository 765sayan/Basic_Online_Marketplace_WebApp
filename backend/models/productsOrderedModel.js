const mongoose = require("mongoose");

const productsOrderedSchema = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  sellerid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("ProductsOrdered", productsOrderedSchema);
