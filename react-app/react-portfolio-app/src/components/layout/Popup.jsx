import { useEffect, useLayoutEffect } from "react";
import { popStore } from "../../stores/store";
import { Option } from "../modules/Option";
import "../../css/core.css";
import "../../css/popup.css";

export function Popup() {
  const popStatus = popStore((state) => state.popStatus);
  const popName = popStore((state) => state.popName);
  const popChg = popStore((state) => state.popChg);
  console.log("팝업랜더링", popStatus, popName);
  let popData;
  let topTitle;
  let subTitle;
  let basic;
  let select;
  try {
    popData = require("../data/optionData.json");
    if (popName) {
      OptionSet(popData);
    }
  } catch (e) {
    alert(e);
  }
  function OptionSet(obj) {
    popData = obj.find((v) => v.itemName == popName);
    console.log(popData, popData["mainTitle"]);
    topTitle = popData["mainTitle"];
    subTitle = popData["subTitle"];
    basic = popData["basic"];
    select = popData["select"];
  }
  useLayoutEffect(() => {
    if (popStatus) {
      document.querySelector(".popup-back").style.display = "flex";
    }else{
        document.querySelector(".popup-back").style.display = "none";
    }
  }, [popStatus]);
  return (
    <div className="popup-back">
      <div className="popup">
        <div className="pop-header">
          <span>옵션을 선택해주세요</span>
          <button className="close-btn" onClick={popChg}>×</button>
        </div>
        <div className="pop-body-top">
          <figure></figure>
          <figcaption>
            <div className="tit">{topTitle}</div>
            <div className="h-bar"></div>
            <div className="sub">{subTitle.replace("^","\n")}</div>
          </figcaption>
        </div>
        {popStatus && (
          <div className="pop-body-option">
            <Option option={basic} />
            <Option option={select} />
          </div>
        )}
      </div>
    </div>
  );
}
