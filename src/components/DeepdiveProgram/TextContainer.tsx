interface DeepdiveProgramTextContainerProps {
  children: React.ReactNode;
}

export function DeepdiveProgramTextContainer({
  children,
}: DeepdiveProgramTextContainerProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
