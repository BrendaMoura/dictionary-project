interface Meaning {
    definition?: string
    partOfSpeech?: string
    synonyms?: string[]
    typeOf?: string[]
    hasTypes?: string[]
    derivation?: string[]
    examples?: string[]
}

interface Syllables {
    count: number
    list: string[]
}

export interface WordInfo {
  word: string
  results?: Meaning[]
  syllables?: Syllables
  pronunciation?: {
    all: string
  }
  frequency?: string
}

export const initialValueWordResult: WordInfo = {
    word: "Hello",
    results: []
};
