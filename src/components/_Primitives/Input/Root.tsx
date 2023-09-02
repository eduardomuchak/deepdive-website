"use client";

import { Input } from "./interface";

export function InputRoot({ children }: Input.RootProps) {
  return <div className="relative flex w-full flex-col">{children}</div>;
}
