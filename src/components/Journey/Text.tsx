interface Props {
  children: React.ReactNode;
  showDivider?: boolean;
}

export function JourneyText({ children, showDivider }: Props) {
  return (
    <div className="relative mb-[66px] text-center lg:mb-0">
      <span className="font-sans text-base font-semibold text-white">
        {children}
      </span>
      {showDivider && (
        <div className="absolute -bottom-[56px] right-[106px] block h-[50px] border-2 border-brand-gray lg:hidden lg:w-24" />
      )}
    </div>
  );
}
