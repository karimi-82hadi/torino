import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";
import TourPageSlider from "@/components/modules/TourPage/TourPageSlider";
import Loading from "@/components/elements/Loading/Loading";

import { e2p, sp } from "@/utils/numbers";
import { useAddTourToBasket } from "@/services/mutations";

function TourPage({ tourData }) {
  const { id, title, image, price, endDate, startDate } = tourData;
  const router = useRouter();
  const { isPending, mutate } = useAddTourToBasket();

  const calculateDate = () => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);

    const newDate = eDate - sDate;
    return Math.round(newDate / (1000 * 3600 * 24));
  };

  const bookHandler = () => {
    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        setTimeout(() => {
          router.push("/checkout");
        }, 1000);
      },
      onError: (error) => toast.error("خطا در برقراری ارتباط"),
    });
  };

  return (
    <div className="pb-[30px] lg:bg-[#f3f3f3] lg:pb-[80px] lg:pt-[30px]">
      <div className="container max-w-[1440px]">
        <div className="border-black/20 bg-white p-[30px] lg:rounded-[10px] lg:border">
          <div className="gap-[50px] lg:flex">
            <div>
              <Image
                src={image}
                width={397}
                height={265}
                alt={title}
                className="h-full min-h-[220px] w-full rounded-[12px] object-cover lg:h-[265px] lg:w-[397px]"
              />
            </div>
            <div className="flex-grow">
              <div className="mb-[30px] mt-[30px] flex justify-between gap-[30px] lg:mb-[40px] lg:flex-col">
                <h1 className="text-[24px] font-bold lg:text-[32px]">
                  {title}
                </h1>
                <p className="text-[15px] lg:text-[20px]">
                  {e2p(calculateDate())} روز
                </p>
              </div>
              <div className="flex flex-wrap justify-between gap-[15px] lg:justify-start lg:gap-[50px]">
                <p className="flex items-center gap-[5px] text-[13px] lg:text-[20px]">
                  <SVGIcon
                    name="userTick"
                    className="size-[14px] lg:size-[24px]"
                  />
                  <span>تورلیدر از مبدا</span>
                </p>
                <p className="flex items-center gap-[5px] text-[13px] lg:text-[20px]">
                  <SVGIcon name="map" className="size-[14px] lg:size-[24px]" />
                  <span>برنامه سفر</span>
                </p>
                <p className="flex items-center gap-[5px] text-[13px] lg:text-[20px]">
                  <SVGIcon
                    name="medalStar"
                    className="size-[14px] lg:size-[24px]"
                  />
                  <span>تضمین کیفیت</span>
                </p>
              </div>
              <div className="mt-[40px] hidden items-center justify-between lg:flex">
                <p className="text-[28px] font-medium text-complementry">
                  {sp(price)}
                  <span className="text-[14px] text-black"> تومان</span>
                </p>
                <button
                  disabled={isPending}
                  onClick={bookHandler}
                  className="flex w-[204px] justify-center rounded-[10px] bg-primary-700 py-[16px] text-[24px] text-white"
                >
                  {isPending ? <Loading fill="#fff" /> : "رزرو و خرید"}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <TourPageSlider tourData={tourData} />
          </div>
          <div className="mt-[30px] flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[15px] lg:hidden">
            <button
              disabled={isPending}
              onClick={bookHandler}
              className="flex w-[154px] justify-center rounded-[10px] bg-primary-700 py-[9px] text-[20px] text-white"
            >
              {isPending ? <Loading fill="#fff" /> : "رزرو و خرید"}
            </button>
            <p className="text-[24px] font-medium text-complementry">
              {sp(price)}
              <span className="text-[10px] text-black"> تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPage;
