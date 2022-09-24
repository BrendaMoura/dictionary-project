import fetch from "node-fetch";
export const getMeaning = async (word: string)=> {
  try {
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    let response = await fetch(url);
    let data = await response.json();
    if (data.title !== "No Definitions Found") {
      return data
    }
  } catch (error) {
    console.log('Erro: ', error);
  }
  return [];
};
