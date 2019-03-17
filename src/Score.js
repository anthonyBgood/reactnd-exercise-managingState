import React from "react";



const Score = (props) =>{
  const numQuestions = props.numQuestions;
  const numCorrect = props.numCorrect;
  return(
    <p className="text">
      Your Score: {numCorrect} of {numQuestions}
    </p>
  );
}

export default Score;
