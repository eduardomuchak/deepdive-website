import OrganicSVG from "@/assets/images/Organic.svg";
import Image from "next/image";
import { Background } from "./background";

export function WhoWeAreSection() {
  return (
    <div className="relative mt-[180px] flex w-full items-center justify-center bg-brand-secondary-blue py-6 md:mt-[100px]">
      <div className="z-10 flex w-full max-w-6xl flex-col items-center justify-between px-4 md:flex-row">
        <div className="flex h-[112px] items-center justify-center">
          <Image
            src={OrganicSVG}
            alt="Organic"
            className="-translate-y-1/2 bg-cover md:max-w-[400px] md:translate-y-0"
          />
        </div>
        <div className="flex w-full max-w-[597px] -translate-y-5 flex-col gap-6 md:gap-10">
          <h1 className="text-center font-alt text-[32px] font-bold tracking-tight md:text-left">
            Quem somos
          </h1>
          <span className="text-center font-sans text-base font-normal text-brand-gray md:text-left">
            Nascemos no mercado brasileiro com a missão de capacitar líderes a
            se comunicarem em inglês de forma segura e independente, formando
            profissionais globais confiantes que criam conexões valiosas ao
            redor do mundo.
          </span>
        </div>
      </div>
      <Background />
    </div>
  );
}
