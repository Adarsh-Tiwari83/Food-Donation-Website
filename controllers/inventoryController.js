const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;

    //validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("not a donar account");
    }
    if (inventoryType === "out" && user.role !== "organisation") {
      throw new Error("not an organisation account");
    }

    //save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(200).send({
      success: true,
      message: "new food record added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in create inventory api",
      error,
    });
  }
};

const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel.find({
      organisation: req.body.userId,
    });
    return res.status(200).send({
      success: true,
      message: "got all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in get inventory api",
    });
  }
};

module.exports = { createInventoryController, getInventoryController };
