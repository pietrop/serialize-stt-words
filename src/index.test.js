// const fs = require('fs');
// const { serialize, deSerialize } = require('./index.js');
const { deserializeTranscript, serializeTranscript } = require('./index.js');
const data = require('../sample/input/01062021trumpspeechsmall_v2_ec664k.json');

// const res = serialize(data);
// console.log(res);

// fs.writeFileSync('./sample/output/trumpspeechsmall-serialized.json', JSON.stringify(res));

// const res2 = deSerialize(res);
// fs.writeFileSync('./sample/output/trumpspeechsmall-deserialized.json', JSON.stringify(res2));

test('serialize --> deserialize --> shouldbe ===', () => {
  const res = serializeTranscript(data);
  const res2 = deserializeTranscript(res);
  // https://jestjs.io/docs/en/expect#tomatchobjectobject
  expect(data).toMatchObject(res2);
});
