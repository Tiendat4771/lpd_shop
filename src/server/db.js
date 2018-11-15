const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
const connect = () => mongoose.connect('mongodb://tiendat4771:Tiendat200495@ds241493.mlab.com:41493/pld').then(
  () => {
    console.log('connected');
  },
  err => console.log(err)
);

module.exports = connect;
