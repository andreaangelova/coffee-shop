const Coffee = require("./../database/Coffee");

const getAll = () => {
    const allCoffees = Coffee.getAllCoffees();
    return allCoffees;
  };
  
  module.exports = {
    getAll,
  };