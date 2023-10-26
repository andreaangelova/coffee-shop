import express from 'express';
const coffeeController = require("./coffee.controller");

const router = express.Router();

router.get("/", coffeeController.getAllCoffees);

module.exports = router;