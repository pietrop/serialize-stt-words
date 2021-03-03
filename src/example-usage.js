const fs = require('fs');
const { deserializeTranscript, serializeTranscript } = require('./index.js');

const hours8 = require('../sample/input/mock8hours.json');

const { wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit } = serializeTranscript(hours8);

const desRes = deserializeTranscript({ wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit });

fs.writeFileSync('./sample/output/mock8hours-resDes.json', JSON.stringify(desRes));

// 8 hours -> 5mb without spaces
// 8 hours -> 12mb with spaces

//1 hour ->  1.1M with spaces
