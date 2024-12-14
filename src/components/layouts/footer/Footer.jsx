import Link from "next/link";
import Image from "next/image";

import { e2p } from "@/utils/numbers";

import logo from "@/public/images/torino-logo.png";
import aira from "@/public/images/footer/aira.png";
import ecunion from "@/public/images/footer/ecunion.png";
import passengerRights from "@/public/images/footer/passenger-rights.png";
import samandehi from "@/public/images/footer/samandehi.png";
import stateAirline from "@/public/images/footer/state-airline.png";

function Footer() {
  return (
    <footer className="w-full">
      <div className="container w-full max-w-[1440px]">
        <div className="grid w-full grid-cols-2 border-t border-dashed border-[#000]/25 pt-[30px] lg:grid-cols-3 lg:border-solid lg:border-[#000]/20">
          <div>
            <h4 className="mb-[15px] text-[22px] font-semibold">تورینو</h4>
            <ul className="leading-[2]">
              <li>
                <Link href="#">درباره ما</Link>
              </li>
              <li>
                <Link href="#">تماس با ما</Link>
              </li>
              <li>
                <Link href="#">چرا تورینو</Link>
              </li>
              <li>
                <Link href="#">بیمه مسافرتی</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-[15px] text-[22px] font-semibold">
              خدمات مشتریان
            </h4>
            <ul className="leading-[2]">
              <li>
                <Link href="#">پشتیبانی آنلاین</Link>
              </li>
              <li>
                <Link href="#">راهنمای خرید</Link>
              </li>
              <li>
                <Link href="#">راهنمای استرداد</Link>
              </li>
              <li>
                <Link href="#">پرسش و پاسخ</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 mt-[30px] flex lg:col-span-1 lg:flex-col-reverse">
            <div className="flex w-1/2 flex-row-reverse flex-wrap justify-center gap-[15px] lg:w-full lg:justify-start">
              <Image
                src={aira}
                width={68}
                height={74}
                className="h-[38px] w-auto sm:h-[50px] md:h-[74px]"
              />
              <Image
                src={samandehi}
                width={67}
                height={74}
                className="h-[38px] w-auto sm:h-[50px] md:h-[74px]"
              />
              <Image
                src={ecunion}
                width={68}
                height={74}
                className="h-[38px] w-auto sm:h-[50px] md:h-[74px]"
              />
              <Image
                src={passengerRights}
                width={71}
                height={74}
                className="h-[38px] w-auto sm:h-[50px] md:h-[74px]"
              />
              <Image
                src={stateAirline}
                width={78}
                height={74}
                className="h-[38px] w-auto sm:h-[50px] md:h-[74px]"
              />
            </div>
            <div className="mb-[30px] w-1/2 lg:w-full">
              <div className="mb-[10px] flex justify-end">
                <Image
                  src={logo}
                  width={146}
                  height={44}
                  alt="torino-logo"
                  className="h-[30px] w-[100px] lg:h-[44px] lg:w-[146px]"
                />
              </div>
              <div className="text-left text-[14px]">
                <p>
                  تلفن پشتیبانی: <span dir="ltr">{e2p("021-8574")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[10px] border-t border-[#000]/25 p-[10px] text-center text-[12px] lg:mt-[30px] lg:border-[#000]/20 lg:text-[15px]">
          <p>کلیه حقوق این وبسایت متعلق به تورینو میباشد.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
