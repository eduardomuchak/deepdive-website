"use client";

import Icon3 from "@/assets/icons/education-cap-svgrepo-com 1.svg";
import Icon4 from "@/assets/icons/favorite-svgrepo-com 1.svg";
import Icon1 from "@/assets/icons/find-magnifier-search-zoom-look-svgrepo-com 1.svg";
import Icon2 from "@/assets/icons/sales-up-graph-svgrepo-com 1.svg";
import Image2 from "@/assets/images/otherPeople/Bill Russell-1.png";
import Image3 from "@/assets/images/otherPeople/Bill Russell-2.png";
import Image4 from "@/assets/images/otherPeople/Bill Russell-3.png";
import Image1 from "@/assets/images/otherPeople/Bill Russell.png";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { RoleCard } from "../RoleCard";
import { Button } from "../_Primitives/Button";

export function NewCTASection() {
  const t = useTranslations("NewCTASection");

  const info = [
    {
      id: 1,
      title: `${t("card1Title")}`,
      description: `${t("card1Text")}`,
      image: Image1,
      icon: Icon1,
      color: "#FFA365",
    },
    {
      id: 2,
      title: `${t("card2Title")}`,
      description: `${t("card2Text")}`,
      image: Image2,
      icon: Icon2,
      color: "#FC8A4E",
    },
    {
      id: 3,
      title: `${t("card3Title")}`,
      description: `${t("card3Text")}`,
      image: Image3,
      icon: Icon3,
      color: "#FB734F",
    },
    {
      id: 4,
      title: `${t("card4Title")}`,
      description: `${t("card4Text")}`,
      image: Image4,
      icon: Icon4,
      color: "#FE592D",
    },
  ];

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
      <div className="flex flex-row">
        {info.map((item) => (
          <RoleCard info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
