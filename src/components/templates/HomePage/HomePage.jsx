import Image from "next/image";

import HomePageSearch from "@/components/modules/HomePage/HomePageSearch";
import HomePageTours from "@/components/modules/HomePage/HomePageTours";

import bgHeader from "@/public/images/bg-header.png";
import bgBannerDesktop from "@/public/images/banner/banner-desktop.png";
import bgBannerMobile from "@/public/images/banner/banner-mobile.png";
import HomePageSlider from "@/components/modules/HomePage/HomePageSlider";

import supportImage from "@/public/images/support.png";
import userSatisfactionImage from "@/public/images/user-satisfaction.png";
import mostEconomicalImage from "@/public/images/most-economical-price.png";

function HomePage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1440px]">
        <Image
          src={bgHeader}
          width={1440}
          height={350}
          alt="bg header torino"
          className="min-h-[119px] object-cover lg:h-[350px]"
        />
      </div>
      <div className="container w-full max-w-[1140px] px-[1.5rem]">
        <HomePageSearch />
        <HomePageTours />
        <div className="mt-[100px]">
          <div className="flex items-center">
            <Image
              src={bgBannerMobile}
              width={327}
              height={220}
              className="w-full lg:hidden"
              alt="homepage banner"
            />
            <Image
              src={bgBannerDesktop}
              width={1188}
              height={251}
              className="hidden w-full lg:block"
              alt="homepage banner"
            />
          </div>
        </div>
        <HomePageSlider />
      </div>
      <div className="mx-[.75rem] mt-[50px] border-t border-black/25 lg:mx-0 lg:mt-[20px]">
        <div className="container grid max-w-[400px] grid-cols-1 gap-[30px] py-[40px] lg:max-w-[1140px] lg:grid-cols-3 lg:px-[1.5rem] lg:py-[20px]">
          <div className="flex items-center">
            <Image
              src={mostEconomicalImage}
              width={122}
              height={110}
              className="h-[64px] w-[72px] lg:h-[100px] lg:w-[110px]"
              alt="most economical price image"
            />
            <div>
              <h3 className="text-[14px] font-medium lg:text-[26px]">
                بصرفه ترین قیمت
              </h3>
              <p className="mt-[10px] text-[12px] lg:text-[16px]">
                بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={supportImage}
              width={122}
              height={110}
              className="h-[64px] w-[72px] lg:h-[100px] lg:w-[110px]"
              alt="support image"
            />
            <div>
              <h3 className="text-[14px] font-medium lg:text-[26px]">
                پشتیبانی
              </h3>
              <p className="mt-[10px] text-[12px] lg:text-[16px]">
                پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={userSatisfactionImage}
              width={122}
              height={110}
              className="h-[64px] w-[72px] lg:h-[100px] lg:w-[110px]"
              alt="user satisfaction image"
            />
            <div>
              <h3 className="text-[14px] font-medium lg:text-[26px]">
                رضایت کاربران
              </h3>
              <p className="mt-[10px] text-[12px] lg:text-[16px]">
                رضایت بیش از 10هزار کاربر از تور های ما.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
