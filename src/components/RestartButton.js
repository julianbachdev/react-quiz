import { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";

function RestartButton() {
  const { dispatch } = useContext(QuizContext);

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart
    </button>
  );
}

export default RestartButton;
