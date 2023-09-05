import { IconProps } from "phosphor-react";
import { ElementType } from "react";

interface ActionCardIconProps extends IconProps {
  icon: ElementType;
}

export function ActionCardIcon({ icon: Icon, ...rest }: ActionCardIconProps) {
  return (
    <Icon
      className={"flex h-10 w-10 text-brand-orange"}
      weight={"bold"}
      {...rest}
    />
  );
}

export default ActionCardIcon;
