"use client";

import refundImage from "@/assets/images/refund.png";
import Image from "next/image";

export default function Refund() {
  return (
    <div className="relative mx-auto mt-[90px] w-full max-w-6xl px-2 md:px-5">
      <div className="flex w-full flex-row flex-wrap items-center justify-center px-2 md:flex-nowrap">
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
          className="w-full md:max-w-[350px] lg:max-w-[482px]"
        />
      </div>
    </div>
  );
}
