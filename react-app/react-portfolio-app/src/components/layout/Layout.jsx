import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Popup } from "./Popup";

export function Layout() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="frame-box">
      <Outlet />
      <Popup />
    </div>
  );
}
