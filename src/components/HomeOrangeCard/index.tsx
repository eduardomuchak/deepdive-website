import BackgroundLinesMobile from "@/assets/background/lines-mobile.svg";
import BackgroundLines from "@/assets/background/lines.svg";
import SmartphoneImage from "@/assets/images/smartphone.png";
import Image from "next/image";
import { Check } from "phosphor-react";
import { DeepdiveProgram } from "../DeepdiveProgram";

const jackieFunctions = [
  {
    id: 1,
    text: "Extensão das aulas particulares",
  },
  {
    id: 2,
    text: "Conversação sem medo",
  },
  {
    id: 3,
    text: "Práticas que cabem na sua rotina",
  },
  {
    id: 4,
    text: "Conteúdo personalizado para o seu objetivo",
  },
  {
    id: 5,
    text: "Report com dicas para sua evolução",
  },
];

export function HomeOrangeCard() {
  return (
    <div className="h-[507px] w-full px-4 md:h-[236px] lg:h-[224px]">
      <div className="relative mx-auto flex h-fit min-h-[442px] w-full max-w-[1040px] -translate-y-[40%] flex-col items-end justify-evenly overflow-hidden rounded-[28px] bg-brand-orange px-4 md:-translate-y-1/2 md:flex-row">
        <Image
          src={BackgroundLines}
          alt="Lines background"
          className="inset-0 -z-0 hidden w-auto select-none bg-brand-orange bg-cover md:absolute md:flex md:h-full md:w-full"
        />
        <Image
          src={BackgroundLinesMobile}
          alt="Lines background"
          className="absolute bottom-0 -z-0 w-full select-none bg-cover md:hidden"
        />
        <div className="z-10 my-auto mb-6 mt-6 flex flex-col md:mt-10">
          <h1 className="mb-5 w-full max-w-[500px] font-alt text-[32px] font-bold leading-tight tracking-tight text-brand-primary-blue md:mb-8 md:text-[40px]">
            Tecnologia de ponta para alcançar seu objetivo
          </h1>
          <span className="mb-4 max-w-[527px] font-sans text-base font-normal text-brand-secondary-blue">
            Já pensou em praticar conversação em inglês diariamente, sem medo e
            com conteúdo 100% direcionado ao seu objetivo? <br />
            Conheça a Jackie, a extensão virtual do seu professor particular que
            irá acelerar seu aprendizado de forma totalmente personalizada e
            exclusiva:
          </span>

          {jackieFunctions.map((item) => (
            <DeepdiveProgram.Root className="mb-1" key={item.id}>
              <DeepdiveProgram.Icon
                icon={Check}
                className="h-6 w-6 text-white"
              />

              <DeepdiveProgram.Title className="font-normal text-brand-secondary-blue">
                {item.text}
              </DeepdiveProgram.Title>
            </DeepdiveProgram.Root>
          ))}
        </div>
        <Image
          src={SmartphoneImage}
          alt="Smartphone Deepdive"
          className="z-0 h-[309px] w-[193px] select-none self-center bg-cover md:h-[406px] md:w-[254px] md:self-end"
        />
      </div>
    </div>
  );
}
