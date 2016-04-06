import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editRestaurant3(restaurant, params){
      this.sendAction('editRestaurant4', restaurant, params)
    }
  }
});
