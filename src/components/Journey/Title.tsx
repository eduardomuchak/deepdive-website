interface Props {
  children: React.ReactNode;
  showDivider?: boolean;
}

export function JourneyTitle({ children, showDivider }: Props) {
  return (
    <div className="relative mb-2 w-fit rounded-lg bg-brand-gray px-3 py-1.5">
      <span className="text-center font-sans text-sm font-medium text-brand-primary-blue">
        {children}
      </span>
      {showDivider && (
        <div className="absolute top-[16px] hidden border-2 border-brand-gray md:-right-24 md:w-24 lg:-right-48 lg:block lg:w-48" />
      )}
    </div>
  );
}
