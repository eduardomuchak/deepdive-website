"use client";

import { Input } from "./interface";

export function InputField({
  id,
  value,
  setIsActive,
  ...rest
}: Input.FieldProps) {
  return (
    <input
      className="relative z-auto flex h-14 w-full appearance-none flex-row  justify-between rounded-[4px] border-2 border-brand-gray bg-brand-secondary-blue px-7 py-4 font-sans transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange"
      id={id}
      value={value}
      onFocusCapture={() => setIsActive(true)}
      onBlurCapture={() => setIsActive(false)}
      {...rest}
    />
  );
}
