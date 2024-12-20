"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import polygonImage from "@/public/images/polygon.png";
import slider1 from "@/public/images/slider/1.png";
import slider2 from "@/public/images/slider/2.png";
import slider3 from "@/public/images/slider/3.png";
import slider4 from "@/public/images/slider/4.png";

export default function HomePageSlider() {
  const sliders = [slider1, slider2, slider3, slider4];

  return (
    <div className="mt-[50px] lg:mt-[100px]">
      <div className="lg:flex lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="flex items-center gap-[5px] text-[20px] font-extrabold lg:gap-[10px] lg:text-[32px]">
            {/* I use img because svg did not work */}
            <Image
              src={polygonImage}
              width={59}
              height={68}
              className="h-[38px] w-[34px] lg:h-[68px] lg:w-[59px]"
              alt="polygon image"
            />
            چرا
            <span className="text-primary-700">تورینو</span>؟
          </h2>
          <div className="hidden lg:block">
            <h3 className="my-[30px] text-[36px] font-medium">
              تور طبیعت گردی و تاریخی
            </h3>
            <p className="text-justify text-[20px] leading-[44px]">
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center overflow-hidden px-[30px] lg:w-1/2">
          <Swiper
            modules={[EffectCards, Pagination, Navigation]}
            effect="cards"
            cardsEffect={{ perSlideRotate: 0, perSlideOffset: 20 }}
            className="mt-[30px] h-[284px] w-full max-w-[255px] lg:mt-0 lg:h-[479px] lg:max-w-[389px]"
            pagination={{ type: "fraction", el: ".swiper_pagination" }}
            navigation={{
              nextEl: ".swiper_navigation_next",
              prevEl: ".swiper_navigation_prev",
              disabledClass: "opacity-50",
            }}
          >
            {sliders.map((slider, index) => (
              <SwiperSlide
                key={index}
                className="!h-full !w-full overflow-hidden rounded-[35px]"
              >
                <Image
                  src={slider}
                  width={389}
                  height={479}
                  className="h-[284px] w-[255px] object-cover lg:h-[479px] lg:w-[389px]"
                  alt="slider image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-[20px] flex items-center gap-[20px]">
            <div className="swiper_navigation_prev cursor-pointer">
              <SVGIcon
                name="arrowRight"
                className="size-[24px] lg:size-[36px]"
              />
            </div>
            <div className="swiper_pagination select-none" dir="ltr"></div>
            <div className="swiper_navigation_next cursor-pointer">
              <SVGIcon
                name="arrowLeft"
                className="size-[24px] lg:size-[36px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
