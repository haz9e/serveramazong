require('localenv');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3300,
  mongoose = require('mongoose'),
  Product = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://admin:root@cluster0-xujpu.mongodb.net/test');
mongoose.connect('mongodb+srv://admin:root@cluster0-qj0bf.mongodb.net/test');



// mongoose.connect(process.env.DB_URL);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
