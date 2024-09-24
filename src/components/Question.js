import Options from "./Options";
import { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";

function Question() {
  const { questions, index } = useContext(QuizContext);

  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
