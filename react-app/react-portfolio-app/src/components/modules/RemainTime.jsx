import { useEffect } from "react";
import { menuStore, timeStore } from "../../stores/store";
import { FaPause, FaPlay } from "react-icons/fa";

export function RemainTime() {
  // 남은시간
  const remainTime = timeStore((state) => state.remainTime);
  const decreaseRemainTime = timeStore((state) => state.decreaseRemainTime);
  const timeEnd = timeStore((state) => state.timeEnd);
  const timeStopGo = timeStore((state) => state.timeStopGo);
  const timePause = timeStore((state) => state.timePause);
  const resetMenu = menuStore((state) => state.resetMenu);

  useEffect(() => {
    const autoI = setInterval(decreaseRemainTime, 1000);
    if (remainTime == 0) {
      clearInterval(autoI);
      timeEnd();
      resetMenu();
    }
    if (timePause) {
      clearInterval(autoI);
    }
    return () => clearInterval(autoI);
  }, [remainTime, timePause]);
  return (
    <>
      <div className="timer">
        남은시간<em>{remainTime}</em>
        <span>초</span>
      </div>
      <button className="main-btn pause-btn" onClick={timeStopGo}>
        {timePause && <FaPlay />}
        {!timePause && <FaPause />}
      </button>
    </>
  );
}
