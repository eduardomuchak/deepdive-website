"use client";

import SecondaryHomeImage from "@/assets/images/Group 486.png";
import HomeImage from "@/assets/images/home.png";
import { DeepdiveProgram } from "@/components/DeepdiveProgram";
import { Button } from "@/components/_Primitives/Button";
import Image from "next/image";
import Link from "next/link";
import { Check } from "phosphor-react";
import Background from "./background";

const whyChooseDeepdive = [
  {
    id: 1,
    title: "Aprendizado personalizado",
    content:
      "Chegue no seu objetivo de forma rápida, mas sem perder a consistência com programas personalizados para você.",
  },
  {
    id: 2,
    title: "Networking global",
    content:
      "Faça parte de uma comunidade exclusiva de líderes de alto nível fluentes em inglês. Amplie sua rede internacional e crie conexões significativas.",
  },
  {
    id: 3,
    title: "Experiências internacionais",
    content:
      "Participe de imersões nos principais eventos de negócios do mundo, enquanto aprimora seu inglês e ganha insights para seu negócio.",
  },
];

export default function Home() {
  return (
    <>
      <main className="relative mx-auto mt-[90px] w-full max-w-6xl px-4 md:px-5">
        <div className="mt-8 flex flex-col justify-between md:mt-[60px] md:flex-row">
          <div className="flex w-full max-w-[417px] flex-col">
            <h1 className="mb-6 font-alt text-[45px] leading-tight tracking-tight md:mb-10 md:text-[40px]">
              A evolução do inglês <strong>para profissionais globais</strong>
            </h1>
            <span className="mb-7 font-sans text-base font-normal text-white">
              Fale inglês com segurança e desbloqueie sua potência profissional.
            </span>
            <Link
              rel="noopener noreferrer"
              href={"https://deepdiveschool.rds.land/diagnostico"}
              target="_blank"
              className="hidden w-fit md:block"
            >
              <Button className="max-w-[234px]">
                Testar Agora Gratuitamente
              </Button>
            </Link>
          </div>
          <Image
            src={HomeImage}
            alt="Home image"
            className="w-full md:max-w-[400px] lg:max-w-[512px]"
          />
        </div>
        <div className="mt-[50px] flex flex-col-reverse justify-between gap-6 md:mt-[100px] md:flex-row">
          <Image
            src={SecondaryHomeImage}
            alt="Secondary image"
            className="flex h-full max-h-[414px] w-full items-start justify-center md:max-w-[280px] lg:w-full lg:max-w-[419px] lg:flex-grow-1"
          />
          <div className="flex max-w-[597px] flex-grow-2 flex-col">
            <h1 className="mb-6 text-center font-alt text-[32px] font-bold tracking-tight text-white md:mb-10 md:text-left">
              Por que escolher a Deepdive?
            </h1>

            {whyChooseDeepdive.map((item) => (
              <DeepdiveProgram.Root
                key={item.id}
                className={item.id === whyChooseDeepdive.length ? "" : "mb-6"}
              >
                <DeepdiveProgram.Icon icon={Check} />
                <DeepdiveProgram.TextContainer>
                  <DeepdiveProgram.Title>{item.title}</DeepdiveProgram.Title>
                  <DeepdiveProgram.Content>
                    {item.content}
                  </DeepdiveProgram.Content>
                </DeepdiveProgram.TextContainer>
              </DeepdiveProgram.Root>
            ))}
          </div>
        </div>
      </main>
      <Background />
    </>
  );
}
