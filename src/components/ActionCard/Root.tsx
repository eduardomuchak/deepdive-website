interface ActionCardRootProps {
  children: React.ReactNode;
}

export function ActionCardRoot({ children }: ActionCardRootProps) {
  return (
    <div className="flex w-full flex-col rounded-2xl bg-brand-secondary-blue p-4">
      {children}
    </div>
  );
}
