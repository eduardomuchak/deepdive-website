"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../_Primitives/Button";

export function NewCTASection() {
  const t = useTranslations("NewCTASection");

  return (
    <div className="mx-auto mt-8 flex max-w-6xl flex-col justify-between px-4 md:mt-[60px] md:flex-row md:px-5">
      <div className="flex w-full max-w-[417px] flex-col">
        <h1 className="mb-6 font-alt text-[45px] leading-tight tracking-tight md:mb-10 md:text-[40px]">
          {t("welcome")} <strong>{t("welcomeStrong")}</strong>
        </h1>
        <span className="mb-7 font-sans text-base font-normal text-white">
          {t("speak")}
        </span>
        <Link
          rel="noopener noreferrer"
          href={"https://deepdiveschool.rds.land/diagnostico"}
          target="_blank"
          className="z-10 hidden w-fit md:block"
        >
          <Button className="max-w-[234px]">{t("try")}</Button>
        </Link>
      </div>
      <div className="flex flex-row"></div>
    </div>
  );
}