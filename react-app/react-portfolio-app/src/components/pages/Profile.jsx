import { LiaReceiptSolid } from "react-icons/lia";
import "../../css/profile.css";
import { useEffect, useLayoutEffect } from "react";
import { infoData, detailData, txtMsg, etcLinkData } from "../data/infoData.js";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export function Profile() {
    // 데이터 가져오기
    const keyList = Object.keys(infoData);
    const dataList = Object.values(infoData);
    dataList.shift();

    // 페이지 이동
    const nav = useNavigate();

    useLayoutEffect(() => {
        const frame = document.querySelector(".frame-box");
        frame.style.height = "auto";
        frame.style.borderRadius = "0px 0px 20px 20px";
        frame.style.marginTop = "0px";
        document.querySelector(".receipt-area").style.transform = "translateY(-101%)";

        const linkLi = document.querySelectorAll(".link li span");
        // etcLinkData
        linkLi.forEach((ele, idx) => {
            ele.style.cursor = "pointer";
            ele.addEventListener("click", () => {
                window.open(etcLinkData[idx], "_blank");
            });
        });
    }, []);

    function whiteSpace(str) {
        if (str.indexOf("^") > 0) {
            return str.split("^").map((item) => <span key={item}>{item}</span>);
        } else {
            return <span>{str}</span>;
        }
    }
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".receipt-area").style.transform = "translateY(0%)";
        }, 500);
    });

    return (
        <div className="">
            <div className="receipt-tit">
                <i>
                    <LiaReceiptSolid />
                </i>{" "}
                <span>receipt</span>
            </div>
            <div className="receipt-area">
                <div className="about">
                    <div className="about-tit">{keyList[0].toUpperCase()}</div>
                    <div className="about-cont">
                        <div className="cont-left"></div>
                        <div className="cont-right">
                            <ul>
                                {infoData[keyList[0]].map((ele, idx) => (
                                    <li key={idx}>{ele}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {dataList.map((v, i) => (
                    <div className={"etc " + Object.keys(infoData)[i + 1].toLowerCase()} key={i + 1}>
                        <div className="sub-tit">{Object.keys(infoData)[i + 1].toUpperCase()}</div>
                        <div className="sub-cont">
                            <ul>
                                {v.map((ele, idx) => (
                                    <li key={idx}>
                                        <strong>{ele}</strong>
                                        <i>{whiteSpace(detailData[ele])}</i>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <div className="barcord">
                    <figure>
                        <img src="./images/barcord.png" alt="바코드이미지" />
                    </figure>
                    <figcaption>{txtMsg}</figcaption>
                </div>
            </div>
            <div className="btn-box">
                <button className="home-btn" onClick={() => nav("/main")}>
                    <FaHome />
                </button>
                <button className="link-btn" onClick={() => nav("/main?key=2")}>
                    포트폴리오 추가주문하기 &gt;&gt;
                </button>
            </div>
        </div>
    );
}
