import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Layout(){
    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    });
    return(
        <div className="frame-box">
            <Outlet />
        </div>
    );
}