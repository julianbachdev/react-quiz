import { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";

function Options() {
  const { questions, index, answer, dispatch } = useContext(QuizContext);

  const hasAnswered = answer !== null;
  const question = questions[index];

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
