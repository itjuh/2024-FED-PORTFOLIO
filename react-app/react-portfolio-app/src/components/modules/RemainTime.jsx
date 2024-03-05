import { useEffect, useState } from "react";

let n = 0

export function RemainTime({timeSts}) {
    // 남은시간
    const [remainT, setRemainT] = useState(20);

    const autoI = setInterval(()=>{
        // setRemainT(()=>remainT - 1);
        if(remainT == 0) clearInterval(autoI);
    },1000);

    useEffect(()=>{
        const autoI = setInterval(()=>{
            setRemainT((remainT)=>remainT - 1);
        },1000);
        if(remainT == 0){
            clearInterval(autoI);
            timeSts();
        }
        return ()=> clearInterval(autoI);
    },[remainT]);
    return (
        <div className="timer">
            남은시간<em>{remainT}</em>
            <span>초</span>
        </div>
    );
}
