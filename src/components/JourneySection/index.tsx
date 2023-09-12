import Image1 from "@/assets/images/Journey/1.svg";
import Image2 from "@/assets/images/Journey/2.svg";
import Image3 from "@/assets/images/Journey/3.svg";
import Image4 from "@/assets/images/Journey/4.svg";
import Image5 from "@/assets/images/Journey/5.svg";
import { useTranslations } from "next-intl";
import { Journey } from "../Journey";
import { Background } from "./background";

export function JourneySection() {
  const t = useTranslations("JourneySection");

  const journey = [
    {
      id: 1,
      title: `${t("PersonalizationTitle")}`,
      text: `${t("PersonalizationText")}`,
      image: Image1,
    },
    {
      id: 2,
      title: `${t("ExclusivityTitle")}`,
      text: `${t("ExclusivityText")}`,
      image: Image2,
    },
    {
      id: 3,
      title: `${t("ConsistencyTitle")}`,
      text: `${t("ConsistencyText")}`,
      image: Image3,
    },
    {
      id: 4,
      title: `${t("InternationalNetworkingTitle")}`,
      text: `${t("InternationalNetworkingText")}`,
      image: Image4,
    },
    {
      id: 5,
      title: `${t("GlobalExperiencesTitle")}`,
      text: `${t("GlobalExperiencesText")}`,
      image: Image5,
    },
  ];

  return (
    <div className="relative mt-[74px] w-full overflow-hidden bg-brand-secondary-blue px-4 pb-[320px] pt-[60px] md:px-5">
      <div className="z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        <h1 className="z-10 mb-10 text-center font-alt text-[32px] font-bold tracking-tight">
          {t("yourJourneyAtDeepdive")}
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
