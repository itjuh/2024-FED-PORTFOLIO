import { useLayoutEffect } from "react";
import { popStore } from "../../stores/store";
import { Option } from "../modules/Option";
import "../../css/popup.css";
import { Icon } from "../modules/Icon";

export function Popup() {
  const popStatus = popStore((state) => state.popStatus);
  const popChg = popStore((state) => state.popChg);
  const popName = popStore((state) => state.popName);
  // console.log("팝업랜더링", popStatus, popName);
  let popData;
  let topTitle;
  let subTitle;
  let basic;
  let select;
  let isrc = null;
  try {
    popData = require("../data/optionData.json");
    if (popName) {
      optionSet(popData);
    }
  } catch (e) {
    alert(e);
  }
  function optionSet(obj) {
    popData = obj.find((v) => v.itemName == popName);
    if(popName !== "안주현소개"){
      isrc = popData["src"];
    }
    topTitle = popData["mainTitle"];
    subTitle = popData["subTitle"];
    basic = popData["basic"];
    select = popData["select"];
  }
  const popPick = ()=>{
    let pickData = [];
    const checked = document.querySelectorAll(".pop-body-option input:checked");
    checked.forEach(v=>{
      pickData.push(v.value);
    })
    console.log(pickData);
    // 창 제목(popName)+데이터(pickData)를 저장하기!
    
    // 창 닫기
    popChg();
  };
  useLayoutEffect(() => {
    if (popStatus) {
      document.querySelector(".popup-back").style.display = "flex";
    } else {
      document.querySelector(".popup-back").style.display = "none";
    }
  }, [popStatus]);
  return (
    <div className="popup-back">
      <div className="popup">
        <div className="pop-header">
          <span>옵션을 선택해주세요</span>
          <button className="close-btn" onClick={popChg}>
            ×
          </button>
        </div>
        <div className="pop-body-top">
          {
            popStatus && isrc && 
            <figure>
              <img src={isrc} alt={topTitle+"이미지"} />
            </figure>
          }
          {
            popStatus && isrc === null &&
            <figure>
              <Icon iconName={"face"} iconSize={"100px"} iconColor={"var(--coral)"}/>
            </figure>
          }
          <figcaption>
            <div className="tit">{topTitle}</div>
            <div className="h-bar"></div>
            {subTitle && <div className="sub">{subTitle.replace("^", "\n")}</div>}
          </figcaption>
        </div>
        {popStatus && (
          <div className="pop-body-option">
            <Option option={basic} />
            <Option option={select} />
          </div>
        )}
        <div className="pop-footer">
          <button className="main-btn del-btn over-btn" onClick={popChg}>취소</button>
          <button className="main-btn order-btn over-btn" onClick={popPick}>주문담기</button>
        </div>
      </div>
    </div>
  );
}
