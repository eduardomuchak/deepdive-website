import CintiaNogueira from "@/assets/images/specialists/CintiaNogueira.png";
import TamaraSosa from "@/assets/images/specialists/TamaraSosa.png";
import WilliamCosta from "@/assets/images/specialists/WillianCosta.png";
import { SpecialistsCarousel } from "../SpecialistsCarousel";

const images = [WilliamCosta, CintiaNogueira, TamaraSosa];

const carouselInfo = [
  {
    id: 1,
    image: WilliamCosta,
    name: "William Costa",
    role: "Delta Certified Teacher",
    certification: "Delta Certified",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui tellus vitae dignissim imperdiet. Velit mi eget in non convallis donec pharetra.",
  },
  {
    id: 2,
    image: CintiaNogueira,
    name: "Cintia Nogueira",
    role: "Delta Certified Teacher",
    certification: "Delta Certified",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui tellus vitae dignissim imperdiet. Velit mi eget in non convallis donec pharetra.",
  },
  {
    id: 3,
    image: TamaraSosa,
    name: "Tamara Sosa",
    role: "Celta Certified Teacher",
    certification: "Celta Certified",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui tellus vitae dignissim imperdiet. Velit mi eget in non convallis donec pharetra.",
  },
  {
    id: 4,
    image: WilliamCosta,
    name: "William Costa",
    role: "Delta Certified Teacher",
    certification: "Delta Certified",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui tellus vitae dignissim imperdiet. Velit mi eget in non convallis donec pharetra.",
  },
  {
    id: 5,
    image: CintiaNogueira,
    name: "Cintia Nogueira",
    role: "Delta Certified Teacher",
    certification: "Delta Certified",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui tellus vitae dignissim imperdiet. Velit mi eget in non convallis donec pharetra.",
  },
  {
    id: 6,
    image: TamaraSosa,
    name: "Tamara Sosa",
    role: "Celta Certified Teacher",
    certification: "Celta Certified",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui tellus vitae dignissim imperdiet. Velit mi eget in non convallis donec pharetra.",
  },
];

export function SpecialistsTeamSection() {
  return (
    <div className="mx-auto mt-[130px] flex w-full max-w-6xl flex-col items-center justify-between">
      <h1 className="mb-10 text-center font-alt text-[32px] font-bold tracking-tight text-white">
        Time de Especialistas
      </h1>
      <span className="mb-2 max-w-[686px] text-center font-sans text-base font-normal text-brand-gray">
        Na Deepdive, contamos com uma equipe altamente treinada e qualificada.
        Valorizamos não apenas sua formação acadêmica, mas também sua
        experiência prática, habilidades de comunicação, vicência internacional
        e paixão pelo ensino.
      </span>
      <span className="text-center font-sans text-base font-normal text-brand-gray">
        Conheça nossa Equipe:
      </span>
      <div className="mx-auto flex w-full max-w-6xl">
        <SpecialistsCarousel info={carouselInfo} />
      </div>
    </div>
  );
}
