import { ComponentProps, ReactNode } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  children: string | ReactNode;
};

