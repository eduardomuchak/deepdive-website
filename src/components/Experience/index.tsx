import PinSVG from "@/assets/icons/pin.svg";
import Image from "next/image";

interface Experience {
  id: number;
  title: string;
  content: string;
  month: string;
  year: number;
}

interface ExperienceProps {
  experience: Experience;
  showLineDivider?: boolean;
}

export function Experience({
  experience: { year, month, content, title },
  showLineDivider,
}: ExperienceProps) {
  return (
    <div className="flex w-full max-w-[530px] flex-row gap-2">
      <div className="flex flex-col items-center">
        <span className="font-sans text-sm font-medium text-brand-orange">
          {month}
        </span>
        <span className="font-sans text-sm font-medium text-brand-orange">
          {year}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={PinSVG}
          alt="Pin"
          width={24}
          height={24}
          className="min-h-[24px] min-w-[24px]"
        />
        {showLineDivider && (
          <div className="my-1 h-full w-[2px] bg-brand-orange" />
        )}
      </div>
      <div className="flex w-full flex-col gap-1">
        <h1 className="font-sans text-base font-medium">{title}</h1>
        <span className="mb-4 font-sans text-sm font-normal leading-relaxed text-brand-gray">
          {content}
        </span>
      </div>
    </div>
  );
}
