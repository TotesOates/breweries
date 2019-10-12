import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | breweries/brewery/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:breweries/brewery/index');
    assert.ok(route);
  });
});
