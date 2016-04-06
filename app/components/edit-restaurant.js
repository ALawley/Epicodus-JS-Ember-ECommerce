import Ember from 'ember';

export default Ember.Component.extend({
  editRestaurant: false,
  actions: {
    editRestaurantShow() {
      this.set('editRestaurant', true);
    },
    editRestaurant1(restaurant) {
      var params = {
        name: this.get('restaurant.name'),
        pricerange: this.get('restaurant.pricerange'),
        description: this.get('restaurant.description'),
        cuisine: this.get('restaurant.cuisine')
      };
      this.set('editRestaurant', false);
      this.sendAction('editRestaurant2', restaurant, params);
    }
  }
});
