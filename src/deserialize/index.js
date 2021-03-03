/**
 *
 * @param {array} startList - list of numbers, time stamps in seconds. Start time for words or paragraphs.
 * @param {array} endList - list of numbers, time stamps in seconds. End time for words or paragraphs.
 * @param {array} labelList - a list of strings, either words, or speaker labels
 * @param {string} label - eg 'speaker' or 'text'
 * @return {array} array of objects, with 'start' 'end' time attribute and either 'speaker' or 'text' attributes
 */
function deSerialize(startList, endList, labelList, label) {
  return startList.map((start, index) => {
    return {
      // id: index,
      start: start,
      end: endList[index],
      [label]: labelList[index],
    };
  });

  // result = {};
  // result[label] = items;
  // return result;
}

/**
 *
 * @param {Object} param
 * @param {Array} param.wordStartTimes - list of Numbers, time stamps in seconds. Start time for words .
 * @param {Array} param.wordEndTimes - list of Numbers, time stamps in seconds. End time for words .
 * @param {Array} param.textList -  a list of Strings, word's text
 * @param {Array} param.paragraphStartTimes -list of Numbers, time stamps in seconds. Start time for paragraphs.
 * @param {Array} param.paragraphEndTimes - list of Numbers, time stamps in seconds. End time for paragraphs.
 * @param {Array} param.speakersLit  -  a list of Strings, speaker labels eg 'SPEAKER_1'
 */
function deserializeTranscript({ wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit }) {
  // TODO: should add a check that wordStartTimes, wordEndTimes, textList need to be same length
  // same for paragraphStartTimes, paragraphEndTimes, speakersLit
  const wordsDeserialized = deSerialize(wordStartTimes, wordEndTimes, textList, 'text');
  const paragraphsDeserialized = deSerialize(paragraphStartTimes, paragraphEndTimes, speakersLit, 'speaker');
  return { words: wordsDeserialized, paragraphs: paragraphsDeserialized };
}

module.exports.deSerialize = deSerialize;
module.exports.deserializeTranscript = deserializeTranscript;
