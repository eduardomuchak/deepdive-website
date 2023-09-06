"use client";

import Ellipse1226 from "@/assets/background/refund/Ellipse 1226.svg";
import Ellipse1227 from "@/assets/background/refund/Ellipse 1227.svg";
import Image from "next/image";

export function Background() {
  return (
    <>
      <Image
        src={Ellipse1227}
        alt="Ellipse 1227"
        className="absolute left-0 top-0 z-[-1] select-none"
        objectFit="cover"
      />
      <Image
        src={Ellipse1226}
        alt="Ellipse 1226"
        className="absolute right-0 top-[70px] z-[-1] select-none"
        objectFit="cover"
      />
    </>
  );
}

export default Background;
