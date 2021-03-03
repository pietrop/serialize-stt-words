const { deserializeTranscript, serializeTranscript } = require('./index.js');
const data = require('../sample/input/01062021trumpspeechsmall_v2_ec664k.json');

test('serialize --> deserialize --> shouldbe ===', () => {
  const res = serializeTranscript(data);
  const res2 = deserializeTranscript(res);
  // https://jestjs.io/docs/en/expect#tomatchobjectobject
  expect(data).toMatchObject(res2);
});
