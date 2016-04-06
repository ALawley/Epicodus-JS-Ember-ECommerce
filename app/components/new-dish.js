import Ember from 'ember';

export default Ember.Component.extend({
  addNewDish: false,
  actions: {
    dishFormShow(){
      this.set('addNewDish', true);
    },
    save1(){
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        rating: [4],
        restaurant: this.get('restaurant')
      }
      this.set('addNewDish', false);
      this.sendAction('save2', params);
    }
  }
});
