import Link from "next/link";
import Image from "next/image";

import SVGIcon from "@/components/elements/svg-icon/SVGIcon";

import logo from "@/public/images/torino-logo.png";

function Header() {
  return (
    <header className="h-[64px] w-full lg:h-[74px]">
      <div className="container flex h-full w-full max-w-[1440px] items-center">
        <div className="flex w-1/3 items-center justify-start lg:hidden">
          <button className="flex size-[40px] items-center justify-center">
            <SVGIcon name="menu" className="h-[20px] w-[20px]" />
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
          <button className="flex size-[40px] items-center justify-center rounded-[8px] border border-primary-700 lg:hidden">
            <SVGIcon name="login" className="size-[24px]" />
          </button>
          <button className="hidden h-[44px] w-[166px] items-center justify-center rounded-[8px] border-2 border-primary-700 lg:flex">
            <SVGIcon name="profile_1" className="ml-[5px] size-[24px]" />
            <span className="text-[18px] text-primary-700">ورود | ثبت نام</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
