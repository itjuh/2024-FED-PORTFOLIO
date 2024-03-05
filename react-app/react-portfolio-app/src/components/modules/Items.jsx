import { MdFace3 } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";
import { LiaKeyboard } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import "../data/itemData.json";

export function Items({selectedMenu}) {
    // selectedMenu - 메뉴선택 저장 useState
    const goods = require('../data/itemData.json');

    const iconMap = {
        "<MdFace3 />":<MdFace3 />,
        "<RiCake3Line />": <RiCake3Line />,
        "<LiaKeyboard />": <LiaKeyboard />,
        "<SiBuymeacoffee />": <SiBuymeacoffee />
    }
    // click메뉴 tit,link
    const clickMenu = (arr) => {
        selectedMenu(arr);
    }

    return goods['items'].map((v, i) => (
        <li className="lnb-unit" key={i} onClick={()=>clickMenu([v.title,v.link])}>
            <div className="lnb-part">{v.part}</div>
            <div className="lnb-icon" style={{color:v.color}}>
                {iconMap[v.src]}
            </div>
            <div className="lnb-tit">
                <span style={{backgroundImage:'linear-gradient(120deg, '+v.color+' 90%, '+v.color+' 100%)'}}>{v.title}</span>
            {
                v.recommand !== null &&
                <span style={{color:"#e9c603", fontSize:'2rem'}}>{'★'.repeat(v.recommand)}</span>
            }
            </div>
        </li>
    ));
}
