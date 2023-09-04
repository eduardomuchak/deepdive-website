interface InputContainerProps {
  children: React.ReactNode;
}

export function FormInputContainer({ children }: InputContainerProps) {
  return <div className="flex w-full flex-col space-y-4">{children}</div>;
}
