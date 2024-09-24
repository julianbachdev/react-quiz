import { useEffect } from "react";
import { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";

function Timer() {
  const { secondsRemaining, dispatch } = useContext(QuizContext);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
