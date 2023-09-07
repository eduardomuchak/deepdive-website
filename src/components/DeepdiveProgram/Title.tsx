import { twMerge } from "tailwind-merge";

interface DeepdiveProgramTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function DeepdiveProgramTitle({
  children,
  ...rest
}: DeepdiveProgramTitleProps) {
  return (
    <h1
      className={twMerge(
        "font-sans text-base font-medium text-white",
        rest.className,
      )}
    >
      {children}
    </h1>
  );
}
