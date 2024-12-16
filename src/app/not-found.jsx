import Link from "next/link";
import Image from "next/image";

import notFoundImg from "@/public/images/page-not-found.png";

export const metadata = {
  title: "صفحه مورد نظر شما یافت نشد | تورینو",
};

function NotFoundPage() {
  return (
    <div className="container w-full max-w-[1440px]">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center pb-[100px] lg:flex-row-reverse lg:justify-between">
        <div>
          <Image
            src={notFoundImg}
            width={555}
            height={555}
            alt="not-found image"
            className="size-[322px] lg:size-[555px]"
          />
        </div>
        <div className="flex flex-col items-center gap-[30px] lg:gap-[100px]">
          <h2 className="text-[24px] font-semibold lg:text-[36px]">
            صفحه مورد نظر یافت نشد!
          </h2>
          <Link
            href="/"
            className="h-[58px] w-[232px] rounded-[16px] bg-primary-100 text-center text-[20px] leading-[58px] text-primary-700 lg:h-[75px] lg:w-[361px] lg:text-[28px] lg:leading-[75px]"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
