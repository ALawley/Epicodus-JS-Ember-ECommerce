import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dish-admin-tile', 'Integration | Component | dish admin tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dish-admin-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dish-admin-tile}}
      template block text
    {{/dish-admin-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
