"use client";

import { twMerge } from "tailwind-merge";

interface FormRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function FormRoot({ children, ...rest }: FormRootProps) {
  return (
    <div
      className={twMerge(
        "w-full rounded-[28px] bg-brand-secondary-blue px-5 py-10 md:px-10",
        rest.className,
      )}
    >
      {children}
    </div>
  );
}

export default FormRoot;
