## `serialize-stt-words`

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

A module to serialize and deserialize words from STT in dpe format into arrays of each attribute.

<details>
  <summary>This is as a workaround to firebase 1mb limit.</summary>

eg with euristics if `mock8hours.json` is 8 hours and `9.6MB`

This is the breakdown of file size for each attribute saved seperately.

```
 58K paragraphEndTimes.json
 59K paragraphStartTimes.json
 93K speakersLit.json
637K textList.json
637K wordEndTimes.json
653K wordStartTimes.json
```

Well within the 1MB firebase document limit.

</details>

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/serialize-stt-words.git
```

```
cd serialize-stt-words
```

```
npm install
```

## Usage

<details>
  <summary>input transcript json</summary>

```json
{
    "words": [
        {
            "text": "Hello",
            "start": 0,
            "end": 0.88
        },
        ....
    ],
  "paragraphs": [
        {
            "speaker": "SPEAKER_B",
            "start": 0,
            "end": 1.24
        },
    ...
   ]
}
```

</details>

Returns arrays of

```
npm install @pietrop/serialize-stt-words
```

<details>
  <summary>Serialize</summary>

```js
const { serializeTranscript } = require('@pietrop/serialize-stt-words');
const { wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit } = serializeTranscript(transcript);
```

</details>

<details>
  <summary>output example</summary>

```json
{
    "wordStartTimes": [
        0,
        0.9,
        1.13,
        ...
    ],
  "wordEndTimes": [
        0.88,
        1.12,
        ...
    ],
    "textList": [
        "Media",
        "will",
        ...
    ],
    "paragraphStartTimes": [
        0,
        1.25,
        ...
    ],
    "paragraphEndTimes": [
        1.24,
        4,
        ...
    ],
    "speakersLit": [
        "SPEAKER_B",
        "SPEAKER_A",
        ...
    ]
}
```

The idea being that you could save each separate in a db and recombine later.

</details>

<details>
  <summary>Deserialize</summary>

```js
const { deserializeTranscript } = require('@pietrop/serialize-stt-words');
const desRes = deserializeTranscript({ wordStartTimes, wordEndTimes, textList, paragraphStartTimes, paragraphEndTimes, speakersLit });
```

</details>

<!-- ## System Architecture -->

<!-- _High level overview of system architecture_ -->

## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

<!-- [docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.1.0`
- [Node 12](https://nodejs.org/docs/latest-v12.x/api/)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

```
nvm use
```

<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

<!-- ## Build -->

<!-- _How to run build_ -->

## Tests

<!-- _How to carry out tests_ -->

```
npm test
```

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

```
npm run publish:public
```
