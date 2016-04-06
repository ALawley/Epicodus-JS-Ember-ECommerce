import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  cuisine: DS.attr(),
  pricerange: DS.attr(),
  dishes: DS.hasMany('dish', {async:true})
});
