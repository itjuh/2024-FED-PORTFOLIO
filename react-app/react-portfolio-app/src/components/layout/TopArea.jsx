import { useLayoutEffect } from "react";
import "../../css/toparea.css";
import { Tap } from "../modules/Tap";
import { FaHome } from "react-icons/fa";

export default function TopArea({chgPart, part}) {
    // chgPart(탭변경) , part(선택 탭)
    let txt = ["추천메뉴", "메인상품", "포트폴리오"];

    // mounting
    useLayoutEffect(() => {
        const tg = document.querySelectorAll(".lnb>ol>li");
        tg.forEach((ele, idx, arr) => {
            ele.addEventListener("click", function () {
                arr.forEach((v) => v.classList.remove("on"));
                ele.classList.add("on");
                // console.log(ele.querySelector('a').innerText);
                chgPart(ele.querySelector('a').innerText);
            });
        });
    }, []);

    return (
        <div className="header">
            <nav className="gnb">
                <div className="home"><FaHome /></div>
                <h1>Frontend Shop</h1>
                <div className="more">+</div>
            </nav>
            <nav className="lnb">
                <ol>
                    <Tap txt={txt} part={part}/>
                </ol>
            </nav>
        </div>
    );
}
