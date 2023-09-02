import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./interface";

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "min-h-[52px] w-full rounded-[16px] bg-brand-orange p-4 font-sans text-base font-medium text-brand-primary-blue transition-all hover:brightness-110 disabled:opacity-80 disabled:hover:cursor-not-allowed",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
