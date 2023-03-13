const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const ProductsOrdered = require("../models/productsOrderedModel");

const getAllProducts = asyncHandler(async (req, res, next) => {
  if (req.user) {
    try {
      const products = await Product.find();

      res.json({
        products: products,
      });
    } catch (error) {
      res.json({ msg: "did not get products" });
    }
  } else {
    res.json({ msg: "no user" });
  }
});

const buyProduct = asyncHandler(async (req, res, next) => {
  if (req.user && req.body) {
    const productId = req.body.productid;
    try {
      const product = await Product.findById(productId);
      try {
        const productsOrdered = await ProductsOrdered.create({
          productid: product.id,
          userid: req.user.id,
          sellerid: product.seller,
        });

        return res.json(productsOrdered);
      } catch (error) {
        return res.json({ msg: "products not ordered" });
      }
    } catch (error) {
      res.json({ msg: "product not found" });
    }
  } else {
    res.json({ msg: "no user" });
  }
});

const seeOrderedProducts = asyncHandler(async (req, res, next) => {
  if (req.user) {
    const id = req.user.id;
    try {
      const productsOrdered = await ProductsOrdered.find({ userid: id });
      res.json({
        prductsordered: productsOrdered,
      });
    } catch (error) {
      res.json({ msg: "did not get products ordered" });
    }
  } else {
    res.json({ msg: "no user" });
  }
});

module.exports = { getAllProducts, buyProduct, seeOrderedProducts };
