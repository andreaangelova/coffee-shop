const baseUrl = 'http://localhost:8000/api/v1/coffee';
// TODO: get api url from env file

const getAllCoffees = async () => {
    let response = await fetch(baseUrl);
    let responseParsed = await response.json();
    return responseParsed.data;
    // TODO: handle errors
  };

const CoffeeService = {
    getAllCoffees
};

export default CoffeeService;