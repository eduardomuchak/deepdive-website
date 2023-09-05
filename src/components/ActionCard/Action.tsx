interface ActionCardActionTextProps {
  children: React.ReactNode;
}

export function ActionCardText({ children }: ActionCardActionTextProps) {
  return (
    <span className="font-sans text-sm font-medium text-brand-orange">
      {children}
    </span>
  );
}
