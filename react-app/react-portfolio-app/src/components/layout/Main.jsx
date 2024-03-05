import { Items } from "../modules/Items";
import '../../css/main.css';

export default function Main() {
    return (
        <div className="main">
            <div className="items-area">
                <ul>
                    <Items />
                </ul>
            </div>
            <div className="view-area">
                <div className="selected-view"></div>
                <div className="info-view">
                    <div className="timer"></div>
                    <div className="del-btn"></div>
                    <div className="sel-count"></div>
                    <div className="order-btn"></div>
                </div>
            </div>
        </div>
    );
}
