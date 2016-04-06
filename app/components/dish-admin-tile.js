import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteDish(dish){
      this.sendAction('deleteDish', dish);
    },
    editDish3(dish, params) {
      this.sendAction('editDish4', dish, params);
    }
  }
});
