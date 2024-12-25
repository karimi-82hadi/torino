import Link from "next/link";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

export const metadata = {
  title: "حساب کاربری | تورینو",
};

function ProfilePageLayout({ children }) {
  return (
    <div className="container mb-[50px] w-full max-w-[1440px] px-[1.5rem] lg:mt-[30px] lg:flex lg:justify-between lg:gap-[30px] lg:px-[.75rem]">
      <aside className="h-fit overflow-hidden lg:w-[284px] lg:rounded-[10px] lg:border lg:border-black/20">
        <ul className="flex items-center justify-between border-b border-black/25 lg:flex-col lg:items-start lg:border-none">
          <li className="transition-all duration-300 lg:w-full lg:px-[15px] lg:hover:bg-primary-700/25 lg:hover:text-primary-700">
            <Link
              href="/profile"
              className="flex items-center gap-[8px] px-[10px] py-[8px] text-[12px] transition-all duration-300 hover:text-primary-700 lg:border-b lg:border-black/20 lg:px-0 lg:py-[16px] lg:text-[14px]"
            >
              <SVGIcon
                name="profile_1_m_gray"
                className="size-[16px] lg:size-[20px]"
              />
              <span>پروفایل</span>
            </Link>
          </li>
          <li className="transition-all duration-300 lg:w-full lg:px-[15px] lg:hover:bg-primary-700/25 lg:hover:text-primary-700">
            <Link
              href="/profile/my-tours"
              className="flex items-center gap-[8px] px-[10px] py-[8px] text-[12px] transition-all duration-300 hover:text-primary-700 lg:border-b lg:border-black/20 lg:px-0 lg:py-[16px] lg:text-[14px]"
            >
              <SVGIcon name="sunFog" className="size-[16px] lg:size-[20px]" />
              <span>تورهای من</span>
            </Link>
          </li>
          <li className="transition-all duration-300 lg:w-full lg:px-[15px] lg:hover:bg-primary-700/25 lg:hover:text-primary-700">
            <Link
              href="/profile/transactions"
              className="flex items-center gap-[8px] px-[10px] py-[8px] text-[12px] transition-all duration-300 hover:text-primary-700 lg:px-0 lg:py-[16px] lg:text-[14px]"
            >
              <SVGIcon
                name="convertCard_m"
                className="size-[16px] lg:size-[20px]"
              />
              <span>تراکنش ها</span>
            </Link>
          </li>
        </ul>
      </aside>
      <section className="lg:w-[872px]">{children}</section>
    </div>
  );
}

export default ProfilePageLayout;
