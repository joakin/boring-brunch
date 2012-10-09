
var AppRouter = require('app_router');

var App = (function() {
  var router = null;

  var setRouters = function() {
    router = new AppRouter();
  };

  var startHistory = function() {
    Backbone.history.start({ pushState: true });
  };

  var init = function() {
    setRouters();
    startHistory();
  };

  return {
    init: init
  };
})();
module.exports = App;

