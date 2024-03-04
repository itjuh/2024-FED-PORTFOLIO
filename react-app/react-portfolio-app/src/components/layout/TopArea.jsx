import "../../css/toparea.css";
import { Tap } from "../modules/Tap";
import '../function/clickOn.js';

export default function TopArea() {


    let txt = ['추천상품', '메인상품', '포트폴리오'];
    return (
        <div className="frame-box">
            <div className="header">
                <nav className="gnb">
                    <div>홈</div>
                    <h1>Frontend Shop</h1>
                    <div className='more'>+</div>
                </nav>
                <nav className="lnb">
                    <ol>
                        <Tap txt={txt} />
                    </ol>
                </nav>
            </div>
        </div>
    );
}
