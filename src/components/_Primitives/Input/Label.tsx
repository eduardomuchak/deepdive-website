"use client";

import { twMerge } from "tailwind-merge";
import { Input } from "./interface";

export function InputLabel({
  htmlFor,
  isActive,
  labelRef,
  label,
  isInputFilled,
}: Input.LabelProps) {
  return (
    <label
      ref={labelRef}
      className={twMerge(
        "pointer-events-none absolute left-5 top-[16px] z-10 transform px-1 font-sans text-base text-brand-gray transition-all duration-300",
        isActive && "translate-y-[-28px] text-xs text-brand-orange",
        isInputFilled && "translate-y-[-28px] text-xs text-brand-gray",
        isActive && isInputFilled && "text-brand-orange",
      )}
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
}
