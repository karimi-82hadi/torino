"use client";

import Link from "next/link";

import TourCard from "@/components/modules/TourCard/TourCard";
import Loading from "@/components/elements/Loading/Loading";

import { useGetFilteredTours } from "@/services/queries";

function SearchPage({ searchParams }) {
  const { isPending, data } = useGetFilteredTours(searchParams);

  return (
    <div className="container mb-[100px] w-full max-w-[1140px] px-[1.5rem]">
      {isPending ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <Loading />
        </div>
      ) : data.data.length ? (
        <div className="mt-[20px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.data.map((tour) => (
            <TourCard key={tour.id} data={tour} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] flex-col items-center gap-[30px] pt-[100px]">
          <h2 className="text-[24px] font-semibold lg:text-[36px]">
            هیچ توری یافت نشد!
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

export default SearchPage;
