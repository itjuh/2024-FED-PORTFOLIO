import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Popup } from "../pages/Popup";
import FooterArea from "./FooterArea";

export function Layout() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="frame-box">
      <Outlet />
      <FooterArea />
      <Popup />
    </div>
  );
}
