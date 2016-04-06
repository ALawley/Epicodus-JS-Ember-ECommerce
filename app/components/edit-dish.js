import Ember from 'ember';

export default Ember.Component.extend({
  editDish: false,
  actions: {
    editDishShow() {
      this.set('editDish', true);
    },
    editDish1(dish) {
      var params = {
        name: this.get('dish.name'),
        price: this.get('dish.price'),
        description: this.get('dish.description')
      };
      this.set('editDish', false);
      this.sendAction('editDish2', dish, params);
    }
  }
});
