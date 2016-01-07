import { excerpt } from '../../../helpers/excerpt';
import { module, test } from 'qunit';

module('Unit | Helper | excerpt');

test('it should return the first 15 chars of a string', function(assert) {
  const result = excerpt(['12345678901234567890']);
  assert.equal(result, '123456789012345...');
});
