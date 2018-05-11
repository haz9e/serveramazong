'use strict';

var authService = require("../../services/AuthService");
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/products')
    .get(authService.authCheck, todoList.list_all_products)
    .post(authService.authCheck, todoList.create_a_product);


  app.route('/products/:productId')
    .get(authService.authCheck, todoList.read_a_product)
    .put(authService.authCheck, todoList.update_a_product)
    .delete(authService.authCheck, todoList.delete_a_product);
};
