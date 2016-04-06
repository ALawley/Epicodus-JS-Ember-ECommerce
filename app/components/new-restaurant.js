import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    restaurantFormShow(){
      this.set('addNewRestaurant', true);
    },
    saveRestaurant1(){
      var params = {
        name: this.get('name') ? this.get('name') : "",
        location: this.get('location') ? this.get('location') : "",
        cuisine: this.get('cuisine') ? this.get('cuisine') : "",
        pricerange: this.get('pricerange') ? this.get('pricerange') : ""
      }
      this.set('addNewRestaurant', false);
      this.sendAction('saveRestaurant2', params);
    }
  }
});
