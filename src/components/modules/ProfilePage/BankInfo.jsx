import { useState } from "react";

import BankInfoForm from "./BankInfoForm";
import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import { e2p } from "@/utils/numbers";

function BankInfo({ data }) {
  const { payment } = data;
  const { accountIdentifier, debitCard_code, shaba_code } = payment || {};
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-full rounded-[10px] border border-black/20 pt-[20px]">
      <div className="mb-[20px] flex items-center justify-between px-[20px]">
        <h2 className="text-[16px]">اطلاعات حساب بانکی</h2>
        {!isEdit ? (
          <button
            className="flex items-center gap-[5px] text-[13px] text-complementry"
            onClick={() => setIsEdit(true)}
          >
            <SVGIcon name="edit" className="size-[12px]" />
            <span>ویرایش اطلاعات</span>
          </button>
        ) : null}
      </div>
      {isEdit ? (
        <BankInfoForm data={data} setIsEdit={setIsEdit} />
      ) : (
        <div className="px-[20px] pb-[20px]">
          <table className="w-full leading-[2.5rem]">
            <tbody className="grid-cols-2 lg:grid">
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">شماره کارت</td>
                <td>{debitCard_code ? e2p(debitCard_code) : "_"}</td>
              </tr>
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">شماره حساب</td>
                <td>{accountIdentifier ? e2p(accountIdentifier) : "_"}</td>
              </tr>
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">شماره شبا</td>
                <td>{shaba_code ? e2p(shaba_code) : "_"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BankInfo;
