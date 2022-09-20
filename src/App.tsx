import { Box, Input } from "@mui/material";
import fetch from "node-fetch";
import React, { useEffect, useState } from "react";

interface DictionarySearch {
  word: string;
  meanings: any[];
}

function App() {
  const initialValue: DictionarySearch = {
    word: "hello",
    meanings: [],
  };
  const [state, setState] = useState<DictionarySearch>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((previous) => ({
      ...previous,
      word: event.target.value,
    }));
  };

  const getMeaning = async (word: string) => {
    try {
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
      let response = await fetch(url);
      let data = await response.json();
      console.log("Meanings: ", data);
      if (data.title !== "No Definitions Found") {
        setState((previous) => ({
          ...previous,
          meanings: data,
        }));
      }else{
        setState((previous) => ({
          ...previous,
          meanings: [],
        }));
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getMeaning(state.word);
  }, [state.word]);

  return (
    <Box sx={{ width: 300, height: 300 }}>
      <h1>Hello world</h1>
      <Input
        sx={{ margin: 8 }}
        id="search word"
        value={state.word}
        onChange={handleChange}
      />
      <div style={{ width: "100%", height: "60%" }}>
        {state?.meanings?.map((words: any) => (
          words?.meanings?.map((wordInfo: any) => (
            <p>{wordInfo?.partOfSpeech}</p>
          ))
        )
          
        )}
      </div>
    </Box>
  );
}

export default App;
