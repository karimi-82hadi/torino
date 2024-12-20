"use client";

import Loading from "@/components/elements/Loading/Loading";
import TourCard from "../TourCard/TourCard";

import { useGetAllTours } from "@/services/queries";

function HomePageTours() {
  const { isPending, data } = useGetAllTours();

  return (
    <div className="mt-[50px] lg:mt-[100px]">
      <h2 className="text-[20px] lg:text-[32px]">همه تورها</h2>
      {isPending ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="mt-[20px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.data.map((tour) => (
            <TourCard key={tour.id} data={tour} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePageTours;