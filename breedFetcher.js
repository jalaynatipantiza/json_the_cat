const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(domain,(error,response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("breed not found", null);
      } else {
        callback(null, data[0].description);
      }
    }
  });

};

module.exports = { fetchBreedDescription };