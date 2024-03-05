import { useLayoutEffect } from "react";
import MainArea from "../layout/MainArea";
import TopArea from "../layout/TopArea";

export function Main() {
    useLayoutEffect(()=>{
        const frame = document.querySelector('.frame-box')
        frame.style.height = 'calc(100vh - 25px)';
        frame.style.borderRadius = '20px 20px 0px 0px';
        frame.style.marginTop = '25px';
    },[]);
    return (
        <div>
            <TopArea />
            <MainArea />
        </div>
    );
}
