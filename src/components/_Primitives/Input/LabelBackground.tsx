"use client";

import { twMerge } from "tailwind-merge";
import { Input } from "./interface";

export function InputLabelBackground({
  id,
  isActive,
  isInputFilled,
}: Input.LabelBackgroundProps) {
  return (
    <div
      id={`${id}-labelBackground`}
      className={twMerge(
        "absolute left-5 z-10 h-1 transform transition-all duration-300",
        isActive && "translate-y-[-2px] bg-brand-primary-blue",
        isInputFilled && "translate-y-[-2px] bg-brand-primary-blue",
      )}
    />
  );
}
