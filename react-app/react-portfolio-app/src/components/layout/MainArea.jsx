import { Items } from "../modules/Items";
import "../../css/main.css";
import { useEffect } from "react";
import { RemainTime } from "../modules/RemainTime";
import { useNavigate } from "react-router-dom";
import { menuStore, timeStore } from "../../stores/store";
import { FaPause, FaPlay } from "react-icons/fa";

export default function MainArea() {
  // 선택메뉴[tit,link]
  const { pickedMenu, resetMenu } = menuStore((state) => state);
  const { timeEndStatus, timeStopGo, timePause } = timeStore((state) => state);
  // 페이지 이동
  const nav = useNavigate();
  useEffect(() => {
    if (timeEndStatus) {
      if (pickedMenu) {
        nav(pickedMenu[1]);
      } else {
        nav("profile");
      }
    }
  }, [timeEndStatus,pickedMenu]);

  function goLink() {
    if (pickedMenu) {
      nav(pickedMenu[1]);
    }
  }
  return (
    <div className="main">
      <div className="items-area">
        <ul>
          <Items/>
        </ul>
      </div>
      <div className="view-area">
        <div className="selected-view">
          {pickedMenu == null && (
            <div className="sel-null">
              선택하신 상품이 없습니다.
              <br />
              남은시간 이 후에
              <br />
              자동으로 이동합니다.
            </div>
          )}
          {pickedMenu !== null && (
            <>
              <span className="sel-menu">{pickedMenu[0]}</span>
              <span className="sel-cnt">수량 1개</span>
              <div className="alert-box">남은시간 종료 후 선택 상품으로 이동합니다.</div>
            </>
          )}
        </div>
        <div className="info-view">
          <RemainTime />
          <button className="main-btn pause-btn" onClick={timeStopGo}>
            {
                timePause &&
                <FaPlay />
            }
            {
                !timePause &&
                <FaPause />
            }
          </button>
          <div className="main-btn del-btn over-btn" onClick={resetMenu}>
            삭제하기
          </div>
          <button className="main-btn order-btn over-btn" onClick={goLink}>
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}
