import MainTourPage from "@/components/templates/TourPage/MainTourPage";

export async function generateMetadata({ params }) {
  const tour = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${params.tourId}`,
  ).then((res) => res.json());

  return {
    title: `${tour.title} | تورینو`,
  };
}

function Page({ params }) {
  return <MainTourPage params={params} />;
}

export default Page;
