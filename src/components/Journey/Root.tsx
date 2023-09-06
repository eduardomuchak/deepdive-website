interface Props {
  children: React.ReactNode;
}

export function JourneyRoot({ children }: Props) {
  return (
    <div className="flex w-fit max-w-[182px] flex-col items-center">
      {children}
    </div>
  );
}
