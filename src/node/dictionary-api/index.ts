import fetch from "node-fetch";

export const getMeaningWordsAPI = async (word: string) => {
  const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b6726bc57bmsh049e0acacc2988dp11a04ejsnfc60bff4663b",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  try {
    let data = await fetch(url, options).then((res) => res.json());
    if (data?.message !== "word not found") {
      return data;
    }
  } catch (error) {
    console.log("Erro: ", error);
  }
  return [];
};
