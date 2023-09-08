"use client";

import refundImage from "@/assets/images/refund.png";
import { ActionCard } from "@/components/ActionCard";
import { ActionCardText } from "@/components/ActionCard/Action";
import { DeepdiveProgram } from "@/components/DeepdiveProgram";
import { OrangeCard } from "@/components/OrangeCard";
import Image from "next/image";
import Link from "next/link";
import { Check, DownloadSimple, FileText } from "phosphor-react";

const deepDiveProgram = [
  {
    id: 1,
    title: "Desenvolvimento de líderes globais",
    content:
      "Ao reembolsar o programa Deepdive, a empresa está investindo no desenvolvimento de seus líderes, capacitando-os com habilidades de comunicação em inglês, visão de negócios global e capacidade de liderança eficaz em um contexto internacional. Líderes mais habilidosos impulsionam a inovação, o desempenho da equipe e o crescimento da empresa como um todo.",
  },
  {
    id: 2,
    title: "Alinhamento com objetivos empresariais",
    content:
      "A Deepdive oferece programas personalizados, que podem ser adaptados aos objetivos específicos de cada líder e às necessidades da empresa. Ao reembolsar o programa, a empresa está demonstrando seu compromisso em alinhar o desenvolvimento de seus líderes com os objetivos estratégicos e o crescimento do negócio.",
  },
  {
    id: 3,
    title: "Experiências e insights internacionais",
    content:
      "A Deepdive oferece a oportunidade de vivenciar imersões globais, aprimorando não só suas habilidades de comunicação em inglês, mas também na visão de negócios. Ao reembolsar o programa, a empresa está investindo no enriquecimento profissional de seus líderes, que trarão novas perspectivas e insights para a empresa.",
  },
];

const actions = [
  {
    id: 1,
    title: "Baixe Modelo de Solicitação de Reembolso",
    link: "https://docs.google.com/document/d/1s07tWfwSEaq0kBIk478dONSKr7zMjsDOrJTTFoa6IEw/edit?usp=sharing",
    linkText: "Baixar",
    icon: DownloadSimple,
  },
  {
    id: 2,
    title: "Solicite seu Report de Assiduidade e Evolução",
    link: "https://docs.google.com/document/d/1s07tWfwSEaq0kBIk478dONSKr7zMjsDOrJTTFoa6IEw/edit?usp=sharing",
    linkText: "Solicitar",
    icon: FileText,
  },
];

export default function Refund() {
  return (
    <main className="relative mx-auto mt-[90px] w-full max-w-6xl px-4 md:px-5">
      <div className="flex w-full flex-row flex-wrap items-center justify-between  px-2 md:flex-nowrap">
        <div className="flex w-fit max-w-[508px] flex-col space-y-10">
          <h1 className="font-alt text-[40px] font-normal leading-tight tracking-tight text-white">
            Seu inglês potencializa os{" "}
            <strong>resultados da sua empresa</strong>
          </h1>
          <span className="font-sans text-base font-normal leading-relaxed text-brand-gray">
            Muitos de nossos participantes solicitam o reembolso dos nossos
            programas para suas empresas, porque a forma como você aprende
            inglês na Deepdive expandirá sua capacidade de produzir resultados
            que impulsionam não só o seu crescimento, mas também o do negócio em
            que você atua.
          </span>
        </div>
        <Image
          src={refundImage}
          alt="refund image"
          className="w-auto md:max-w-[350px] lg:max-w-[482px]"
        />
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <h2 className="mb-6 mt-[60px] font-alt text-[28px] font-bold leading-tight tracking-tight text-white md:mb-10 md:mt-[50px] md:text-[32px]">
          Saiba como pedir o benefício
        </h2>
        <span className="mb-4 max-w-[508px] text-left font-sans text-base font-normal leading-relaxed text-brand-gray md:mb-10 md:text-center">
          Conte conosco para fornecer as informações necessárias para a
          solicitação do seu reembolso:
        </span>
        <div className="mx-auto flex h-fit w-full max-w-[862px] flex-col justify-evenly gap-6 md:flex-row">
          {actions.map((action) => (
            <ActionCard.Root key={action.id}>
              <ActionCard.Icon icon={action.icon} />
              <ActionCard.ContentContainer>
                <ActionCard.Title>{action.title}</ActionCard.Title>
                <Link
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ActionCardText>{action.linkText}</ActionCardText>
                </Link>
              </ActionCard.ContentContainer>
            </ActionCard.Root>
          ))}
        </div>
        <div className="mb-6 mt-[60px] flex flex-col md:mt-[100px] md:flex-row md:gap-6">
          <h2 className="mb-6 flex min-w-[330px] font-alt text-[28px] font-bold leading-tight tracking-tight text-white md:mb-10 md:text-[32px]">
            Por que empresas devem reembolsar o Programa Deepdive?
          </h2>
          <div className="flex flex-col gap-4 md:gap-6">
            {deepDiveProgram.map((item) => (
              <DeepdiveProgram.Root key={item.id}>
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
      </div>

      <OrangeCard />
    </main>
  );
}
