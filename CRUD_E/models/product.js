const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
  product_name: {
      type: String,
      required:true
  }, 
  product_description: {
      type:String,
      required:true
  },
  product_quantity: {
      type:Number,
      required:true
  },
  user: {
      type:String,
      required:true
  }
});



module.exports = {Product}