import { MdFace3 } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";
import { LiaKeyboard } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import "../data/itemData.json";
import { menuStore, popStore } from "../../stores/store";

export function Items() {
  // part 선택그룹 이름

  // let goods;
  // fetch("./data/itemData.json", {
  //     headers: {
  //         Accept: "application / json",
  //       },
  //       method: "GET",
  //     })
  //   .then(res => res.json())
  //   .then(data => {goods = data['items'];});
  const { pickMenu, category } = menuStore((state) => state);
  const { setPopName, popChg } = popStore((state)=>state);
  let goods = require("../data/itemData.json");
  goods = goods["items"];
  if (category !== "추천메뉴") {
    goods = goods.filter((v) => {
      if (v["part"] == category) return true;
    });
  } else {
    goods = require("../data/itemData.json");
    goods = goods["items"];
  }

  const iconMap = {
    "face": <MdFace3 />,
    "cake": <RiCake3Line />,
    "keyboard": <LiaKeyboard />,
    "coffee": <SiBuymeacoffee />,
  };
  // 클릭하면 팝업상태 바꾸기 => x 도 팝업상태 바꾸기
  // 선택하기도 팝업상태 바꾸기
  // 팝업 name에 클릭한 이름 넣고
  // 팝업상태 true면 팝업창 뜨고 name으로 데이터 불러오고 
  // 주문하기는 나중에 처리
  return goods.map((v, i) => (
    <li className="lnb-unit" 
      key={i} 
      onClick={() => {
        setPopName(v.title);
        popChg();
    }}>
    {/* <li className="lnb-unit" key={i} onClick={() => pickMenu([v.title, v.link])}> */}
      <div className="lnb-part">{v.enPart}</div>
      <div className="lnb-icon" style={{ color: v.color }}>
        {iconMap[v.src]}
      </div>
      <div className="lnb-tit">
        <span style={{ backgroundImage: "linear-gradient(120deg, " + v.color + " 90%, " + v.color + " 100%)" }}>{v.title}</span>
        {v.recommand !== null && <span style={{ color: "#e9c603", fontSize: "2rem" }}>{"★".repeat(v.recommand)}</span>}
      </div>
    </li>
  ));
}
