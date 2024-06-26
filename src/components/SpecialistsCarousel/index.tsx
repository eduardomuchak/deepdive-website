import CeltaCertifiedSVG from "@/assets/images/specialists/CeltaCertified.svg";
import DeltaCertifiedSVG from "@/assets/images/specialists/DeltaCertified.svg";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import "./swiper-custom.css";

import Circles from "@/assets/images/specialists/Circles.svg";
import { useWindowSize } from "@/hooks/useWindowSize";
import SwiperCore from "swiper";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselInfo {
  id: number;
  image: StaticImageData;
  name: string;
  role: string;
  certification?: string;
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
      {/* {isSmartphone && (
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
      )} */}
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
            className="flex aspect-square min-h-[480px] items-center justify-center md:min-h-[460px]"
          >
            {({ isActive }) => (
              <div className="flex flex-col">
                <div className="relative flex flex-col items-center justify-center">
                  <Image
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    className={
                      "mt-20 block aspect-square w-[230px] rounded-full grayscale md:mt-12"
                    }
                  />
                  {isActive && (
                    <Image
                      src={Circles}
                      alt={`Circles around slide`}
                      className={
                        "absolute bottom-0 top-6 z-0 min-w-[336px] select-none md:top-0"
                      }
                    />
                  )}
                  {item.certification &&
                    item.certification === "Delta Certified" && (
                      <Image
                        src={DeltaCertifiedSVG}
                        alt={`Delta Certified`}
                        className={
                          "absolute right-0 top-64 z-50 aspect-square max-w-full md:top-52"
                        }
                      />
                    )}
                  {item.certification &&
                    item.certification === "Celta Certified" && (
                      <Image
                        src={CeltaCertifiedSVG}
                        alt={`Celta Certified`}
                        className={
                          "absolute right-0 top-64 z-50 aspect-square max-w-full md:top-52"
                        }
                      />
                    )}
                  <div className="mt-12 flex flex-col items-center justify-center">
                    <span className="font-sans text-base font-medium text-white">
                      {item.name}
                    </span>
                    <span className="mb-2 font-sans text-sm font-medium text-brand-gray">
                      {item.role}
                    </span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }
                  }
                  exit={{ opacity: 0, y: "-80%" }}
                  transition={{ duration: 0.5 }}
                  className="flex min-h-[72px] max-w-[281px] justify-center"
                >
                  {isActive && (
                    <span className="text-center font-sans text-base font-normal text-brand-gray">
                      {item.description}
                    </span>
                  )}
                </motion.div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
