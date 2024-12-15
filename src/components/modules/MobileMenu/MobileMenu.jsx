import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import styles from "./MobileMenu.module.css";

function MobileMenu({ mobileMenuOpen }) {
  const mobileMenuRef = useRef();

  const cssTransitionClassName = {
    enter: styles["mobileMenu-enter"],
    enterActive: styles["mobileMenu-enter-active"],
    exitActive: styles["mobileMenu-exit-active"],
  };

  return (
    <CSSTransition
      in={mobileMenuOpen}
      nodeRef={mobileMenuRef}
      timeout={300}
      unmountOnExit
      classNames={cssTransitionClassName}
    >
      <nav
        ref={mobileMenuRef}
        className="fixed right-0 top-0 z-20 h-dvh w-[209px] rounded-bl-[12px] rounded-tl-[12px] bg-white"
      >
        <div className="px-[12px] py-[32px]">
          <ul className="text-[16px] leading-[2.5] text-secondary">
            <li>
              <Link
                href="/"
                className="transition-all ease-in-out hover:text-primary-700"
              >
                <SVGIcon
                  name="home"
                  className="ml-[10px] inline-block size-[16px]"
                />
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-all ease-in-out hover:text-primary-700"
              >
                <SVGIcon
                  name="airplaneSquare"
                  className="ml-[10px] inline-block size-[16px]"
                />
                <span>خدمات گردشگری</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-all ease-in-out hover:text-primary-700"
              >
                <SVGIcon
                  name="volumeLow"
                  className="ml-[10px] inline-block size-[16px]"
                />
                <span>درباره ما</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-all ease-in-out hover:text-primary-700"
              >
                <SVGIcon
                  name="call"
                  className="ml-[10px] inline-block size-[16px]"
                />
                <span>تماس با ما</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </CSSTransition>
  );
}

export default MobileMenu;
