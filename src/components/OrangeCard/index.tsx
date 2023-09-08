import BackgroundLinesMobile from "@/assets/background/lines-mobile.svg";
import BackgroundLines from "@/assets/background/lines.svg";
import SmartphoneImage from "@/assets/images/smartphone.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../_Primitives/Button";

export function OrangeCard() {
  return (
    <div className="relative my-[60px] flex h-fit min-h-[325px] w-full flex-col items-end justify-evenly overflow-hidden rounded-[28px] bg-brand-orange px-4 md:my-20 md:flex-row">
      <Image
        src={BackgroundLines}
        alt="Lines background"
        className="inset-0 -z-0 hidden w-auto select-none bg-brand-orange bg-cover md:absolute md:flex md:w-full"
      />
      <Image
        src={BackgroundLinesMobile}
        alt="Lines background"
        className="absolute inset-0 -z-0 w-full select-none bg-cover md:hidden "
      />
      <div className="z-10 my-auto mt-6 flex flex-col md:mt-10">
        <h1 className="mb-6 w-full max-w-[480px] font-alt text-[32px] leading-tight tracking-tight text-brand-primary-blue md:mb-10 md:text-[40px]">
          A evolução do inglês <br />
          <strong>para profissionais globais</strong>
        </h1>
        <span className="mb-2 font-sans text-base font-normal text-brand-secondary-blue md:mb-8">
          Fale inglês com segurança e desbloqueie sua potência profissional.
        </span>
        <Link
          rel="noopener noreferrer"
          href={"https://deepdiveschool.rds.land/diagnostico"}
          target="_blank"
          className="hidden w-fit md:block"
        >
          <Button className="max-w-[234px] rounded-2xl bg-brand-primary-blue text-white hover:bg-brand-secondary-blue">
            Testar Agora Gratuitamente
          </Button>
        </Link>
      </div>
      <Image
        src={SmartphoneImage}
        alt="Smartphone Deepdive"
        className="z-0 h-[309px] w-[193px] select-none self-center bg-cover md:self-end"
      />
    </div>
  );
}
