const request = require('request');
const breedName = process.argv[2];
const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

request(domain,(error,response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("breed not found");
    } else {
      console.log(data[0].description);
      console.log(typeof body);
    }
  }
});