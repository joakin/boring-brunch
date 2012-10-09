var View = require('views/base/view');
var template = require('views/templates/app');

var AppView = View.extend({
  template: template,
  el: 'body',
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
module.exports = AppView;

