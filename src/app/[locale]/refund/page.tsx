"use client";

import refundImage from "@/assets/images/refund.png";
import { ActionCard } from "@/components/ActionCard";
import { ActionCardText } from "@/components/ActionCard/Action";
import { DeepdiveProgram } from "@/components/DeepdiveProgram";
import { OrangeCard } from "@/components/OrangeCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Check, DownloadSimple, FileText } from "phosphor-react";

export default function Refund() {
  const t = useTranslations("RefundPage");

  const deepDiveProgram = [
    {
      id: 1,
      title: `${t("deepDiveProgramTitle1")}`,
      content: `${t("deepDiveProgramContent1")}`,
    },
    {
      id: 2,
      title: `${t("deepDiveProgramTitle2")}`,
      content: `${t("deepDiveProgramContent2")}`,
    },
    {
      id: 3,
      title: `${t("deepDiveProgramTitle3")}`,
      content: `${t("deepDiveProgramContent3")}`,
    },
  ];

  const actions = [
    {
      id: 1,
      title: `${t("actions1")}`,
      link: "https://docs.google.com/document/d/1s07tWfwSEaq0kBIk478dONSKr7zMjsDOrJTTFoa6IEw/edit?usp=sharing",
      linkText: `${t("download")}`,
      icon: DownloadSimple,
    },
    {
      id: 2,
      title: `${t("actions2")}`,
      link: "https://docs.google.com/document/d/1s07tWfwSEaq0kBIk478dONSKr7zMjsDOrJTTFoa6IEw/edit?usp=sharing",
      linkText: `${t("request")}`,
      icon: FileText,
    },
  ];

  return (
    <main className="relative mx-auto mt-[90px] w-full max-w-6xl px-4 md:px-5">
      <div className="flex w-full flex-row flex-wrap items-center justify-between  px-2 md:flex-nowrap">
        <div className="flex w-fit max-w-[508px] flex-col space-y-10">
          <h1 className="font-alt text-[40px] font-normal leading-tight tracking-tight text-white">
            {t("title1")} <strong>{t("title2")}</strong>
          </h1>
          <span className="font-sans text-base font-normal leading-relaxed text-brand-gray">
            {t("text1")}
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
          {t("title3")}
        </h2>
        <span className="mb-4 max-w-[508px] text-left font-sans text-base font-normal leading-relaxed text-brand-gray md:mb-10 md:text-center">
          {t("text2")}
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
            {t("title4")}
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
