import Bottom from "./Bottom";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layoutWrap">
      <Header />
      <Outlet />
      <Bottom />
    </div>
  );
}
