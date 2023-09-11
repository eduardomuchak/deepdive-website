import Image, { StaticImageData } from "next/image";
import "./swiper-custom.css";

import CeltaCertifiedSVG from "@/assets/images/specialists/CeltaCertified.svg";
import Circles from "@/assets/images/specialists/Circles.svg";
import DeltaCertifiedSVG from "@/assets/images/specialists/DeltaCertified.svg";
import { useWindowSize } from "@/hooks/useWindowSize";
import SwiperCore from "swiper";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselInfo {
  id: number;
  image: StaticImageData;
  name: string;
  role: string;
  certification: string;
  description: string;
}

interface SpecialistsCarouselProps {
  info: CarouselInfo[];
}
SwiperCore.use([Navigation, Pagination, EffectCreative]);

export function SpecialistsCarousel({ info }: SpecialistsCarouselProps) {
  const { width } = useWindowSize();
  const isSmartphone = width < 500;
  const slidesPerView = isSmartphone ? 1 : 3;

  return (
    <div className="relative mx-auto flex min-h-[346px] w-full flex-row items-center justify-center">
      {isSmartphone && (
        <Image
          src={Circles}
          alt={`Circles around slide`}
          className={"absolute top-5 z-0 w-[347px] select-none"}
        />
      )}
      {!isSmartphone && (
        <Image
          src={Circles}
          alt={`Circles around slide`}
          className={"absolute top-0 z-0 w-[347px] select-none"}
        />
      )}
      <Swiper
        effect={"creative"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        spaceBetween={80}
        loop={true}
        navigation={true}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ["-100%", 0, -1],
            scale: 0.7,
          },
          next: {
            shadow: false,
            translate: ["100%", 0, 0],
            scale: 0.7,
          },
          limitProgress: 3,
          perspective: true,
        }}
      >
        {info.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="flex aspect-square min-h-[250px] items-center justify-center"
          >
            <div className="relative overflow-visible">
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                className={
                  "block aspect-square w-[230px] overflow-visible grayscale"
                }
              />
              {item.certification === "Delta Certified" && (
                <Image
                  src={DeltaCertifiedSVG}
                  alt={`Delta Certified`}
                  className={
                    "absolute bottom-0 right-0 z-50 aspect-square max-w-full"
                  }
                />
              )}
              {item.certification === "Celta Certified" && (
                <Image
                  src={CeltaCertifiedSVG}
                  alt={`Celta Certified`}
                  className={
                    "absolute bottom-0 right-0 z-50 aspect-square max-w-full"
                  }
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
