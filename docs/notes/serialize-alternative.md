Alternative where serialization of word's text, start and end time are serialized togethere

```js
function serialize({ words }) {
  const serializedWords = words.map((word) => {
    return [word.start, word.end, word.text];
  });
  return {
    words: serializedWords,
  };
}
```

```js
function deSerialize({ words }) {
  const deserializedWords = words.map((word) => {
    const [start, end, text] = word;
    return { start, end, text };
  });
  return { words: deserializedWords };
}
```
