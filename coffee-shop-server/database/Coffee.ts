const DB = require("./db.json");

const getAllCoffees = () => {
  return DB;
};

module.exports = { getAllCoffees };