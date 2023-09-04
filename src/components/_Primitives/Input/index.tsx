"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import { InputField } from "./Field";
import { InputLabel } from "./Label";
import { InputLabelBackground } from "./LabelBackground";
import { InputRoot } from "./Root";
import { Input as IInput } from "./interface";

export const Input = forwardRef(
  ({ label, id, icon, ...rest }: IInput.MainProps, _ref) => {
    const [isActive, setIsActive] = useState(false);
    const labelRef = useRef<HTMLLabelElement>(null);

    useEffect(() => {
      const labelWidth = labelRef.current?.offsetWidth;
      if (labelWidth) {
        const labelBackground = document.getElementById(
          `${id}-labelBackground`,
        );

        if (labelBackground) {
          const finalWidth = labelWidth - (labelWidth * 20) / 100;
          labelBackground.style.width = `${finalWidth}px`;
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
        <InputField
          id={id}
          setIsActive={setIsActive}
          {...rest}
          ref={rest.ref}
        />
        {icon && (
          <button className="absolute right-5 top-7 -translate-y-1/2 transform focus:outline-none">
            {icon}
          </button>
        )}
      </InputRoot>
    );
  },
);
