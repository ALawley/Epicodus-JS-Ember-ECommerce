import Ember from 'ember';

export default Ember.Component.extend({
  cartTotal: Ember.computed('shoppingCart.items.length', function() {
    var items = this.get('shoppingCart.items');
    var totalPrice = 0;
    items.forEach(function(item) {
      var price = parseFloat(parseFloat(item.get('price')).toFixed(2));
      totalPrice += price;
    });
    return parseFloat(Math.round(totalPrice * 100) /100).toFixed(2);
  }),

  totalDisplay: Ember.computed('shoppingCart.items.length', function() {
    if (this.get('shoppingCart.items.length') > 0) {
      return true;
    }
    return false;
  }),

  shoppingCart: Ember.inject.service(),

  actions: {
    remove(index) {
      this.get('shoppingCart').remove(index);
    }
  }
});
