"use client";

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

  return (
    <div className="flex flex-col items-center gap-[20px] pt-[20px] lg:pt-0">
      {data.data.map((tour) => (
        <MyTourCard key={tour.id} data={tour} />
      ))}
    </div>
  );
}

export default MyToursPage;
