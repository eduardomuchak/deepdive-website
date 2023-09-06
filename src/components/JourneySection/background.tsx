import Ellipse1227 from "@/assets/background/home/Ellipse 1227.svg";
import Ellipse1228 from "@/assets/background/home/Ellipse 1228.svg";
import Image from "next/image";
export function Background() {
  return (
    <>
      <Image
        src={Ellipse1227}
        alt="Ellipse 1227"
        className="absolute left-0 top-0 -z-0 select-none"
        objectFit="cover"
      />
      <Image
        src={Ellipse1228}
        alt="Ellipse 1228"
        className="absolute bottom-0 right-0 -z-0 select-none"
        objectFit="cover"
      />
    </>
  );
}
