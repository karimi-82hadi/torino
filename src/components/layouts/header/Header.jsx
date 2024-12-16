"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";
import MobileMenu from "@/components/modules/MobileMenu/MobileMenu";
import BackgroundOverlay from "@/components/modules/BackgroundOverlay/BackgroundOverlay";
import AuthForm from "@/components/modules/AuthForm/AuthForm";
import LogoutConfirmation from "@/components/modules/LogoutConfirmation/LogoutConfirmation";

import { addBodyPadding } from "@/utils/bodyPadding";
import { useGetProfile } from "@/services/queries";
import { e2p } from "@/utils/numbers";

import logo from "@/public/images/torino-logo.png";

function Header() {
  const { data } = useGetProfile();
  const mobile = data?.data.mobile;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authFormOpen, setAuthFormOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const menuMobileHandler = () => {
    addBodyPadding();
    setMobileMenuOpen(true);
  };

  const authFormHandler = () => {
    addBodyPadding();
    setAuthFormOpen(true);
  };

  const logoutModalHandler = () => {
    addBodyPadding();
    setLogoutModalOpen(true);
  };

  return (
    <header className="h-[64px] w-full lg:h-[74px]">
      <div className="container flex h-full w-full max-w-[1440px] items-center">
        <div className="flex w-1/3 items-center justify-start lg:hidden">
          <button
            className="flex size-[40px] items-center justify-center"
            onClick={menuMobileHandler}
          >
            <SVGIcon name="menu" className="size-[20px]" />
          </button>
        </div>
        <div className="hidden lg:flex lg:w-4/6">
          <div className="w-1/4">
            <Image src={logo} width={146} height={44} alt="torino-logo" />
          </div>
          <div className="flex w-3/4 items-center">
            <ul className="flex w-full max-w-[499px] justify-between text-[16px] text-secondary">
              <li className="transition-all ease-in-out hover:text-primary-700">
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li className="transition-all ease-in-out hover:text-primary-700">
                <Link href="#">خدمات گردشگری</Link>
              </li>
              <li className="transition-all ease-in-out hover:text-primary-700">
                <Link href="#">درباره ما</Link>
              </li>
              <li className="transition-all ease-in-out hover:text-primary-700">
                <Link href="#">تماس با ما</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-2/3 items-center justify-end lg:w-2/6">
          {mobile ? (
            <div className="group/profile relative">
              <button className="flex h-[38px] w-[146px] items-center justify-center gap-[5px] lg:h-[44px] lg:w-[180px] lg:gap-[10px]">
                <SVGIcon
                  name="profile_1_d"
                  className="hidden size-[24px] lg:inline-block"
                />
                <SVGIcon name="profile_1_m" className="size-[14px] lg:hidden" />
                <span className="text-[14px] text-primary-700 lg:text-[18px]">
                  {e2p(mobile)}
                </span>
                <SVGIcon
                  name="arrowDown_d"
                  className="hidden size-[24px] lg:inline-block"
                />
                <SVGIcon name="arrowDown_m" className="size-[16px] lg:hidden" />
              </button>
              <div className="pointer-events-none absolute left-0 top-full h-[114px] w-[157px] overflow-hidden rounded-[11px] border border-black/10 bg-white opacity-0 transition-all duration-300 group-hover/profile:pointer-events-auto group-hover/profile:opacity-100 lg:h-[151px] lg:w-[246px]">
                <div className="flex items-center gap-[15px] bg-[#F4F4F4] px-[10px] py-[8px]">
                  <span className="flex size-[28px] items-center justify-center rounded-full bg-[#D9D9D9]">
                    <SVGIcon name="profile_1_m_gray" className="size-[16px]" />
                  </span>
                  <span className="text-[14px] font-medium tracking-wide text-primary-900 lg:text-[16px]">
                    {e2p(mobile)}
                  </span>
                </div>
                <div>
                  <Link
                    href="/profile"
                    className="flex items-center gap-[10px] border-b border-black/10 px-[10px] py-[4px] lg:gap-[15px] lg:py-[14px]"
                  >
                    <SVGIcon
                      name="profile_0"
                      className="size-[16px] lg:size-[20px]"
                    />
                    <span className="text-[12px] lg:text-[14px]">
                      اطلاعات حساب کاربری
                    </span>
                  </Link>
                  <button
                    className="flex w-full items-center gap-[10px] px-[10px] py-[4px] lg:gap-[15px] lg:py-[14px]"
                    onClick={logoutModalHandler}
                  >
                    <SVGIcon
                      name="logout_m"
                      className="size-[16px] lg:size-[20px]"
                    />
                    <span className="text-[12px] text-red lg:text-[14px]">
                      خروج از حساب کاربری
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={authFormHandler}
                className="flex size-[40px] items-center justify-center rounded-[8px] border border-primary-700 lg:hidden"
              >
                <SVGIcon name="login" className="size-[24px]" />
              </button>
              <button
                onClick={authFormHandler}
                className="hidden h-[44px] w-[166px] items-center justify-center rounded-[8px] border-2 border-primary-700 lg:flex"
              >
                <SVGIcon name="profile_1_d" className="ml-[5px] size-[24px]" />
                <span className="text-[18px] text-primary-700">
                  ورود | ثبت نام
                </span>
              </button>
            </>
          )}
        </div>
      </div>
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
      <BackgroundOverlay state={mobileMenuOpen} setState={setMobileMenuOpen} />
      <AuthForm authFormOpen={authFormOpen} setAuthFormOpen={setAuthFormOpen} />
      <LogoutConfirmation
        logoutModalOpen={logoutModalOpen}
        setLogoutModalOpen={setLogoutModalOpen}
      />
    </header>
  );
}

export default Header;
