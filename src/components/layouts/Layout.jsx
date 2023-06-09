import Header from "./Header";
import Bottom from "./Bottom";
// import Running from "../run/StartPlogging";
// import PopScan from "../run/PopScan";
// import Crew from "../view/Crew";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layoutWrap">
      <Header />
      <Outlet />
      {/* <PopScan /> */}
      {/* <Crew /> */}
      <Bottom />
    </div>
  );
}
