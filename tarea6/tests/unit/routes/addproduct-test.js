import { module, test } from 'qunit';
import { setupTest } from 'tarea6/tests/helpers';

module('Unit | Route | addproduct', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:addproduct');
    assert.ok(route);
  });
});
