import { Items } from "../modules/Items";
import "../../css/main.css";
import { useEffect, useState } from "react";
import { RemainTime } from "../modules/RemainTime";
import { useNavigate } from "react-router-dom";

export default function MainArea({part}) {
    // props down으로 part를 받음
    
    // 선택메뉴[tit,link]
    const [sel, setSel] = useState(null);
    // 시간종료
    const [endT, setEndT] = useState(false);
    
    const selectedMenu = (val) => {
        setSel(val);
    };
    const endTime = ()=>{
        setEndT(true);
    };
    // 지우기
    function deleteSel(){
        setSel(null);
    }
    // 페이지 이동
    const nav = useNavigate();

    useEffect(()=>{
        if(endT) {
            if(sel) {
                nav(sel[1]);
            }
            else {
                nav('profile');
            }
        }
    },[endT]);

    function goLink(){
        if(sel) {
            nav(sel[1]);
        }
    };
    return (
        <div className="main">
            <div className="items-area">
                <ul>
                    <Items part={part} selectedMenu={selectedMenu}/>
                </ul>
            </div>
            <div className="view-area">
                <div className="selected-view">
                    {sel == null && (
                        <div className="sel-null">
                            선택하신 상품이 없습니다.
                            <br />
                            남은시간 이 후에
                            <br />
                            자동으로 이동합니다.
                        </div>
                    )}
                    {sel !== null && (
                        <>
                            <span className="sel-menu">{sel[0]}</span>
                            <span className="sel-cnt">수량 1개</span>
                            <div className="alert-box">남은시간 종료 후 선택 상품으로 이동합니다.</div>
                        </>
                    )}
                </div>
                <div className="info-view">
                    <RemainTime timeSts={endTime}/>
                    <div className="del-btn over-btn" onClick={deleteSel}>삭제</div>
                    <div className="sel-count">
                        선택한상품 
                        {
                            sel !== null &&
                            <em>1</em>
                        }
                        {
                            sel == null &&
                            <em>0</em>
                        }
                        개
                    </div>
                    <div className="order-btn over-btn" onClick={goLink}>주문하기</div>
                </div>
            </div>
        </div>
    );
}
