import Image from "next/image";

import HomePageSearch from "@/components/modules/HomePage/HomePageSearch";
import HomePageTours from "@/components/modules/HomePage/HomePageTours";

import bgHeader from "@/public/images/bg-header.png";
import bgBannerDesktop from "@/public/images/banner/banner-desktop.png";
import bgBannerMobile from "@/public/images/banner/banner-mobile.png";

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
      <div className="container w-full max-w-[1440px] px-[1.5rem]">
        <HomePageSearch />
        <HomePageTours />
        <div className="mt-[100px]">
          <div>
            <Image
              src={bgBannerMobile}
              width={327}
              height={220}
              className="w-full lg:hidden"
            />
            <Image
              src={bgBannerDesktop}
              width={1188}
              height={251}
              className="hidden w-full lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
