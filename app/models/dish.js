import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  rating: DS.attr()
  restaurant: DS.belongsTo('restaurant', {async: true}),
});
