
var AppView = require('views/app_view');

var AppRouter = Backbone.Router.extend({
  
  routes: {
    '': 'home'
  },

  home: function() {
    new AppView().render();
  }

});
module.exports = AppRouter;

