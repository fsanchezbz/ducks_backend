const mongoose = require('mongoose');

console.log(process.env.MONGO_URI)

module.exports = () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));
