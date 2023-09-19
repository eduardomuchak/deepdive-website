import OrganicSVG from "@/assets/images/Organic.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Background } from "./background";

export function WhoWeAreSection() {
  const t = useTranslations("WhoWeAreSection");
  return (
    <div className="relative mt-[40px] flex min-h-[351px] w-full items-center justify-center bg-brand-secondary-blue py-6 md:mt-[100px]">
      <div className="z-10 flex w-full max-w-6xl flex-col items-center justify-between px-4 md:flex-row md:gap-10">
        <div className="flex items-center justify-center">
          <Image
            src={OrganicSVG}
            alt="Organic"
            className="max-w-[156px] bg-cover py-6 md:max-w-[232px]"
          />
        </div>
        <div className="flex w-full max-w-[597px] flex-col gap-6 md:gap-10">
          <h1 className="text-center font-alt text-[32px] font-bold tracking-tight md:text-left">
            {t("title")}
          </h1>
          <span className="text-center font-sans text-base font-normal text-brand-gray md:text-left">
            {t("text")}
          </span>
        </div>
      </div>
      <Background />
    </div>
  );
}
