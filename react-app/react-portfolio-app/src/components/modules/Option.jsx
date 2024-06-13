import { Icon } from "./Icon";
import "../../css/option.css";

export function Option({ option }) {
  let propsOption = option;

  return (
    <div>
      <div className="option-tit">{propsOption.title}</div>
      <div className="option-area">
        {propsOption.option.map((v, i) => (
          <label htmlFor={v.icon} className="icon-label"  key={i}>
              <input type="checkbox" id={v.icon} defaultChecked value={v.label}/>
              <div className="option-icon">
                <div className="icon-check">
                  <Icon iconName={"check"} iconSize={"20px"} iconColor={"var(--mint)"} />
                </div>
                <Icon iconName={v.icon} iconSize={"var(--pop-icon)"} iconColor={null} />
                {v.label}
              </div>
            </label>
        ))}
      </div>
    </div>
  );
}
