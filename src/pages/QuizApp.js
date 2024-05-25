import React from "react";
import styled from "styled-components";
import QuizComp from "../components/QuizComp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/styles";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 50%;
  width: 70%;
  margin: auto;
  padding: 1rem;
`;
const Heading = styled.h2`
  padding: 0.5rem;
`;

const useStyles = makeStyles({
  card: {
    height: "100%",
    width: "100%",
  },
});

const QuizApp = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.card}>
        <CardContent>
          <Heading>Simple Quiz</Heading>
          <br></br>
          <QuizComp />
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default QuizApp;
