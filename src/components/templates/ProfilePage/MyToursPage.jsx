"use client";

import Link from "next/link";

import Loading from "@/components/elements/Loading/Loading";
import MyTourCard from "@/components/modules/ProfilePage/MyToursPage/MyTourCard";

import { useGetUserTours } from "@/services/queries";

function MyToursPage() {
  const { isPending, data } = useGetUserTours();

  if (isPending || !data) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <Loading />
      </div>
    );
  }
  console.log(data.data);
  return (
    <div className="flex flex-col items-center gap-[20px] pt-[20px] lg:pt-0">
      {data.data.length ? (
        data.data.map((tour) => <MyTourCard key={tour.id} data={tour} />)
      ) : (
        <div className="flex min-h-[300px] flex-col items-center gap-[30px] pt-[100px]">
          <h2 className="text-[24px] font-semibold lg:text-[36px]">
            هنوز هیچ توری خریداری نشده است
          </h2>
          <Link
            href="/"
            className="h-[58px] w-[232px] rounded-[16px] bg-primary-100 text-center text-[20px] leading-[58px] text-primary-700 lg:h-[75px] lg:w-[361px] lg:text-[28px] lg:leading-[75px]"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyToursPage;
