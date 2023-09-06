import Image from "next/image";

interface Props {
  image: string;
}

export function JourneyImage({ image }: Props) {
  return (
    <Image
      src={image}
      alt="Image of Deepdive journey"
      className="mb-4 max-h-[80px] min-w-[80px] max-w-[80px]"
    />
  );
}
