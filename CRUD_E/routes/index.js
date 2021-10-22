const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Product } = require('../models/product');
const { User } = require('../models/user');


// Reading (Getting) product
router.get('/api/prod', (req, res) => {
    Product.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


//Get product details by product_id API
router.get('/api/prod/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record With Given ID : ${req.params.id}`);

    Product.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

//  Creating product
router.post('/api/prod/add', (req, res) => {
  const prod = new Product({
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_quantity: req.body.product_quantity,
      user: req.body.user
  });
  prod.save((err, data) => {
      if(!err) {
          // res.send(data);
          res.status(200).json({code: 200, message: 'Added Succesfully',addProduct: data})
      } else { console.log(err);
      }
  });
});

// Updating product details

router.put('/api/prod/update/:id', (req, res) => {


  const prod = {
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_quantity: req.body.product_quantity,
    user: req.body.user
  };
  Product.findByIdAndUpdate(req.params.id, { $set: prod }, { new: true }, (err, data) => {
      if(!err) {
          res.status(200).json({code: 200, message: 'Employee Updated Successfully', updateEmployee: data})
      } else {
          console.log(err);
      }
  });
});


// Deleting product
router.delete('/api/prod/:id', (req, res) => {

  Product.findByIdAndRemove(req.params.id, (err, data) => {
      if(!err) {
          // res.send(data);
          res.status(200).json({code: 200, message: 'Succesfully deleted', deleteEmployee: data})
      } else {
          console.log(err);
      }
  });
});

// Save Employee
router.post('/api/user/add', (req, res) => {
  const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      product_purchased: req.body.product_purchased
  });
  user.save((err, data) => {
      if(!err) {
          // res.send(data);
          res.status(200).json({code: 200, message: 'user Added Successfully', addUser: data})
      } else {
         console.log(err);
      }
  });
});



module.exports = router;

