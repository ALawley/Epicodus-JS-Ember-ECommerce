import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions: {
    saveDish3(params){
      var newDish = this.store.createRecord('dish', params);
      var restaurant = params.restaurant;
      restaurant.get('dishes').addObject(newDish);
      newDish.save().then(function() {
        return restaurant.save();
      });
    },
    deleteRestaurant(restaurant){
      var dishDeletions = restaurant.get('dishes').map(function(dish) {
        return dish.destroyRecord();
      });
      Ember.RSVP.all(dishDeletions).then(function() {
        return restaurant.destroyRecord();
      });
      this.transitionTo('admin');
    },
    deleteDish(dish){
      dish.destroyRecord();
    }
  }
});
