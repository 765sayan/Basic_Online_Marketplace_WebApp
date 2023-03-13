const express = require("express");
const router = express.Router();

const { auth } = require("../../middlewares/authMiddlewares");

const {
  allProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../../controllers/adminProductControllers");

const {
  adminUserType,
  userUserType,
} = require("../../middlewares/userTypeMiddleware");
const {
  buyProduct,
  seeOrderedProducts,
  getAllProducts,
} = require("../../controllers/userProductControllers");

router.get("", auth, adminUserType, allProducts);

router.post("", auth, adminUserType, addProduct);
router.delete("/:id", auth, adminUserType, deleteProduct);
router.put("/:id", auth, adminUserType, updateProduct);

router.post("/buy", auth, userUserType, buyProduct);
router.get("/buy", auth, userUserType, seeOrderedProducts);
router.get("/list", auth, userUserType, getAllProducts);

module.exports = router;
