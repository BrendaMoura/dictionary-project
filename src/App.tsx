import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMeaningWordsAPI } from "./node/dictionary-api/index";
import { initialValueWordResult, WordInfo } from "./typings";
import "./App-style.css";
import { Box, Container } from "@mui/system";

function App() {
  const [state, setState] = useState<WordInfo>(initialValueWordResult);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((previous) => ({
      ...previous,
      word: event.target.value,
    }));
  };

  useEffect(() => {
    getMeaningWordsAPI(state.word).then((data) => {
      setState(data);
    });
  }, [state.word]);

  return (
    <Container
      sx={{
        width: "80%",
        height: "100%",
        margin: "auto",
        marginTop: "3rem",
        backgroundColor: "#FAFAFB",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ width: "30%" }}>
        Lucy Dictictionary: a better yourself in one click.
      </h1>
      <TextField
        sx={{ marginTop: "2rem", width: "50%" }}
        id="search word"
        variant="outlined"
        value={state?.word}
        onChange={handleChange}
      />
      <Box
        sx={{
          width: "100%",
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2>Word of the day</h2>
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {state.results?.map((word) => (
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "lightblue",
              }}
            >
              {word.definition}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
