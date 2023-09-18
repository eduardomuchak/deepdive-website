import Image, { StaticImageData } from "next/image";

interface RoleCard {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  icon: StaticImageData;
  color: string;
}

interface RoleCardProps {
  info: RoleCard;
}

export function RoleCard({ info }: RoleCardProps) {
  return (
    <div
      style={{
        backgroundColor: info.color,
      }}
      className={`relative mx-4 flex min-h-[340px] w-[240px] flex-col items-center justify-start overflow-hidden rounded-xl px-6 py-[30px] md:mx-0`}
    >
      <Image
        src={info.icon}
        alt="Icon image"
        className="absolute left-0 top-0 min-h-[64px] select-none"
      />

      <Image
        src={info.image}
        alt="Person image"
        className="mb-[14px] aspect-square w-[130px]"
      />

      <span className="font-barlow mb-6 text-center text-xl font-medium tracking-wider">
        {info.title}
      </span>
      <span className="text-center font-sans text-sm font-normal leading-normal tracking-wider">
        {info.description}
      </span>
    </div>
  );
}
