import { Request, Response  } from 'express';
const coffeeService = require("./coffee.service");

const getAllCoffees = (req: Request, res: Response) => {
    const response = coffeeService.getAll();
    res.send({ status: "OK", data: response });
  };
  
  module.exports = {
    getAllCoffees
  };