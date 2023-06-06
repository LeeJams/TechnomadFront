import Header from "./Header";
import Bottom from "./Bottom";
// import PopScan from "../run/PopScan";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layoutWrap">
      <Header />
      <Outlet />
      {/* <PopScan /> */}
      <Bottom />
    </div>
  );
}
