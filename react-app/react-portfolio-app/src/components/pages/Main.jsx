import { useLayoutEffect, useState } from "react";
import MainArea from "../layout/MainArea";
import TopArea from "../layout/TopArea";
// TopArea - Taps에서 part선택
// MainArea - items에서 매칭해서 나열
export function Main() {
    console.log(window.location.href);
    const [part, setPart] = useState('추천메뉴');

    // 소개에서 넘어온 경우
    if(window.location.href.indexOf('?')>0){
        window.location.href = "#";
        chgPart('포트폴리오');
    }

    // 초기 part
    function chgPart(tapPart){
        setPart(tapPart);
    }; 

    useLayoutEffect(()=>{
        const frame = document.querySelector('.frame-box')
        frame.style.height = 'calc(100vh - 25px)';
        frame.style.borderRadius = '20px 20px 0px 0px';
        frame.style.marginTop = '25px';
    },[]);

    return (
        <div>
            <TopArea chgPart={chgPart} part={part}/>
            <MainArea part={part}/>
        </div>
    );
}
