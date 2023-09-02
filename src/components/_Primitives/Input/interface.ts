import { ComponentProps, ReactNode } from "react";

export namespace Input {
  export interface MainProps extends ComponentProps<"input"> {
    label: string;
    id: string;
    value: string;
    icon?: React.ReactNode;
  }

  export type RootProps = ComponentProps<"div"> & {
    children: ReactNode;
  };

  export type LabelProps = ComponentProps<"label"> & {
    htmlFor: string;
    isActive: boolean;
    labelRef: React.RefObject<HTMLLabelElement>;
    label: string;
    isInputFilled: boolean;
  };

  export type LabelBackgroundProps = ComponentProps<"label"> & {
    id: string;
    isActive: boolean;
    isInputFilled: boolean;
  };

  export type FieldProps = ComponentProps<"input"> & {
    id: string;
    setIsActive: (isActive: boolean) => void;
  };

  export type MaskedFieldProps = ComponentProps<"input"> & {
    children: ReactNode;
    mask: string;
  };

  export type ErrorProps = ComponentProps<"span"> & {
    children: ReactNode | string;
  };
}
