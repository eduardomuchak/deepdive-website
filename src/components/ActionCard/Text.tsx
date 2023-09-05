interface ActionCardTitleProps {
  children: React.ReactNode;
}

export function ActionCardTitle({ children }: ActionCardTitleProps) {
  return <span className="font-sans text-base font-medium">{children}</span>;
}
