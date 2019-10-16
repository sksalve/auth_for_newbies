const monk = require("monk");

URI =
  "mongodb+srv://sksalve:sksalve@mumbai-in-gbcv7.mongodb.net/test?retryWrites=true&w=majority";
const db = monk(URI);

module.exports = db;
