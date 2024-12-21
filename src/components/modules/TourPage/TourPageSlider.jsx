import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import { e2p } from "@/utils/numbers";

function TourPageSlider({ tourData }) {
  const {
    destination,
    fleetVehicle,
    insurance,
    endDate,
    startDate,
    availableSeats,
  } = tourData;

  return (
    <Swiper
      freeMode={true}
      modules={[FreeMode]}
      spaceBetween={30}
      slidesPerView={2}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
    >
      <SwiperSlide>
        <div className="flex flex-col gap-[10px] border-l border-black/25">
          <p className="flex items-center gap-[5px] text-[16px] lg:text-[18px]">
            <SVGIcon name="routing" className="size-[16px] lg:size-[20px]" />
            <span>مبدا</span>
          </p>
          <p className="text-[14px] font-medium lg:text-[16px]">
            {destination.name}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col gap-[10px] border-l border-black/25">
          <p className="flex items-center gap-[5px] text-[16px] lg:text-[18px]">
            <SVGIcon name="calendar_1" className="size-[16px] lg:size-[20px]" />
            <span>تاریخ رفت</span>
          </p>
          <p className="text-[14px] font-medium lg:text-[16px]">
            {new Date(startDate).toLocaleDateString("fa-IR", {
              dateStyle: "medium",
            })}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col gap-[10px] border-l border-black/25">
          <p className="flex items-center gap-[5px] text-[16px] lg:text-[18px]">
            <SVGIcon name="calendar_1" className="size-[16px] lg:size-[20px]" />
            <span>تاریخ برگشت</span>
          </p>
          <p className="text-[14px] font-medium lg:text-[16px]">
            {new Date(endDate).toLocaleDateString("fa-IR", {
              dateStyle: "medium",
            })}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col gap-[10px] border-l border-black/25">
          <p className="flex items-center gap-[5px] text-[16px] lg:text-[18px]">
            <SVGIcon name="bus" className="size-[16px] lg:size-[20px]" />
            <span>حمل و نقل</span>
          </p>
          <p className="text-[14px] font-medium lg:text-[16px]">
            {fleetVehicle}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col gap-[10px] border-l border-black/25">
          <p className="flex items-center gap-[5px] text-[16px] lg:text-[18px]">
            <SVGIcon name="group" className="size-[16px] lg:size-[20px]" />
            <span>ظرفیت</span>
          </p>
          <p className="text-[14px] font-medium lg:text-[16px]">
            {e2p(availableSeats)}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col gap-[10px]">
          <p className="flex items-center gap-[5px] text-[16px] lg:text-[18px]">
            <SVGIcon name="security" className="size-[16px] lg:size-[20px]" />
            <span>بیمه</span>
          </p>
          <p className="text-[14px] font-medium lg:text-[16px]">
            {insurance ? "دارد" : "ندارد"}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TourPageSlider;
