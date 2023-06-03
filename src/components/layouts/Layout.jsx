import Header from "./Header";
// import Bottom from "./Bottom";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layoutWrap">
      <Header />
      <Outlet />
      {/* <Bottom /> */}
    </div>
  );
}
