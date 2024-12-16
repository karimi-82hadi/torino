"use client";

import Image from "next/image";

import cannotConnectServerImg from "@/public/images/cannot-connect-server.png";

export const metadata = {
  title: "اتصال با سرور برقرار نیست | تورینو",
};

function ErrorPage() {
  return (
    <div className="container w-full max-w-[1440px]">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center pb-[100px] lg:flex-row-reverse lg:justify-between">
        <div>
          <Image
            src={cannotConnectServerImg}
            width={555}
            height={555}
            alt="no connection with server image"
            className="size-[322px] lg:size-[555px]"
          />
        </div>
        <div className="flex flex-col items-center gap-[30px] lg:items-start lg:gap-[50px]">
          <h2 className="text-[24px] font-semibold lg:text-[36px]">
            اتصال به سرور برقرار نیست!
          </h2>
          <p className="text-[16px] font-semibold lg:text-[24px]">
            لطفا بعدا دوباره امتحان کنید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
