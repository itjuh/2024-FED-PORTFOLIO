import { ReceiptMain } from "./ReceiptMain";

export function ReceiptBackground(){
    return(<div>
        <Icon iconName={"receipt"} iconSize={"45px"} iconColor={null} />
        <span>receipt</span>
        <div className="receipt-input-area"></div>
        <ReceiptMain />
    </div>);
}