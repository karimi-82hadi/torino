import SearchPage from "@/components/templates/SearchPage/SearchPage";

export const metadata = {
  title: "صفحه جست و جو | تورینو",
};

function page({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  
  return <SearchPage searchParams={params.toString()} />;
}

export default page;
