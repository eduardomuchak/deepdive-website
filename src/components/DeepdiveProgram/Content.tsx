interface DeepdiveProgramContentProps {
  children: React.ReactNode;
}

export function DeepdiveProgramContent({
  children,
}: DeepdiveProgramContentProps) {
  return (
    <span className="font-sans text-base font-normal text-brand-gray">
      {children}
    </span>
  );
}
