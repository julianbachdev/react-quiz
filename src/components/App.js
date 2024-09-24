import { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import RestartButton from "./RestartButton";
import Timer from "./Timer";
import Footer from "./Footer";
import { QuizContext } from "../Contexts/QuizContext";

export default function App() {
  const { status } = useContext(QuizContext);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen />
            <RestartButton />
          </>
        )}
      </Main>
    </div>
  );
}
