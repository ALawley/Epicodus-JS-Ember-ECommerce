import Ember from 'ember';

export default Ember.Component.extend({
  cartTotal: Ember.computed('shoppingCart.items.length', function() {
    var items = this.get('shoppingCart.items');
    var totalPrice = 0;
    items.forEach(function(item) {
      var price = parseFloat(parseFloat(item.get('price')).toFixed(2));
      console.log(price);
      totalPrice += price;
    });
    return parseFloat(Math.round(totalPrice * 100) /100).toFixed(2);
  }),

  shoppingCart: Ember.inject.service(),
});
