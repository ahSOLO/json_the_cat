const request = require("request");

const fetchBreedDescription = function(breedname, callback) {

  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedname, (error, response, body) => {
    // Return if error is found
    if (error) {
      callback(error, null); // Print the error if one occurred.
      return;
    }
  
    // Return if non 200's status code is received
    if (response.statusCode > 299 || response.statusCode < 200) {
      callback(response && response.statusCode, null); // Print the non 200's status code
      return;
    }
  
    let jsonObj = JSON.parse(body);
  
    if (jsonObj[0] === undefined) {
      callback(null, "The breed you searched for was not found");
    } else {
      callback(null, jsonObj[0]["description"]);
    }
  });
};

module.exports = { fetchBreedDescription };