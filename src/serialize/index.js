/**
 * `serializeWords`
 * @param {array} words - list of word objects, with 'text','start' and 'end' attributes
 * @param {String} words.text - 'text' as String
 * @param {Number} words.start - 'start' as Number as a second
 * @param {Number} words.end - 'end' as Number as a second
 * @return {array} - 2D array of start times, end times, and text
 */
function serializeWords(words) {
  const textList = words.map(({ text }) => {
    return text;
  });
  const startList = words.map(({ start }) => {
    return start;
  });
  const endList = words.map(({ end }) => {
    return end;
  });
  return [startList, endList, textList];
}

/**
 * `serializeParagraphs`
 * @param {array} paragraphs - list of word objects, with 'text','start' and 'end' attributes
 * @param {String} paragraphs.text - 'text' as String
 * @param {Number} paragraphs.start - 'start' as Number as a second
 * @param {Number} paragraphs.end - 'end' as Number as a second
 * @return {array} - 2D array of start times, end times, and speaker labels
 */
function serializeParagraphs(paragraphs) {
  const speakerList = paragraphs.map(({ speaker }) => {
    return speaker;
  });
  const startList = paragraphs.map(({ start }) => {
    return start;
  });
  const endList = paragraphs.map(({ end }) => {
    return end;
  });
  return [startList, endList, speakerList];
}

/**
 *
 * @param {Object} param - transcript, contaning words and paragraphs
 * @param {array} param.words  - words list of objects
 * @param {Number} param.words[].start - timestamp in seconds
 * @param {Number} param.words[].end - timestamp in seconds
 * @param {String} param.words[].text - word's text
 * @param {array} param.paragraphs - paragraph list of objects
 * @param {Number} param.paragraphs[].start - timestamp in seconds
 * @param {Number} param.paragraphs[].end - timestamp in seconds
 * @param {String} param.paragraphs[].speaker  - speaker label text
 * @return
 */
function serializeTranscript({ words, paragraphs }) {
  const [wordStartTimes, wordEndTimes, textList] = serializeWords(words);
  const [paragraphStartTimes, paragraphEndTimes, speakersLit] = serializeParagraphs(paragraphs);
  return { wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit };
}

module.exports.serializeWords = serializeWords;
module.exports.serializeParagraphs = serializeParagraphs;
module.exports.serializeTranscript = serializeTranscript;
