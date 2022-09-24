interface Phonetics {
  text: string;
  audio: string;
}

interface Definitions {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
  antonyms: string[];
}

export interface WordInfo {
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

export const initialValueWordResult: WordInfo = {
  word: "",
  phonetic: "",
  phonetics: [],
  meanings: [],
  license: {
    name: "",
    url: "",
  },
  sourceUrls: [],
}

export interface WordNotFound {
  title?: string;
  message?: string;
  resolution?: string;
}

export interface DictionarySearch {
  word: string;
  results: WordInfo[];
}

export const initialValueWordInfo: DictionarySearch = {
  word: "Hello",
  results: [initialValueWordResult],
};
