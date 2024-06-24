import { useLayoutEffect } from "react";
import MainArea from "../layout/MainArea";
import TopArea from "../layout/TopArea";
import { menuStore } from "../../stores/store";
import FooterArea from "../layout/FooterArea";

// TopArea - Taps에서 part선택
// MainArea - items에서 매칭해서 나열
export function Main() {
    // console.log(window.location.href);
    const {setCategory} = menuStore(state=>state);     

    // 소개에서 넘어온 경우
    if(window.location.href.indexOf('?')>0){
        window.location.href = window.location.href.split('?')[0];
        setCategory('포트폴리오');
    }
    // 포폴사이트 우회로 넘어온 경우
    if(window.location.href.indexOf('portfolio')>0){
        window.location.href = window.location.href.split('portfolio')[0];
    }

    return (
        <>
            <TopArea/>
            <MainArea/>
            <FooterArea/>
        </>
    );
}
