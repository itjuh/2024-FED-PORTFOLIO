import { Icon } from "./Icon";
import "../../css/option.css";

export function Option({ option }) {
  let propsOption = option;

  return (
    <div>
      <div className="option-tit">{propsOption.title}</div>
      <div className="option-area">
        {propsOption.option.map((v, i) => (
          <label htmlFor={v.icon} className="icon-label">
              <input type="checkbox" id={v.icon} defaultChecked />
              <div key={i} className="option-icon">
                <div className="icon-check">
                  <Icon iconName={"check"} iconSize={20} iconColor={"var(--mint)"} />
                </div>
                <Icon iconName={v.icon} iconSize={40} iconColor={null} />
                {v.label}
              </div>
            </label>
        ))}
      </div>
    </div>
  );
}
