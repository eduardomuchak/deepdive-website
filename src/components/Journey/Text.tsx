interface Props {
  children: React.ReactNode;
}

export function JourneyText({ children }: Props) {
  return (
    <span className="text-center font-sans text-base font-semibold text-white">
      {children}
    </span>
  );
}
