"use client";

import Link from "next/link";

import Loading from "@/components/elements/Loading/Loading";

import { useGetUserTransactions } from "@/services/queries";
import { sp } from "@/utils/numbers";

function TransactionsPage() {
  const { isPending, data } = useGetUserTransactions();

  const formatDate = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const jalaliDate = new Date(date)
      .toLocaleDateString("fa-IR", options)
      .replace(",", " -");

    return jalaliDate;
  };

  if (isPending || !data) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-[20px] pt-[20px] lg:pt-0">
      {data.data.length ? (
        <div className="w-full overflow-hidden rounded-[10px] border border-black/25">
          <table className="w-full table-fixed *:text-center">
            <thead className="h-[41px] bg-[#DBDBDB] lg:h-[55px] lg:bg-[#F3F3F3]">
              <tr className="*:text-[12px] *:font-normal *:text-secondary/80 lg:*:text-[16px] lg:*:text-black">
                <th>تاریخ و ساعت</th>
                <th>مبلغ(تومان)</th>
                <th className="hidden lg:table-cell">نوع تراکنش</th>
                <th>شماره سفارش</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((item) => (
                <tr key={item.id} className="h-[41px] lg:h-[55px]">
                  <td
                    dir="ltr"
                    className="text-[9px] font-light lg:text-[14px]"
                  >
                    {formatDate(item.createdAt)}
                  </td>
                  <td className="text-[13px] lg:text-[14px]">
                    {sp(item.amount)}
                  </td>
                  <td className="hidden text-[14px] lg:table-cell">
                    ثبت نام در تور گردشگری
                  </td>
                  <td className="text-[13px] lg:text-[14px]">
                    <span className="hidden lg:inline">سفارش </span>12054902
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex min-h-[300px] flex-col items-center gap-[30px] pt-[100px]">
          <h2 className="text-[24px] font-semibold lg:text-[36px]">
            هنوز هیچ تراکنشی ثبت نشده است
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

export default TransactionsPage;
