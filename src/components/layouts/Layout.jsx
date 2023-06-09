import Header from "./Header";
import Bottom from "./Bottom";
// import Running from "../run/StartPlogging";
// import Home from "./../Home";
import Challenge from "../view/Challenge";
// import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layoutWrap">
      <Header />
      {/* <Outlet /> */}
      {/* <Running /> */}
      <Challenge />
      <Bottom />
    </div>
  );
}
