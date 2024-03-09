import { LiaReceiptSolid } from "react-icons/lia";
import "../../css/profile.css";
import { useEffect, useLayoutEffect } from "react";
import { infoData, detailData, txtMsg, etcLinkData } from "../data/infoData.js";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export function Profile() {
    // 데이터 가져오기
    const keyList = Object.keys(infoData);
    const dataList = Object.values(infoData);
    dataList.shift();

    useLayoutEffect(() => {
        const frame = document.querySelector(".frame-box");
        frame.style.height = "auto";
        frame.style.borderRadius = "0px 0px 20px 20px";
        frame.style.marginTop = "0px";
        document.querySelector(".receipt-area").style.transform = "translateY(-101%)";
    }, []);

    function splitTitleCont(str) {
        if (str.indexOf("^") > 0) {
            return str.split("^").map((item) => <span key={item}>{item}</span>);
        } else {
            return <span>{str}</span>;
        }
    }
    function makeLink(ele,idx){
        return <Link to={etcLinkData[idx]} target='_blank' title={ele+" 이동하기"}>{detailData[ele]}</Link>;

    }
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".receipt-area").style.transform = "translateY(0%)";
        }, 500);
    });

    return (
        <div className="info-page">
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
                                {i === 0 &&
                                v.map((ele, idx) => (
                                    <li key={idx}>
                                        <strong>{ele}</strong>
                                        <i>{makeLink(ele,idx)}</i>
                                    </li>
                                ))}
                                {i !== 0 &&
                                v.map((ele, idx) => (
                                    <li key={idx}>
                                        <strong>{ele}</strong>
                                        <i>{splitTitleCont(detailData[ele])}</i>
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
                <Link to="/" className="home-btn over-btn-l" title="홈으로 이동">
                    <FaHome />
                </Link>
                <Link to="/?key=2" className="link-btn over-btn-l">
                    포트폴리오 추가주문하기 &gt;&gt;
                </Link>
            </div>
        </div>
    );
}
