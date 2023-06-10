import Home from "./components/Home";
import JoinCrew from "./components/view/JoinCrew";
import CrewDetail from "./components/view/CrewDetail";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Login from "./components/view/Login";
import { getCookie } from "./components/utils/cookies";
import StartPlogging from "./components/run/StartPlogging";
import MyPage from "./components/view/MyPage";
import Challenge from "./components/view/Challenge";
import Crew from "./components/view/Crew";
import Result from "./components/run/Result";

const router = createBrowserRouter([
  {
    path: "/TechnomadFront",
    element: <Layout />,
    loader: () => {
      if (!getCookie("token")) {
        // return redirect("/login");
      }
      return false;
    },
    children: [
      { index: true, element: <Home /> },
      { path: "crew", element: <Crew /> },

      { path: "record", element: <div>기록</div> },
      { path: "challenge", element: <Challenge /> },
      { path: "mypage", element: <MyPage /> },
    ],
  },
  { path: "/TechnomadFront/crew/join", element: <JoinCrew /> },
  { path: "/TechnomadFront/run", element: <StartPlogging /> },
  { path: "/TechnomadFront/result", element: <Result /> },
  { path: "/TechnomadFront/crew/:id", element: <CrewDetail /> },
  {
    path: "/TechnomadFront/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
