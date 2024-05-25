import React, {useState} from "react";
import styled from "styled-components";
import Questions from "../data/Questions.json";
import { Button } from "@mui/material";

const QuizWrapper = styled.div`
  height: 50%;
  width: 70%;
  border: 1px solid;
  margin: auto;

`;

const QuizComp = () => {
  const [index, setIndex] = useState(0);

//   console.log("questions", Questions[0].question);

  let contentDisplay = (
    
    // Questions.map((element, index) => (
    //   <div>
    //     <h2>{element.question}</h2>
    //     {element?.choices.map((option, index) => (
    //       <div>
    //         <button>{option}</button>
    //       </div>
    //     ))}
    <div>
      <h2>{Questions[index].question}</h2>
      {Questions[index]?.choices.map((option, index) => (
        <>
        <div>
          <button>{option}</button>
        </div>
        <Button></Button> 
        </>
      ))}
    </div>
    )

  return <QuizWrapper>{contentDisplay}</QuizWrapper>;
};

export default QuizComp;
