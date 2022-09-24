import { Box, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMeaning } from "./node/dictionary-api/index";
import {
  DictionarySearch,
  initialValueWordInfo,
  Meaning,
  WordInfo,
} from "./typings";

function App() {
  const [state, setState] = useState<DictionarySearch>(initialValueWordInfo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((previous) => ({
      ...previous,
      word: event.target.value,
    }));
  };

  useEffect(() => {
    getMeaning(state.word).then(data => {
      setState((previous) => ({
        ...previous,
        results: data,
      }));
    });
    
  }, [state.word]);

  return (
    <Box sx={{ width: 300, height: 300 }}>
      <h1>Hello world</h1>
      <Input
        sx={{ margin: 8 }}
        id="search word"
        value={state?.word}
        onChange={handleChange}
      />
      <div style={{ width: "100%", height: "60%" }}>
        {state?.results?.map((wordInfo: WordInfo) =>
          wordInfo?.meanings?.map((meaning: Meaning) => (
            <p>{meaning?.partOfSpeech}</p>
          ))
        )}
      </div>
    </Box>
  );
}

export default App;
