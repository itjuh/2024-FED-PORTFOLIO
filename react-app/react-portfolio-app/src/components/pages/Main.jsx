import { useLayoutEffect } from "react";
import MainArea from "../layout/MainArea";
import TopArea from "../layout/TopArea";
import { menuStore } from "../../stores/store";

// TopArea - Taps에서 part선택
// MainArea - items에서 매칭해서 나열
export function Main() {
    console.log(window.location.href);
    const {pickCategory} = menuStore(state=>state);     

    // 소개에서 넘어온 경우
    if(window.location.href.indexOf('?')>0){
        window.location.href = window.location.href.split('?')[0];
        pickCategory('포트폴리오');
    }
    // 포폴사이트 우회로 넘어온 경우
    if(window.location.href.indexOf('portfolio')>0){
        window.location.href = window.location.href.split('portfolio')[0];
    }

    useLayoutEffect(()=>{
        // const frame = document.querySelector('.frame-box')
        // frame.style.height = 'calc(100vh - 25px)';
        // frame.style.borderRadius = '10px 10px 0px 0px';
        // frame.style.marginTop = '25px';
    },[]);

    return (
        <>
            <TopArea/>
            <MainArea/>
        </>
    );
}
