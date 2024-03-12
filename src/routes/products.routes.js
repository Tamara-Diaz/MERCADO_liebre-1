// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { list, detail }= require('../controllers/products');

/*** GET ALL PRODUCTS ***/ 
router.get('/',list); 

/*** GET ONE PRODUCT ***/ 
router.get('/Detalle/:id',detail); 

module.exports=router;