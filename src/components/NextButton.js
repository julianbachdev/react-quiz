import { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";

function NextButton() {
  const { questions, index, answer, dispatch } = useContext(QuizContext);

  const numQuestions = questions.length;

  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
