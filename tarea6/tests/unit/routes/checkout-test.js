import { module, test } from 'qunit';
import { setupTest } from 'tarea6/tests/helpers';

module('Unit | Route | checkout', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:checkout');
    assert.ok(route);
  });
});
