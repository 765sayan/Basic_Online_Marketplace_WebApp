const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const allProducts = asyncHandler(async (req, res, next) => {
  if (req.user) {
    try {
      const id = req.user.id;
      try {
        const products = await Product.find({ seller: id });
        if (products.length !== 0) {
          res.json({ products: products });
        } else {
          res.json({ products: null });
        }
      } catch (error) {
        return res.json({ msg: "error getting products" });
      }
    } catch (error) {
      return res.json({ msg: "error getting user" });
    }
  } else {
    return res.json({ msg: "no user" });
  }
});

const addProduct = asyncHandler(async (req, res, next) => {
  if (req.user && req.body) {
    try {
      const id = req.user.id;
      const data = req.body;
      const newProduct = {
        name: data.name,
        seller: id,
      };
      try {
        const product = await Product.create(newProduct);
        let response = {
          productname: product.name,
          productseller: product.seller,
        };
        res.json(response);
      } catch (error) {
        return res.json({ msg: "error new product" });
      }
    } catch (error) {
      return res.json({ msg: "error getting user" });
    }
  } else {
    return res.json({ msg: "error" });
  }
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  if (req.user) {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      await product.delete();
      return res.json({
        productid: productId,
      });
    } catch (error) {
      return res.json({ msg: "Product not deleted" });
    }
  } else {
    res.json({ msg: "no user" });
  }
});

const updateProduct = asyncHandler(async (req, res, next) => {
  if (req.user && req.body) {
    const productId = req.params.id;
    const data = req.body;
    try {
      const product = await Product.findById(productId);
      product.name = data.name;
      await product.save();
      res.json({ product });
    } catch (error) {
      return res.json({ msg: "product not updated" });
    }
  } else {
    res.json({ msg: "no user" });
  }
});

module.exports = { allProducts, addProduct, deleteProduct, updateProduct };
