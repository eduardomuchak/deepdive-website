"use client";

import Circles from "@/assets/ellipses/refund/Circles.svg";
import Ellipse1226 from "@/assets/ellipses/refund/Ellipse 1226.svg";
import Ellipse1227 from "@/assets/ellipses/refund/Ellipse 1227.svg";
import Lines from "@/assets/ellipses/refund/Lines.svg";
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
      <Image
        src={Lines}
        alt="Lines background"
        className="absolute left-0 top-[200px] z-[-1] select-none"
        objectFit="cover"
      />
      <Image
        src={Circles}
        alt="Circles background"
        className="absolute bottom-[-680px] right-[0px] z-[-1] select-none md:bottom-[-300px] lg:bottom-[-470px] lg:right-[250px]"
        objectFit="cover"
      />
    </>
  );
}

export default Background;
