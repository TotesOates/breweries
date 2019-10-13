import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | breweries/brewery/beers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:breweries/brewery/beers');
    assert.ok(route);
  });
});
