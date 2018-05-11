'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
product:[{
      id: {
      type: String,
      required: 'Enter the id of the product'
    },
      name: {
      type: String,
      required: 'Enter the name of the product'
    },
      imageUrl: {
      type: String,
      default: 'C:/images'
    },
      image: {
      type: String,
      default: 'C:/images'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    item_code: {
      type: String,
      required: 'Enter the item_code of the product'
    },
      quantity: {
      type: String,
      required: 'Enter the quantity of the product'
    },
      price: {
      type: String,
      required: 'Enter the price of the product'
    },
      currency: {
      type: String,
      required: 'Enter the currency of the product'
    },
      color: {
      type: String,
      required: 'Enter the color of the product'
    },
      otherSpec: {
      type: String,
      default: 'no spec'
    }
  }]
});
module.exports = mongoose.model('Products', ProductSchema);
