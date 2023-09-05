import { IconProps } from "phosphor-react";
import { ElementType } from "react";

interface DeepDiveProgramIconProps extends IconProps {
  icon: ElementType;
}

export function DeepDiveProgramIcon({
  icon: Icon,
  ...rest
}: DeepDiveProgramIconProps) {
  return (
    <Icon
      className={"flex h-6 w-6 min-w-[24px] text-brand-orange"}
      weight={"bold"}
      {...rest}
    />
  );
}
