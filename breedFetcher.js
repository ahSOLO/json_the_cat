const arg = process.argv[2];
const request = require("request");

request("https://api.thecatapi.com/v1/breeds/search?q=" + arg, (error, response, body) => {
  // Return if error is found
  if (error) {
    console.log('error:', error); // Print the error if one occurred.
    return;
  }

  // Return if non 200's status code is received
  if (response.statusCode > 299 || response.statusCode < 200) {
    console.log('statusCode:', response && response.statusCode); // Print the non 200's status code
    return;
  }

  let jsonObj = JSON.parse(body);

  if (jsonObj[0] === undefined) {
    console.log("The breed you searched for was not found");
  } else {
    console.log(jsonObj[0]["description"]);
  }
});