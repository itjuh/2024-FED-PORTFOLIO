import { Items } from "../modules/Items";
import "../../css/main.css";
import { RemainTime } from "../modules/RemainTime";
import { menuStore, orderStore } from "../../stores/store";

export default function MainArea() {
  // 선택메뉴[tit,link]
  // 리랜더링 방지를 위해 필요한 state만 가져옴
  const { orderList, resetMenu } = menuStore((state) => state);
  const setOrderList = menuStore((state) => state.setOrderList);
  const setOrderStatus = orderStore((state) => state.setOrderStatus);
  console.log("랜더링됨! main", orderList);

  function delItem(itemName) {
    // 새로운 객체 생성하여 해당 아이템 제외
    const { [itemName]: deletedItem, ...newOrderList } = orderList;
    if (Object.keys(newOrderList).length === 0) {
      resetMenu();
    } else {
      setOrderList(newOrderList);
    }
  }
  return (
    <div className="main">
      <div className="items-area">
        <ul>
          <Items />
        </ul>
      </div>
      <div className="view-area">
        <div className="selected-view">
          {orderList == null && (
            <div className="sel-null">
              선택하신 상품이 없습니다.
              <br />
              남은시간 이 후에
              <br />
              자동으로 이동합니다.
            </div>
          )}
          {orderList !== null && (
            <>
              {Object.keys(orderList).map((itemName, index) => (
                <div className="sel-group" key={index}>
                  <span className="sel-menu">{itemName}</span>
                  <button className="sel-cnt" onClick={() => delItem(itemName)}>
                    삭제
                  </button>
                </div>
              ))}
              <div className="alert-box">시간이 초과되면 삭제됩니다.</div>
            </>
          )}
        </div>
        <div className="info-view">
          <RemainTime />
          <button className="main-btn del-btn over-btn" onClick={resetMenu}>
            삭제하기
          </button>
          <button className="main-btn order-btn over-btn" onClick={setOrderStatus}>
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}
