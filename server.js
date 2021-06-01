//Requires
const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
//const cors = require('cors');
//Static Routes 
var whitelist = ['http://t2bkqquo7h.execute-api.us-east-2.amazonaws.com', 'http://192.168.1.40']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS, Origin:' + origin))
    }
  }
}
//app.use(cors(corsOptions));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev')) // logging
//Main App Route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/shipping', (req, res, next) => req.    res.sendFile(path.join(__dirname, 'public/shipping.html')));
const port = 1337;
//Run Server
app.listen(process.env.PORT || port, () => console.log(chalk.blue(`Listening intently on port ${port}`)));