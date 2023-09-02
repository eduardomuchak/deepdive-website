"use client";

import { useEffect, useRef, useState } from "react";
import { InputField } from "./Field";
import { InputLabel } from "./Label";
import { InputLabelBackground } from "./LabelBackground";
import { InputRoot } from "./Root";
import { Input } from "./interface";

export function Input({ label, id, icon, ...rest }: Input.MainProps) {
  const [isActive, setIsActive] = useState(false);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const labelWidth = labelRef.current?.offsetWidth;
    if (labelWidth) {
      const labelBackground = document.getElementById(`${id}-labelBackground`);
      if (labelBackground) {
        labelBackground.style.width = `${labelWidth}px`;
      }
    }
  }, [labelRef, label]);

  return (
    <InputRoot>
      <InputLabelBackground
        id={id}
        isActive={isActive}
        isInputFilled={!!rest.value.length}
      />
      <InputLabel
        htmlFor={id}
        isActive={isActive}
        labelRef={labelRef}
        label={label}
        isInputFilled={!!rest.value.length}
      />
      <InputField id={id} setIsActive={setIsActive} {...rest} />
      {icon && (
        <button className="absolute right-5 top-7 -translate-y-1/2 transform focus:outline-none">
          {icon}
        </button>
      )}
    </InputRoot>
  );
}
