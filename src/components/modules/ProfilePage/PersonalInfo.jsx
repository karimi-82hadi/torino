import { useState } from "react";

import PersonalInfoForm from "./PersonalInfoForm";
import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

import { e2p } from "@/utils/numbers";

function PersonalInfo({ data }) {
  const { fullName, nationalCode, gender, birthDate } = data;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-full rounded-[10px] border border-black/20 pt-[20px]">
      <div className="mb-[20px] flex items-center justify-between px-[20px]">
        <h2 className="text-[16px]">اطلاعات شخصی</h2>
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
        <PersonalInfoForm data={data} setIsEdit={setIsEdit} />
      ) : (
        <div className="px-[20px] pb-[20px]">
          <table className="w-full leading-[2.5rem]">
            <tbody className="grid-cols-2 lg:grid">
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">نام و نام خانوادگی</td>
                <td className="font-semibold">{fullName ? fullName : "_"}</td>
              </tr>
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">کدملی</td>
                <td>{nationalCode ? e2p(nationalCode) : "_"}</td>
              </tr>
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">جنسیت</td>
                <td className="font-semibold">
                  {!gender ? "_" : gender === "male" ? "مرد" : "زن"}
                </td>
              </tr>
              <tr className="*:text-[14px] lg:*:inline-block">
                <td className="w-1/3 sm:w-1/2 lg:w-1/3">تاریخ تولد</td>
                <td>
                  {birthDate
                    ? new Date(birthDate).toLocaleDateString("fa-IR")
                    : "_"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
