import slug from '../../../utils/slug';
import { module, test } from 'qunit';

module('Unit | Utility | slug');

// Replace this with your real tests.
test('it makes slug from any string', function(assert) {
  const result = slug('Ember 2.0 version');
  assert.equal(result, 'Ember_20_version');
});
