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
      className={`relative flex w-[263px] scale-75 flex-col items-center justify-start overflow-hidden rounded-xl px-6 py-[30px]`}
    >
      <Image
        src={info.icon}
        alt="Icon image"
        className="absolute left-0 top-0 min-h-[64px] select-none"
      />

      <Image
        src={info.image}
        alt="Person image"
        className="mb-[14px] aspect-square w-[156px]"
      />

      <span className="font-barlow mb-6 text-center text-2xl font-medium tracking-wider">
        {info.title}
      </span>
      <span className="text-center font-sans text-base font-normal leading-normal tracking-wider">
        {info.description}
      </span>
    </div>
  );
}
