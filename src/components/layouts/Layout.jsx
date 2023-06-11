import Bottom from "./Bottom";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import RecordLanding from "../view/RecordLanding";

export default function Layout() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  // }, [pathname]);

  return (
    <div id="layoutWrap">
      <Outlet />
      <Bottom />
    </div>
  );
}
