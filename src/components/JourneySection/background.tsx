import Ellipse1226Mobile from "@/assets/background/home/Ellipse 1226 Mobile.svg";
import Ellipse1227Mobile from "@/assets/background/home/Ellipse 1227 Mobile.svg";
import Ellipse1227 from "@/assets/background/home/Ellipse 1227.svg";
import Ellipse1228 from "@/assets/background/home/Ellipse 1228.svg";
import Image from "next/image";
export function Background() {
  return (
    <>
      <Image
        src={Ellipse1227}
        alt="Ellipse 1227"
        className="absolute left-0 top-0 -z-0 hidden select-none bg-cover md:block"
      />
      <Image
        src={Ellipse1228}
        alt="Ellipse 1228"
        className="absolute bottom-0 right-0 -z-0 hidden w-full select-none bg-cover md:block"
      />
      <Image
        src={Ellipse1227Mobile}
        alt="Ellipse 1227 Mobile"
        className="absolute left-0 top-0 -z-0 block select-none bg-cover md:hidden"
      />
      <Image
        src={Ellipse1226Mobile}
        alt="Ellipse 1226 Mobile"
        className="absolute bottom-0 right-0 -z-0 block w-full select-none bg-cover md:hidden"
      />
    </>
  );
}
