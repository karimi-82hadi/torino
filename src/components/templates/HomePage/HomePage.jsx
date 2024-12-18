import Image from "next/image";

import HomePageSearch from "@/components/modules/HomePage/HomePageSearch";

import bgHeader from "@/public/images/bg-header.png";
import HomePageTours from "@/components/modules/HomePage/HomePageTours";

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
      </div>
    </>
  );
}

export default HomePage;
