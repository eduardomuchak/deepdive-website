interface DeepdiveProgramTitleProps {
  children: React.ReactNode;
}

export function DeepdiveProgramTitle({ children }: DeepdiveProgramTitleProps) {
  return (
    <h1 className="font-sans text-base font-medium text-white">{children}</h1>
  );
}
