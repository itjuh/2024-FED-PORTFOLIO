import { Icon } from "./Icon";

export function Option({ option }) {
  let propsOption = option;
  return (
    <div>
      <div>{propsOption.title}</div>
      <div>
        {propsOption.option.map((v,i) => (
          <div key={i}>
            <Icon iconName={v.icon} iconSize={90} iconColor={null} />
            <div>{v.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
