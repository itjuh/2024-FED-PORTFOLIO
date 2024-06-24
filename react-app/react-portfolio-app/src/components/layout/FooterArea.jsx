import { Link } from "react-router-dom";
import { txtMsg } from "../data/infoData";
import { Icon } from "../modules/Icon";

export default function FooterArea(){
    return(<div className="footer">
        <div className="receipt-page">
            <div className="receipt-tit">
                <Icon iconName={"receipt"} iconSize={"35px"} iconColor={"#fff"} />
                <span>receipt</span>
            </div>
            {/* <div className="receipt-area">
                <div className="barcord">
                    <figure>
                        <img src="./images/barcord.png" alt="바코드이미지" />
                    </figure>
                    <figcaption>{txtMsg}</figcaption>
                </div>
            </div>
            <div className="btn-box">
                <button href="#" className="link-btn over-btn-l">영수증 다시보기 ↑</button>
                <button href="#" className="link-btn over-btn-l">추가 주문하기 ↑</button>
            </div> */}
        </div>
    </div>)
}