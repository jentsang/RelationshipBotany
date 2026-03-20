import { createBrowserRouter } from "react-router";
import { StartScreen } from "./screens/StartScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { LoadingScreen } from "./screens/LoadingScreen";
import { ResultScreen } from "./screens/ResultScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: StartScreen,
  },
  {
    path: "/quiz",
    Component: QuizScreen,
  },
  {
    path: "/loading",
    Component: LoadingScreen,
  },
  {
    path: "/result",
    Component: ResultScreen,
  },
]);
