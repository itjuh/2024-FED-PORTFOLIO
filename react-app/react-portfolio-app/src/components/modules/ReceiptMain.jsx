import { Fragment } from "react";
import { menuStore } from "../../stores/store";
import { ReceiptContent } from "./ReceipContent";

export function ReceiptMain() {

  let orderKey;
  // if(orderList !== null){
  //   orderKey = Object.keys(orderList);
  //   console.log(orderKey);
  // }
  console.log("영수증 메인불러옴");
  return (
    <>
      {/* {orderList !== null && (
        <div className="receipt-area">
          {orderKey.map((tit, index) => {
            <Fragment key={index}>
              <ReceiptContent title={tit} list={orderList.tit} />;
            </Fragment>;
          })}
        </div>
      )} */}
    </>
  );
}
