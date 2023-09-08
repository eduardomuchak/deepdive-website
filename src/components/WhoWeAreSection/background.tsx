import Ellipse1229 from "@/assets/background/home/Ellipse 1229.svg";
import Image from "next/image";
export function Background() {
  return (
    <Image
      src={Ellipse1229}
      alt="Ellipse 1229"
      className="absolute left-0 top-0 -z-0 select-none bg-cover"
    />
  );
}
