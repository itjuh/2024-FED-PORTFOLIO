import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Layout(){
    console.log('레이아웃 불러오기');
    const nav = useNavigate();

    useLayoutEffect(()=>{
        window.scrollTo(0,0);
    });
    return(
        <div className="frame-box">
            <Outlet />
        </div>
    );
}