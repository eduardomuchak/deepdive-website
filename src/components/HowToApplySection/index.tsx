import Image1 from "@/assets/images/Journey/1.svg";
import Image2 from "@/assets/images/Journey/2.svg";
import Image3 from "@/assets/images/Journey/3.svg";
import Image4 from "@/assets/images/Journey/4.svg";
import { useTranslations } from "next-intl";
import { Journey } from "../Journey";
import { Background } from "./background";

export function HowToApplySection() {
  const t = useTranslations("HowToApplySection");

  const journey = [
    {
      id: 1,
      title: `${t("itemTitle1")}`,
      text: `${t("itemText1")}`,
      image: Image4,
    },
    {
      id: 2,
      title: `${t("itemTitle2")}`,
      text: `${t("itemText2")}`,
      image: Image2,
    },
    {
      id: 3,
      title: `${t("itemTitle3")}`,
      text: `${t("itemText3")}`,
      image: Image3,
    },
    {
      id: 4,
      title: `${t("itemTitle4")}`,
      text: `${t("itemText4")}`,
      image: Image1,
    },
  ];

  return (
    <div className="relative mt-[74px] w-full overflow-hidden bg-brand-secondary-blue px-4 pb-[320px] pt-[60px] md:px-5">
      <div className="z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        <h1 className="z-10 mb-10 text-center font-alt text-[32px] font-bold tracking-tight">
          {t("title")}
        </h1>
        <div className="z-10 flex w-full flex-col items-center justify-between md:flex-row md:items-start">
          {journey.map((item) => (
            <Journey.Root key={item.id}>
              <Journey.Image image={item.image} />
              <Journey.Title showDivider={item.id !== journey.length}>
                {item.title}
              </Journey.Title>
              <Journey.Text showDivider={item.id !== journey.length}>
                {item.text}
              </Journey.Text>
            </Journey.Root>
          ))}
        </div>
      </div>

      <Background />
    </div>
  );
}
