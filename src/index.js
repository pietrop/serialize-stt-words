const { serializeWords, serializeParagraphs, serializeTranscript } = require('./serialize');
const { deSerialize, deserializeTranscript } = require('./deserialize');

module.exports.serializeWords = serializeWords;
module.exports.serializeParagraphs = serializeParagraphs;
module.exports.deSerialize = deSerialize;
module.exports.deserializeTranscript = deserializeTranscript;
module.exports.serializeTranscript = serializeTranscript;
