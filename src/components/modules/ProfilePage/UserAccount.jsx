import { useState } from "react";

import UserAccountForm from "./UserAccountForm";
import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import { e2p } from "@/utils/numbers";

function UserAccount({ data }) {
  const { mobile, email } = data;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-full rounded-[10px] border border-black/20 p-[20px]">
      <div className="mb-[20px] flex items-center justify-between">
        <h2 className="text-[16px]">اطلاعات حساب کاربری</h2>
        {email && !isEdit ? (
          <button
            className="flex items-center gap-[5px] text-[13px] text-complementry"
            onClick={() => setIsEdit(true)}
          >
            <SVGIcon name="edit" className="size-[12px]" />
            <span>ویرایش ایمیل</span>
          </button>
        ) : null}
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between lg:w-1/2 lg:justify-start lg:gap-[40px]">
          <table className="w-full leading-[2.5rem]">
            <tbody>
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">شماره موبایل</td>
                <td className="text-left">{e2p(mobile)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {isEdit ? (
          <UserAccountForm email={email} setIsEdit={setIsEdit} />
        ) : (
          <div className="flex items-center justify-between overflow-hidden lg:w-1/2 lg:justify-start lg:gap-[40px]">
            <table className="w-full leading-[2.5rem]">
              <tbody>
                <tr className="*:text-[14px] lg:*:inline-block">
                  <td className="w-1/3 sm:w-1/2 lg:w-1/3">
                    ایمیل {!email && <span className="mr-[30px]">_</span>}
                  </td>
                  {email ? (
                    <td className="text-left">{email}</td>
                  ) : (
                    <td className="lg:w-2/3">
                      <div className="flex flex-grow justify-end">
                        <button
                          className="flex items-center gap-[5px] text-[14px] text-complementry"
                          onClick={() => setIsEdit(true)}
                        >
                          <SVGIcon name="edit" className="size-[16px]" />
                          <span>افزودن</span>
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAccount;
