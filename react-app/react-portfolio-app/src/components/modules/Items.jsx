import { MdFace3 } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";
import { LiaKeyboard } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import "../data/itemData.json";
import { menuStore } from "../../stores/store";

export function Items() {
  // selectedMenu - 메뉴선택 저장 useState
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
    "<MdFace3 />": <MdFace3 />,
    "<RiCake3Line />": <RiCake3Line />,
    "<LiaKeyboard />": <LiaKeyboard />,
    "<SiBuymeacoffee />": <SiBuymeacoffee />,
  };

  return goods.map((v, i) => (
    <li className="lnb-unit" key={i} onClick={() => pickMenu([v.title, v.link])}>
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
