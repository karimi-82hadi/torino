"use client";

import { useRouter } from "next/navigation";

import CheckOutPage from "./CheckOutPage";
import Loading from "@/components/elements/Loading/Loading";

import { useGetBasket } from "@/services/queries";

function MainCheckOutPage() {
  const { isPending, data } = useGetBasket();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="flex min-h-[800px] justify-center pt-[80px]">
        <Loading />
      </div>
    );
  }

  if (!isPending && !data) {
    return router.push("/");
  }

  return <CheckOutPage basketData={data?.data} />;
}

export default MainCheckOutPage;
