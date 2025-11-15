function isMari(text) {
  return /[\u0400-\u04FF]/.test(text);
}

// hi hacker, obviously when we publish it the lemmas will be on sql lol
const dictionary = {
  en: {
    "water": {
      canonical: "water",
      pronunciation: "/ˈwɔː.tər/",
      topic: "nature",
      forms: ["water"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid essential for life",
          translation: "шӱдыр",
          examples: [
            { en: "Drink clean water.", mhr: "Пий чистай шӱдырым." },
            { en: "The well has fresh water.", mhr: "Колодець шӱдырым пуло." }
          ],
          derivatives: [
            { word: "water bottle", translation: "шӱдыр пуло" }
          ],
          grammar: { plural: "water" }
        }
      ]
    },
    "go": {
      canonical: "go",
      pronunciation: "/ɡoʊ/",
      topic: "action",
      forms: ["go", "goes", "went", "gone", "going"],
      senses: [
        {
          pos: "verb",
          definition: "move from one place to another",
          translation: "чылаш",
          examples: [
            { en: "I go to school.", mhr: "Мон школась чылаш." },
            { en: "He went to the market.", mhr: "Ине базарось чылазы." }
          ],
          derivatives: [
            { word: "goer", translation: "чылашы" }
          ],
          grammar: {
            past: "чылазы",
            present: "чылаш",
            future: "чылан"
          }
        }
      ]
    },
    "good": {
      canonical: "good",
      pronunciation: "/ɡʊd/",
      topic: "evaluation",
      senses: [
        {
          pos: "adjective",
          definition: "of high quality or desirable",
          translation: "пӧлы",
          examples: [
            { en: "This is good food.", mhr: "Теня пӧлы кедьсэ." },
            { en: "She is a good person.", mhr: "Теня пӧлы эряви." }
          ],
          derivatives: [
            { word: "goodness", translation: "пӧлысь" }
          ],
          grammar: { comparative: "пӧлырак", superlative: "пӧлыракс" }
        }
      ]
    },
    "thank you": {
      canonical: "thank you",
      pronunciation: "/θæŋk juː/",
      topic: "social",
      senses: [
        {
          pos: "fixed expression",
          definition: "expression of gratitude",
          translation: "пасиб",
          examples: [
            { en: "Thank you for your help.", mhr: "Пасиб тонь ломаткс." },
            { en: "Say thank you!", mhr: "Пасиб кай!" }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "house": {
      canonical: "house",
      pronunciation: "/haʊs/",
      topic: "housing",
      forms: ["house", "houses"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "куду",
          examples: [
            { en: "My house is big.", mhr: "Монь кудом вейке." },
            { en: "They built a new house.", mhr: "Ине вейкекс кудо вийнезы." }
          ],
          derivatives: [
            { word: "household", translation: "кудулга" }
          ],
          grammar: { plural: "кудот" }
        }
      ]
    },
    "eat": {
      canonical: "eat",
      pronunciation: "/iːt/",
      topic: "food",
      forms: ["eat", "eats", "ate", "eaten", "eating"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "пийдеш",
          examples: [
            { en: "We eat rice.", mhr: "Ми рис пийдеш." },
            { en: "He ate bread.", mhr: "Ине лов пийдезы." }
          ],
          derivatives: [
            { word: "eater", translation: "пийдешы" }
          ],
          grammar: {
            past: "пийдезы",
            present: "пийдеш",
            future: "пийден"
          }
        }
      ]
    },
    "big": {
      canonical: "big",
      pronunciation: "/bɪɡ/",
      topic: "size",
      senses: [
        {
          pos: "adjective",
          definition: "of considerable size",
          translation: "вейке",
          examples: [
            { en: "A big tree.", mhr: "Вейке мода." },
            { en: "The city is big.", mhr: "Город вейке." }
          ],
          derivatives: [
            { word: "bigness", translation: "вейкесь" }
          ],
          grammar: { comparative: "вейкерак", superlative: "вейкеракс" }
        }
      ]
    },
    "hello": {
      canonical: "hello",
      pronunciation: "/həˈloʊ/",
      topic: "social",
      senses: [
        {
          pos: "fixed expression",
          definition: "greeting",
          translation: "урожамс",
          examples: [
            { en: "Hello, how are you?", mhr: "Урожамс, морамс?" },
            { en: "Say hello to her.", mhr: "Теня урожамс кай!" }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "book": {
      canonical: "book",
      pronunciation: "/bʊk/",
      topic: "education",
      forms: ["book", "books"],
      senses: [
        {
          pos: "noun",
          definition: "collection of written pages",
          translation: "книга",
          examples: [
            { en: "Read this book.", mhr: "Теня книга читамс." },
            { en: "I have many books.", mhr: "Мон много книгат." }
          ],
          derivatives: [
            { word: "notebook", translation: "тетрадь" }
          ],
          grammar: { plural: "книгат" }
        }
      ]
    },
    "fire": {
      canonical: "fire",
      pronunciation: "/faɪər/",
      forms: ["fire", "fires", "fired", "firing"],
      senses: [
        {
          pos: "noun",
          topic: "nature",
          definition: "burning material that produces heat and light",
          translation: "пал",
          examples: [
            { en: "Be careful with the fire.", mhr: "Палын варчамс." },
            { en: "The fire is warm.", mhr: "Палын сюро." }
          ],
          derivatives: [
            { word: "campfire", translation: "лагерь пал" }
          ],
          grammar: { plural: "палыт" }
        },
        {
          pos: "verb",
          topic: "employment",
          definition: "dismiss someone from a job",
          translation: "работась лисемс",
          examples: [
            { en: "They fired him for being late.", mhr: "Ине лемезь работась лисезы." },
            { en: "She was fired last week.", mhr: "Теня проштынь неделясь работась лисезы." }
          ],
          derivatives: [
            { word: "firing", translation: "работась лисемасть" }
          ],
          grammar: {
            past: "fired",
            pastParticiple: "fired",
            presentParticiple: "firing",
            thirdPerson: "fires"
          }
        }
      ]
    }
  },
  mhr: {
    "шӱдыр": {
      canonical: "шӱдыр",
      pronunciation: "/ʃydyr/",
      topic: "nature",
      cefr: "A1",
      forms: ["шӱдыр", "шӱдырын", "шӱдырыт"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid essential for life",
          translation: "water",
          examples: [
            { en: "Water is life.", mhr: "Шӱдыр — эрьва." },
            { en: "Give me water.", mhr: "Монь шӱдырын анай." }
          ],
          derivatives: [
            { word: "шӱдыр пуло", translation: "water bottle" }
          ],
          grammar: { genitive: "шӱдырын", plural: "шӱдырыт" }
        }
      ]
    },
    "чылаш": {
      canonical: "чылаш",
      pronunciation: "/tʃylaʃ/",
      topic: "action",
      cefr: "A1",
      forms: ["чылаш", "чылазы", "чылан"],
      senses: [
        {
          pos: "verb",
          definition: "move from one place to another",
          translation: "go",
          examples: [
            { en: "Go home!", mhr: "Кудось чылаш!" },
            { en: "I will go tomorrow.", mhr: "Мон завран чылан." }
          ],
          derivatives: [
            { word: "чылашы", translation: "goer" }
          ],
          grammar: {
            present: "чылаш",
            past: "чылазы",
            future: "чылан"
          }
        }
      ]
    },
    "пӧлы": {
      canonical: "пӧлы",
      pronunciation: "/pølɨ/",
      topic: "evaluation",
      cefr: "A1",
      senses: [
        {
          pos: "adjective",
          definition: "of high quality or desirable",
          translation: "good",
          examples: [
            { en: "Good morning!", mhr: "Пӧлы утсо!" },
            { en: "This is good.", mhr: "Теня пӧлы." }
          ],
          derivatives: [
            { word: "пӧлысь", translation: "goodness" }
          ],
          grammar: { comparative: "пӧлырак", superlative: "пӧлыракс" }
        }
      ]
    },
    "пасиб": {
      canonical: "пасиб",
      pronunciation: "/pasib/",
      topic: "social",
      cefr: "A1",
      senses: [
        {
          pos: "fixed expression",
          definition: "expression of gratitude",
          translation: "thank you",
          examples: [
            { en: "Thank you very much.", mhr: "Пасиб мезе." },
            { en: "You're welcome.", mhr: "Савамс." }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "куду": {
      canonical: "куду",
      pronunciation: "/kudu/",
      topic: "housing",
      cefr: "A1",
      forms: ["куду", "кудосо", "кудот"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "house",
          examples: [
            { en: "My house is here.", mhr: "Монь кудом ине." },
            { en: "Build a house.", mhr: "Кудо вийнемс." }
          ],
          derivatives: [
            { word: "кудулга", translation: "household" }
          ],
          grammar: { inessive: "кудосо", plural: "кудот" }
        }
      ]
    },
    "пийдеш": {
      canonical: "пийдеш",
      pronunciation: "/pijdeʃ/",
      topic: "food",
      cefr: "A1",
      forms: ["пийдеш", "пийдезы", "пийден"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "eat",
          examples: [
            { en: "Eat your food.", mhr: "Тонь кедьсэ пийдеш." },
            { en: "I ate bread.", mhr: "Мон лов пийдезы." }
          ],
          derivatives: [
            { word: "пийдешы", translation: "eater" }
          ],
          grammar: {
            present: "пийдеш",
            past: "пийдезы",
            future: "пийден"
          }
        }
      ]
    },
    "вейке": {
      canonical: "вейке",
      pronunciation: "/vejke/",
      topic: "size",
      cefr: "A1",
      senses: [
        {
          pos: "adjective",
          definition: "of considerable size",
          translation: "big",
          examples: [
            { en: "Big mountain.", mhr: "Вейке лей." },
            { en: "She is big.", mhr: "Теня вейке." }
          ],
          derivatives: [
            { word: "вейкесь", translation: "bigness" }
          ],
          grammar: { comparative: "вейкерак", superlative: "вейкеракс" }
        }
      ]
    },
    "урожамс": {
      canonical: "урожамс",
      pronunciation: "/uroʒams/",
      topic: "social",
      cefr: "A1",
      senses: [
        {
          pos: "fixed expression",
          definition: "greeting",
          translation: "hello",
          examples: [
            { en: "Hello, friend!", mhr: "Урожамс, ялгамс!" },
            { en: "Say hello.", mhr: "Урожамс кай." }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "книга": {
      canonical: "книга",
      pronunciation: "/knʲiga/",
      topic: "education",
      cefr: "A1",
      forms: ["книга", "книгасо", "книгат"],
      senses: [
        {
          pos: "noun",
          definition: "collection of written pages",
          translation: "book",
          examples: [
            { en: "This book is interesting.", mhr: "Теня книга интересной." },
            { en: "I read a book.", mhr: "Мон книга читазы." }
          ],
          derivatives: [
            { word: "тетрадь", translation: "notebook" }
          ],
          grammar: { adessive: "книгасо", plural: "книгат" }
        }
      ]
    },
    "пал": {
      canonical: "пал",
      pronunciation: "/pal/",
      topic: "nature",
      cefr: "A2",
      forms: ["пал", "палын", "палыт"],
      senses: [
        {
          pos: "noun",
          definition: "burning material that produces heat and light",
          translation: "fire",
          examples: [
            { en: "The fire is out.", mhr: "Палын сюро." },
            { en: "Make a fire.", mhr: "Пал вийнемс." }
          ],
          derivatives: [
            { word: "лагерь пал", translation: "campfire" }
          ],
          grammar: { genitive: "палын", plural: "палыт" }
        }
      ]
    }
  }
};

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const directionBtns = document.querySelectorAll('.direction-btn');
const randomBtn = document.getElementById('randomBtn');
const exerciseBtn = document.getElementById('exerciseBtn');
const filterModal = document.getElementById('filterModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const exerciseModal = document.getElementById('exerciseModal');
const closeExerciseModal = document.getElementById('closeExerciseModal');
const virtualKeyboard = document.getElementById('virtualKeyboard');
const keyboardToggleBtn = document.getElementById('keyboardToggleBtn');
let currentDirection = 'en-mhr';

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRandomWord() {
  const dict = currentDirection === 'en-mhr' ? dictionary.en : dictionary.mhr;
  const words = Object.keys(dict);
  return words[Math.floor(Math.random() * words.length)];
}

function hasLemma(word, direction) {
  const dict = direction === 'en-mhr' ? dictionary.en : dictionary.mhr;
  return !!dict[word];
}

function searchExamples(query, direction) {
  const dict = direction === 'en-mhr' ? dictionary.en : dictionary.mhr;
  const results = [];
  for (let word in dict) {
    const entry = dict[word];
    (entry.senses || [entry]).forEach(sense => {
      sense.examples.forEach(example => {
        const textToSearch = direction === 'en-mhr' ? example.en : example.mhr;
        if (textToSearch.toLowerCase().includes(query)) {
          results.push({
            lemma: word,
            exampleText: example[direction === 'en-mhr' ? 'en' : 'mhr'],
            translationText: example[direction === 'en-mhr' ? 'mhr' : 'en']
          });
        }
      });
    });
  }
  return results;
}

function renderEntry(lemma, entry, direction) {
  const isHeadwordMari = isMari(entry.canonical);
  let sensesHtml = '';

  if (entry.senses && entry.senses.length > 1) {
    sensesHtml = entry.senses.map((sense, index) => {
      const senseData = sense;
      let examplesHtml = sense.examples.map(example => {
        return `
          <li class="example-item">
            <span class="example-original">${escapeHtml(example.en)}</span>
            <span class="example-translation">${escapeHtml(example.mhr)}</span>
          </li>
        `;
      }).join('');

      let grammarHtml = '';
      if (sense.grammar && Object.keys(sense.grammar).length > 0) {
        grammarHtml = `<ul class="grammar-list">`;
        for (let key in sense.grammar) {
          grammarHtml += `
            <li class="grammar-item">
              <span class="grammar-label">${key}:</span>
              ${escapeHtml(sense.grammar[key])}
            </li>
          `;
        }
        grammarHtml += `</ul>`;
      }

      let derivativesHtml = sense.derivatives.map(derivative => {
        const hasEntry = hasLemma(derivative.word, direction);
        const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
        const translationClass = isMari(derivative.translation) ? 'mari' : '';
        return `
          <div class="derivative-item">
            <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
            <div class="derivative-translation ${translationClass}">${escapeHtml(derivative.translation)}</div>
          </div>
        `;
      }).join('');

      const translationClass = isMari(senseData.translation) ? 'mari' : '';

      const sensePos = senseData.pos || entry.pos;
      const senseTopic = senseData.topic || entry.topic;

      let senseTagsHtml = '';
      if (sensePos) {
        senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
      }
      if (senseTopic) {
        senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
      }

      return `
        <div class="sense-item">
          <div class="tags-container">${senseTagsHtml}</div>
          <span class="sense-number">${index + 1}.</span>
          <span class="sense-definition">${escapeHtml(senseData.definition)}</span>
          <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
          <div class="section-title">Examples</div>
          <ul class="examples-list">
            ${examplesHtml}
          </ul>
          <div class="section-title">Grammar</div>
          ${grammarHtml}
          <div class="section-title">Derivatives</div>
          <div class="derivatives-list">
            ${derivativesHtml}
          </div>
        </div>
      `;
    }).join('');
  } else {
    const senseData = entry.senses ? entry.senses[0] : entry;
    let examplesHtml = senseData.examples.map(example => {
      return `
        <li class="example-item">
          <span class="example-original">${escapeHtml(example.en)}</span>
          <span class="example-translation">${escapeHtml(example.mhr)}</span>
        </li>
      `;
    }).join('');

    let grammarHtml = '';
    if (senseData.grammar && Object.keys(senseData.grammar).length > 0) {
      grammarHtml = `<ul class="grammar-list">`;
      for (let key in senseData.grammar) {
        grammarHtml += `
          <li class="grammar-item">
            <span class="grammar-label">${key}:</span>
            ${escapeHtml(senseData.grammar[key])}
          </li>
        `;
      }
      grammarHtml += `</ul>`;
    }

    let derivativesHtml = senseData.derivatives.map(derivative => {
      const hasEntry = hasLemma(derivative.word, direction);
      const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
      const translationClass = isMari(derivative.translation) ? 'mari' : '';
      return `
        <div class="derivative-item">
          <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
          <div class="derivative-translation ${translationClass}">${escapeHtml(derivative.translation)}</div>
        </div>
      `;
    }).join('');

    const translationClass = isMari(senseData.translation) ? 'mari' : '';

    const sensePos = senseData.pos || entry.pos;
    const senseTopic = senseData.topic || entry.topic;

    let senseTagsHtml = '';
    if (sensePos) {
      senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
    }
    if (senseTopic) {
      senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
    }

    sensesHtml = `
      <div class="sense-item">
        <div class="tags-container">${senseTagsHtml}</div>
        <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
        <div class="section-title">Examples</div>
        <ul class="examples-list">
          ${examplesHtml}
        </ul>
        <div class="section-title">Grammar</div>
        ${grammarHtml}
        <div class="section-title">Derivatives</div>
        <div class="derivatives-list">
          ${derivativesHtml}
        </div>
      </div>
    `;
  }

  let cefrHtml = '';
  if (entry.cefr && currentDirection === 'mhr-en') {
    cefrHtml = `<div class="tags-container" style="position:absolute; right:0; top:0;"><button class="level-tag" onclick="showFilterList('cefr', '${entry.cefr}')">${entry.cefr.toUpperCase()}</button></div>`;
  }

  return `
    <div class="entry" style="position:relative;">
      ${cefrHtml}
      <div class="headword ${isHeadwordMari ? 'mari' : ''}">${escapeHtml(entry.canonical)}</div>
      <div class="pronunciation">${escapeHtml(entry.pronunciation)}</div>
      ${sensesHtml}
    </div>
  `;
}

function handleTranslationClick(translationWord) {
  const newDirection = currentDirection === 'en-mhr' ? 'mhr-en' : 'en-mhr';
  showResult(translationWord, newDirection);
  directionBtns.forEach(btn => {
    if (btn.getAttribute('data-direction') === newDirection) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  currentDirection = newDirection;
  searchInput.value = translationWord;
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showResult(lemma, forcedDirection = null) {
  const direction = forcedDirection || currentDirection;
  const query = lemma.toLowerCase().trim();

  let entry = null;
  if (direction === 'en-mhr') {
    entry = dictionary.en[query];
  } else {
    entry = dictionary.mhr[query];
  }

  if (entry) {
    resultsContainer.innerHTML = renderEntry(lemma, entry, direction);
    attachEventListeners();
    return;
  }

  const dict = direction === 'en-mhr' ? dictionary.en : dictionary.mhr;
  let foundLemma = null;

  for (let word in dict) {
    const wordEntry = dict[word];
    if (wordEntry && wordEntry.forms && Array.isArray(wordEntry.forms)) {
      if (wordEntry.forms.map(f => f.toLowerCase()).includes(query)) {
        foundLemma = word;
        entry = wordEntry;
        break;
      }
    }
  }

  if (foundLemma) {
    resultsContainer.innerHTML = renderEntry(foundLemma, entry, direction);
    attachEventListeners();
    return;
  }

  const foundInExamples = searchExamples(query, direction);

  if (foundInExamples.length > 0) {
    let examplesHtml = foundInExamples.map(item => {
      const escapedQuery = escapeHtml(query);
      const escapedExample = escapeHtml(item.exampleText);
      const highlightedExample = escapedExample.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<span class="lemma-highlight">$1</span>');
      return `
        <div class="example-match-item">
          <div class="example-original">${highlightedExample}</div>
          <div class="example-translation">${escapeHtml(item.translationText)}</div>
          <button class="goto-lemma-btn" data-word="${item.lemma}"> → View "${item.lemma}" entry</button>
        </div>
      `;
    }).join('');

    resultsContainer.innerHTML = `
      <div class="no-result">
        <p>No lemma found for "${escapeHtml(lemma)}", but it appears in the following example(s):</p>
        <div class="examples-in-context">${examplesHtml}</div>
      </div>
    `;
    attachExampleMatchListeners();
  } else {
    resultsContainer.innerHTML = `<div class="no-result">No entry found for "${escapeHtml(lemma)}"</div>`;
  }
}

function attachEventListeners() {
  document.querySelectorAll('.derivative-word.linkable').forEach(wordEl => {
    wordEl.addEventListener('click', (e) => {
      e.preventDefault();
      const word = wordEl.getAttribute('data-word');
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function attachExampleMatchListeners() {
  document.querySelectorAll('.goto-lemma-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const word = btn.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function showFilterList(type, value) {
  filterModal.style.display = 'block';
  modalTitle.textContent = value.toUpperCase();

  const dict = currentDirection === 'en-mhr' ? dictionary.en : dictionary.mhr;

  const matchingWords = Object.keys(dict).filter(word => {
    const entry = dict[word];
    if (type === 'pos') return entry.pos === value || (entry.senses && entry.senses.some(s => s.pos === value));
    if (type === 'topic') return entry.topic === value || (entry.senses && entry.senses.some(s => s.topic === value));
    if (type === 'cefr') return entry.cefr === value;
  }).sort((a, b) => a.localeCompare(b));

  let listHtml = '<ul class="filter-word-list">';
  matchingWords.forEach(word => {
    listHtml += `<li class="filter-word-item" data-word="${word}">${word}</li>`;
  });
  listHtml += '</ul>';

  modalBody.innerHTML = listHtml;

  document.querySelectorAll('.filter-word-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const word = e.target.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      filterModal.style.display = 'none';
      resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function generateExercise() {
  const dict = currentDirection === 'en-mhr' ? dictionary.en : dictionary.mhr;
  const words = Object.keys(dict);
  const correctWord = words[Math.floor(Math.random() * words.length)];
  const entry = dict[correctWord];
  const sense = entry.senses ? entry.senses[0] : entry;
  const question = currentDirection === 'en-mhr' ? sense.translation : correctWord;
  const correctAnswer = currentDirection === 'en-mhr' ? correctWord : sense.translation;

  const incorrectWords = [];
  while (incorrectWords.length < 3) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (randomWord === correctWord) continue;

    const randomEntry = dict[randomWord];
    const randomSense = randomEntry.senses ? randomEntry.senses[0] : randomEntry;
    const randomAnswer = currentDirection === 'en-mhr' ? randomWord : randomSense.translation;

    if (!incorrectWords.includes(randomAnswer)) {
      incorrectWords.push(randomAnswer);
    }
  }

  const allAnswers = [correctAnswer, ...incorrectWords].sort(() => Math.random() - 0.5);

  let answersHtml = '';
  allAnswers.forEach(answer => {
    answersHtml += `
      <div class="answer-option" data-answer="${escapeHtml(answer)}">
        ${escapeHtml(answer)}
      </div>
    `;
  });

  const questionText = currentDirection === 'en-mhr'
    ? `What is the English word for: "${question}"?`
    : `What is the Mari word for: "${question}"?`;

  exerciseModal.querySelector('.modal-body').innerHTML = `
    <div class="exercise-question">${escapeHtml(questionText)}</div>
    <div class="answer-options">${answersHtml}</div>
    <div class="exercise-feedback" style="display:none;"></div>
    <div class="exercise-buttons">
      <button class="exercise-btn-modal next-btn">Next Question</button>
      <button class="exercise-btn-modal close-btn">Close</button>
    </div>
  `;

  exerciseModal.style.display = 'block';

  document.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
      });
      option.classList.add('selected');
      const isCorrect = option.textContent.trim() === correctAnswer.trim();
      if (isCorrect) {
        option.classList.add('correct');
      } else {
        option.classList.add('incorrect');
        document.querySelectorAll('.answer-option').forEach(opt => {
          if (opt.textContent.trim() === correctAnswer.trim()) {
            opt.classList.add('correct');
          }
        });
      }

      const feedback = document.querySelector('.exercise-feedback');
      feedback.style.display = 'block';
      feedback.innerHTML = isCorrect
        ? `<h4>Correct!</h4><p>Well done!</p>`
        : `<h4>Incorrect</h4><p>The correct answer is: <strong>${escapeHtml(correctAnswer)}</strong></p>`;

      document.querySelector('.next-btn').onclick = generateExercise;
      document.querySelector('.close-btn').onclick = () => {
        exerciseModal.style.display = 'none';
      };
    });
  });
}

directionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    directionBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDirection = btn.getAttribute('data-direction');
    searchInput.value = '';
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  });
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query) {
    showResult(query);
  } else {
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  }
});

randomBtn.addEventListener('click', () => {
  const word = getRandomWord();
  searchInput.value = word;
  showResult(word);
});

exerciseBtn.addEventListener('click', () => {
  generateExercise();
});

closeModal.addEventListener('click', () => {
  filterModal.style.display = 'none';
});

closeExerciseModal.addEventListener('click', () => {
  exerciseModal.style.display = 'none';
});

keyboardToggleBtn.addEventListener('click', () => {
  virtualKeyboard.style.display = virtualKeyboard.style.display === 'none' ? 'block' : 'none';
  keyboardToggleBtn.textContent = virtualKeyboard.style.display === 'none' ? '⌨️ Show Keyboard' : '⌨️ Hide Keyboard';
});

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const action = key.getAttribute('data-action');
    const input = searchInput;
    const char = key.textContent.trim();

    key.classList.add('key-active');
    setTimeout(() => key.classList.remove('key-active'), 150);

    if (action === 'backspace') {
      input.value = input.value.slice(0, -1);
    } else if (action === 'space') {
      input.value += ' ';
    } else if (char) {
      input.value += char;
    }

    input.focus();
    if (input.value.trim()) {
      showResult(input.value);
    }
  });
});
