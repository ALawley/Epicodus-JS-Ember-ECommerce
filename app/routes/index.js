import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('restaurant');
  },
  actions: {
    save3(params){
      var newRestaurant = this.store.createRecord('restaurant', params);
      newRestaurant.save();
    }
  }
});
