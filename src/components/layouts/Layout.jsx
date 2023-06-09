import Header from "./Header";
import Bottom from "./Bottom";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div id="layoutWrap">
      <Header />
      <Outlet />
      <Bottom />
    </div>
  );
}
