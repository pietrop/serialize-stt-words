const fs = require('fs');
const { deserializeTranscript, serializeTranscript } = require('./index.js');

const hours8 = require('../sample/input/mock8hours.json');

const { wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit } = serializeTranscript(hours8);

fs.writeFileSync(
  './sample/output/mock8hours-serialized2.json',
  JSON.stringify({ wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit })
);

fs.writeFileSync('./sample/output/parts/wordStartTimes.json', JSON.stringify({ wordStartTimes }));
fs.writeFileSync('./sample/output/parts/wordEndTimes.json', JSON.stringify({ wordEndTimes }));
fs.writeFileSync('./sample/output/parts/textList.json', JSON.stringify({ textList }));
fs.writeFileSync('./sample/output/parts/paragraphStartTimes.json', JSON.stringify({ paragraphStartTimes }));
fs.writeFileSync('./sample/output/parts/paragraphEndTimes.json', JSON.stringify({ paragraphEndTimes }));
fs.writeFileSync('./sample/output/parts/speakersLit.json', JSON.stringify({ speakersLit }));

const desRes = deserializeTranscript({ wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit });

fs.writeFileSync('./sample/output/mock8hours-resDes.json', JSON.stringify(desRes));
