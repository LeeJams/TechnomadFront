import Home from "./components/Home";
import Crew from "./components/view/Crew";
import JoinCrew from "./components/view/JoinCrew";
import CrewDetail from "./components/view/CrewDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Splash from "./components/layouts/Splash";
import { useEffect, useState } from "react";
import Login from "./components/view/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/crew", element: <Crew /> },
      { path: "/crew/join", element: <JoinCrew /> },
      { path: "/crew/detail", element: <CrewDetail /> },
      { path: "/record", element: <div>기록</div> },
      { path: "/challenge", element: <div>챌린지</div> },
      { path: "/mypage", element: <div>마이페이지</div> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [isSplash, setIsSplash] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsSplash(false);
  //   }, 1000);
  // }, []);

  return isSplash ? <Splash /> : <RouterProvider router={router} />;
}

export default App;
