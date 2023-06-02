import JoinCrew from "./components/view/JoinCrew";
import CrewDetail from "./components/view/CrewDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <div>홈</div> },
      { path: "/crew", element: <CrewDetail /> },
      { path: "/crew/join", element: <JoinCrew /> },
      { path: "/record", element: <div>기록</div> },
      { path: "/challenge", element: <div>챌린지</div> },
      { path: "/mypage", element: <div>마이페이지</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
