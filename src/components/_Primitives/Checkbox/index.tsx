"use client";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface Props extends React.ComponentProps<typeof RadixCheckbox.Root> {
  children: React.ReactNode;
}

export function Checkbox({ children, ...rest }: Props) {
  return (
    <RadixCheckbox.Root
      className="group flex items-center gap-3 focus:outline-none disabled:cursor-not-allowed"
      {...rest}
    >
      <div className="duration-400 group-focus:ring-offset-background flex h-6 w-6 min-w-[24px] items-center justify-center rounded-[4px] border-2 border-brand-gray bg-transparent transition-all group-focus:ring-2 group-focus:ring-brand-orange group-focus:ring-offset-2 group-data-[state=checked]:border-brand-orange group-data-[state=checked]:bg-brand-orange">
        <RadixCheckbox.Indicator>
          <Check size={20} color={"#151f27"} weight="bold" />
        </RadixCheckbox.Indicator>
      </div>

      <span className="text-left font-sans text-xs font-normal leading-tight tracking-wide text-brand-gray">
        {children}
      </span>
    </RadixCheckbox.Root>
  );
}
