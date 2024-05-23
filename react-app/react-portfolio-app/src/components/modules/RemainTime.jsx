import { useEffect } from "react";
import { timeStore } from "../../stores/store";

export function RemainTime() {
    // 남은시간
    const { remainTime , decreaseRemainTime, timeEnd, timePause} = timeStore(state => state);

    useEffect(()=>{
        const autoI = setInterval(decreaseRemainTime,1000);
        if(remainTime == 0){
            clearInterval(autoI);
            timeEnd();
        }
        if(timePause){
            clearInterval(autoI);
        }
        return ()=> clearInterval(autoI);
    },[remainTime, timePause]);
    return (
        <div className="timer">
            남은시간<em>{remainTime}</em>
            <span>초</span>
        </div>
    );
}
