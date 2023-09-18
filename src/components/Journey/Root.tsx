interface Props {
  children: React.ReactNode;
}

export function JourneyRoot({ children }: Props) {
  return (
    <div className="flex w-fit max-w-[220px] flex-col items-center">
      {children}
    </div>
  );
}
