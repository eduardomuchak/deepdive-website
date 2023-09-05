"use client";

import refundImage from "@/assets/images/refund.png";
import { ActionCard } from "@/components/ActionCard";
import { ActionCardText } from "@/components/ActionCard/Action";
import Image from "next/image";
import Link from "next/link";
import { DownloadSimple, FileText } from "phosphor-react";

export default function Refund() {
  return (
    <main className="relative mx-auto mt-[90px] w-full max-w-6xl px-2 md:px-5">
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
          className="md:max-w-[350px] lg:max-w-[482px]"
        />
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center space-y-10">
        <h2 className="mt-20 font-alt text-[32px] font-bold leading-tight tracking-tight text-white">
          Saiba como pedir o benefício
        </h2>
        <span className="max-w-[508px] text-center font-sans text-base font-normal leading-relaxed text-brand-gray">
          Conte conosco para fornecer as informações necessárias para a
          solicitação do seu reembolso:
        </span>
        <div className="mx-auto flex h-fit w-full max-w-[862px] flex-row justify-evenly space-x-6">
          <ActionCard.Root>
            <ActionCard.Icon icon={DownloadSimple} />
            <ActionCard.ContentContainer>
              <ActionCard.Title>
                Baixe Modelo de Solicitação de Reembolso
              </ActionCard.Title>
              <Link
                href="https://docs.google.com/document/d/1s07tWfwSEaq0kBIk478dONSKr7zMjsDOrJTTFoa6IEw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionCardText>Baixar</ActionCardText>
              </Link>
            </ActionCard.ContentContainer>
          </ActionCard.Root>
          <ActionCard.Root>
            <ActionCard.Icon icon={FileText} />
            <ActionCard.ContentContainer>
              <ActionCard.Title>
                Solicite seu Report de Assiduidade e Evolução
              </ActionCard.Title>
              <Link
                href="https://docs.google.com/document/d/1s07tWfwSEaq0kBIk478dONSKr7zMjsDOrJTTFoa6IEw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionCardText>Solicitar</ActionCardText>
              </Link>
            </ActionCard.ContentContainer>
          </ActionCard.Root>
        </div>
      </div>
    </main>
  );
}
