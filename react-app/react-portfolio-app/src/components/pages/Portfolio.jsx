import { useEffect, useRef } from "react";
import "../../css/portfolio.css";
import { siteData } from "../data/infoData.js";
import { useLocation } from "react-router-dom";

export function Portfolio() {
    const nav = useLocation();
    // 우회이동 차단
    if (window.location.href.indexOf("?") < 0) nav("/");
    // 데이터 번호 주소 gruop값
    const dataNum = window.location.href.split("?")[1].split("=")[1];
    const selData = siteData[Number.parseInt(dataNum)];
    
    // document.querySelector("ol.cont-node");
    // 드래그 이벤트 적용
    function dragSet(tg){
        const container = tg;

        var active = false;
        var currentX;
        var initialX;
        var xOffset = 0;

        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);

        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("mouseout",dragEnd, false);
        container.addEventListener("mousemove", drag, false);

        function dragStart(e) {
            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
            } else {
                initialX = e.clientX - xOffset;
            }
            if (e.currentTarget === container) {
                active = true;
            }
        }

        function dragEnd(e) {
            initialX = currentX;

            active = false;
        }

        function drag(e) {
            if (active) {
                e.preventDefault();

                if (e.type === "touchmove") {
                    currentX = e.touches[0].clientX - initialX;
                } else {
                    currentX = e.clientX - initialX;
                }

                xOffset = currentX;
                setTranslate(currentX, container);
            }
        }

        function setTranslate(xPos, el) {
            console.log(xPos);
            el.style.left = xPos + "px";
        }
    }

    useEffect(() => {
        if(document.querySelectorAll('.cont-node>li').length > 3){
            const tg = document.querySelector('.cont-node');
            tg.style.cursor = 'grab';
            dragSet(tg);
        }
        if(document.querySelectorAll('.cont-skill>li').length > 3){
            const tg = document.querySelector('.cont-skill');
            tg.style.cursor = 'grab';
            dragSet(tg);
        }
    }, []);

    return (
        <div className="pofol-page">
            <div className="pop-box">
                <div className="pop-tit">
                    <span>주문메뉴</span>
                    <button onClick={() => window.history.back()}>×</button>
                </div>
                <div className="tit-img" style={{ backgroundImage: "url(" + selData.imgsrc + ")" }}>
                    <div className="main-tit">{selData.tit}</div>
                    <div className="under-line"></div>
                    <div className="sub-info">{selData.content}</div>
                </div>
                <div className="pop-cont">
                    <dl className="cont-period">
                        <dt>제작기간</dt>
                        <dd>{selData.period}</dd>
                    </dl>
                    <h2>페이지구성</h2>
                    <ol className="cont-node">
                        {selData.pages.map((v, i) => (
                            <li key={v}>{v}</li>
                        ))}
                    </ol>
                    <h2>사용기술</h2>
                    <ol className="cont-skill">
                        {selData.tech.map((v, i) => (
                            <li key={v}>{v}</li>
                        ))}
                    </ol>
                </div>
                <div className="site-link-btn">
                    <button className="site-link over-btn" onClick={() => window.open(selData.link1)}>
                        사이트 이동
                    </button>
                    {selData.link2 && (
                        <button className="guide-link over-btn" onClick={() => window.open(selData.link2)}>
                            가이드 문서
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
