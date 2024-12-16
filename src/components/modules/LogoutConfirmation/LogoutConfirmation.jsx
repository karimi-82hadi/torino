import ModalContainer from "../ModalContainer/ModalContainer";
import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import { removeBodyPadding } from "@/utils/bodyPadding";
import { removeCookie } from "@/utils/cookie";
import toast from "react-hot-toast";

function LogoutConfirmation({ logoutModalOpen, setLogoutModalOpen }) {
  const closeLogoutModalHandler = () => {
    removeBodyPadding(300);
    setLogoutModalOpen(false);
  };

  const logoutHandler = () => {
    removeCookie("Torino::AccToken");
    removeCookie("Torino::RefToken");
    setLogoutModalOpen(false);
    toast.success("با موفقیت از حساب خارج شدید");
    setTimeout(() => {
      window.location.assign("/");
    }, 1000);
  };

  return (
    <ModalContainer state={logoutModalOpen} setState={setLogoutModalOpen}>
      <div className="h-full p-[20px]">
        <div className="flex justify-end">
          <button
            onClick={closeLogoutModalHandler}
            className="flex size-[24px] items-center justify-center"
          >
            <SVGIcon name="add" className="size-[24px]" />
          </button>
        </div>
        <div className="flex flex-col p-[20px]">
          <h4 className="mt-[10px] text-center text-[22px] font-semibold text-red">
            خروج از حساب کاربری
          </h4>
          <div>
            <p className="my-[30px] text-center text-[14px]">
              آیا می‌خواهید از حساب کاربری خود خارج شوید؟
            </p>
            <div className="flex justify-end gap-[10px]">
              <button
                className="rounded-[8px] border border-red px-[16px] py-[8px] text-[14px] text-red"
                onClick={closeLogoutModalHandler}
              >
                انصراف
              </button>
              <button
                className="rounded-[8px] bg-red px-[16px] py-[8px] text-[14px] text-white"
                onClick={logoutHandler}
              >
                خروج از حساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default LogoutConfirmation;
