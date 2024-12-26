"use client";

import { notFound } from "next/navigation";

import TourPage from "./TourPage";
import Loading from "@/components/elements/Loading/Loading";

import { useGetTour } from "@/services/queries";

function MainTourPage({ params }) {
  try {
    const { isPending, data } = useGetTour(params.tourId);

    if (isPending)
      return (
        <div className="flex min-h-[800px] justify-center pt-[80px]">
          <Loading />
        </div>
      );

    if (!isPending && !data.data) {
      return;
    }

    return <TourPage tourData={data?.data} />;
  } catch (error) {
    notFound();
  }
}

export default MainTourPage;
