import { useLayoutEffect } from "react";
import "../../css/toparea.css";
import { Tap } from "../modules/Tap";

export default function TopArea() {
    let txt = ["추천상품", "메인상품", "포트폴리오"];

    // mounting
    useLayoutEffect(() => {
        const tg = document.querySelectorAll(".lnb>ol>li");
        tg.forEach((ele, idx, arr) => {
            ele.addEventListener("click", function () {
                arr.forEach((v) => v.classList.remove("on"));
                ele.classList.add("on");
            });
        });
    }, []);

    return (
        <div className="header">
            <nav className="gnb">
                <div>홈</div>
                <h1>Frontend Shop</h1>
                <div className="more">+</div>
            </nav>
            <nav className="lnb">
                <ol>
                    <Tap txt={txt} />
                </ol>
            </nav>
        </div>
    );
}
