import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteDish(dish){
      this.sendAction('deleteDish', dish);
    }
  }
});
