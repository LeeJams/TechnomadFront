import Header from "./Header";
// import Bottom from "./Bottom";
import Running from "../run/StartPlogging";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layoutWrap">
      <Header />
      {/* <Outlet /> */}
      <Running />
      {/* <Bottom /> */}
    </div>
  );
}
