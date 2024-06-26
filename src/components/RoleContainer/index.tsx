"use client";
import WavesBG from "@/assets/background/home/Waves.svg";
import Icon3 from "@/assets/icons/education-cap-svgrepo-com 1.svg";
import Icon4 from "@/assets/icons/favorite-svgrepo-com 1.svg";
import Icon1 from "@/assets/icons/find-magnifier-search-zoom-look-svgrepo-com 1.svg";
import Icon2 from "@/assets/icons/sales-up-graph-svgrepo-com 1.svg";
import Image2 from "@/assets/images/otherPeople/Bill Russell-1.png";
import Image3 from "@/assets/images/otherPeople/Bill Russell-2.png";
import Image4 from "@/assets/images/otherPeople/Bill Russell-3.png";
import Image1 from "@/assets/images/otherPeople/Bill Russell.png";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { RoleCard } from "../RoleCard";

export function RoleContainer() {
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
    <div className="relative flex w-full flex-row bg-red-500">
      <Image
        src={WavesBG}
        alt={"Waves background"}
        className="absolute inset-0 -z-10 w-full max-w-[620px]"
      />
      {info.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: item.id % 2 === 0 ? "0px" : "150px",
            marginTop: item.id % 2 !== 0 ? "0px" : "150px",
          }}
        >
          <RoleCard info={item} />
        </div>
      ))}
    </div>
  );
}
