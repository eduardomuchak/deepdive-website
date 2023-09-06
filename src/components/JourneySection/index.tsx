import Image1 from "@/assets/images/Journey/1.svg";
import Image2 from "@/assets/images/Journey/2.svg";
import Image3 from "@/assets/images/Journey/3.svg";
import Image4 from "@/assets/images/Journey/4.svg";
import Image5 from "@/assets/images/Journey/5.svg";
import { Journey } from "../Journey";
import { Background } from "./background";

const journey = [
  {
    id: 1,
    title: "Personalização",
    text: "Nivelamento e definição de objetivos",
    image: Image1,
  },
  {
    id: 2,
    title: "Exclusividade",
    text: "Aulas semanais com professor particular",
    image: Image2,
  },
  {
    id: 3,
    title: "Consistência",
    text: "Prática diária com tecnologia de ponta",
    image: Image3,
  },
  {
    id: 4,
    title: "Networking Internacional",
    text: "Encontros online com líderes e especialistas internacionais",
    image: Image4,
  },
  {
    id: 5,
    title: "Experiência Global",
    text: "Imersão em eventos internacionais de negócios",
    image: Image5,
  },
];

export function JourneySection() {
  return (
    <div className="relative w-full bg-brand-secondary-blue px-4 pb-[320px] pt-[60px] md:px-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <h1 className="mb-10 text-center font-alt text-[32px] font-bold tracking-tight">
          Sua jornada na Deepdive
        </h1>
        <div className="flex w-full flex-row justify-between">
          {journey.map((item) => (
            <Journey.Root key={item.id}>
              <Journey.Image image={item.image} />
              <Journey.Title showDivider={item.id !== journey.length}>
                {item.title}
              </Journey.Title>
              <Journey.Text>{item.text}</Journey.Text>
            </Journey.Root>
          ))}
        </div>
      </div>

      <Background />
    </div>
  );
}
