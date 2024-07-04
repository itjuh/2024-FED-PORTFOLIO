import { Icon } from "../modules/Icon";
import { ReceiptMain } from "../modules/ReceiptMain";
import "../../css/footerarea.css";
import { orderStore } from "../../stores/store";
import { useLayoutEffect } from "react";

export default function FooterArea() {
  const orderStatus = orderStore((state) => state.orderStatus);
  console.log(orderStatus, "프린트 상태값");

  useLayoutEffect(()=>{
    if(orderStatus){
        document.querySelector(".receipt-area").innerHTML = <ReceiptMain />
    }
  },[orderStatus])
  return (
    <div className="footer">
      <div className="receipt-printer">
        <div className="printer-tit">
          <Icon iconName={"receipt"} iconSize={"35px"} iconColor={"#fff"} />
          <span>receipt</span>
        </div>
      </div>
      <div className="receipt-area">
      </div>
    </div>
  );
}
