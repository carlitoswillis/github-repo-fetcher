const request = require('request');
// const config = require('../config.js');
// var

let getReposByUsername = (name, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };

  request.get(options, (err, data) => {
    // res.end(JSON.stringify(data));
    callback(data);
  });

}

module.exports.getReposByUsername = getReposByUsername;