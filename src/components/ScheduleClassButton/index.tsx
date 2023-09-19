"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../_Primitives/Button";

export function ScheduleClassButton() {
  const t = useTranslations("ScheduleClass");

  return (
    <div className="sticky bottom-0 left-0 z-50 flex h-[84px] items-center justify-center bg-brand-primary-blue sm:hidden">
      <Link
        rel="noopener noreferrer"
        href={"http://app.deepdivetech.ai"}
        target="_blank"
      >
        <Button className="max-w-[250px]">{t("button")}</Button>
      </Link>
    </div>
  );
}
