import { Box } from "@mui/system";
import React, { FC } from "react";
import { WordInfo } from "../../../typings";

interface Props {
  info: WordInfo;
}

const CardRecomendation: FC<Props> = ({ info }) => {
  const firstMeaning = info.results ? info.results[0].definition : "";
  return (
    <Box
      sx={{
        width: "200px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightblue",
      }}
    >
      <h2>{info.word}</h2>
      <p>{info.pronunciation?.all}</p>
      <p>{firstMeaning}</p>
    </Box>
  );
};

export default CardRecomendation;
