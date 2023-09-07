import { IconProps } from "phosphor-react";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface DeepDiveProgramIconProps extends IconProps {
  icon: ElementType;
}

export function DeepDiveProgramIcon({
  icon: Icon,
  ...rest
}: DeepDiveProgramIconProps) {
  return (
    <Icon
      className={twMerge(
        "flex h-6 w-6 min-w-[24px] text-brand-orange",
        rest.className,
      )}
      weight={"bold"}
      {...rest}
    />
  );
}
