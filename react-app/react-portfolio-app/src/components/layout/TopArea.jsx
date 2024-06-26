import "../../css/toparea.css";
import { Tap } from "../modules/Tap";
import { FaHome } from "react-icons/fa";

export default function TopArea() {
    return (
        <div className="header">
            <nav className="gnb">
                <div className="home"><FaHome /></div>
                <h1>Frontend Shop</h1>
                <div className="more">+</div>
            </nav>
            <nav className="lnb">
                <ol>
                    <Tap />
                </ol>
            </nav>
        </div>
    );
}
