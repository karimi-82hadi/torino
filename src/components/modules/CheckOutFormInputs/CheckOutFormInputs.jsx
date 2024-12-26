import { Controller } from "react-hook-form";
import { DatePicker } from "zaman";

import TextField from "@/components/elements/TextField/TextField";

import SVGIcon from "@/components/elements/SVGIcon/SVGIcon";

function CheckOutFormInputs({ register, errors, control }) {
  return (
    <div className="rounded-[10px] border border-black/20 bg-white p-[20px]">
      <div>
        <h2 className="flex items-center gap-[10px] text-[24px]">
          <SVGIcon name="profile_1_m_gray" className="size-[24px]" />
          مشخصات مسافر
        </h2>
      </div>
      <div className="mt-[15px] grid grid-cols-1 gap-[20px] lg:grid-cols-3">
        <div>
          <TextField
            type="text"
            name="fullName"
            title="نام و نام خانوادگی"
            register={register}
            errors={errors}
            errMessage="لطفا نام و نام خانوادگی را به درستی وارد نمایید"
            minLength={7}
            maxLength={30}
          />
        </div>
        <div>
          <TextField
            type="number"
            name="nationalCode"
            title="کدملی"
            register={register}
            errors={errors}
            errMessage="لطفا کدملی را به درستی وارد نمایید"
            minLength={10}
            maxLength={10}
          />
        </div>
        <div>
          <div className="flex-grow text-[12px] lg:text-[14px]">
            <div className="relative">
              <select
                className="peer w-full rounded-[5px] border border-black/50 px-[10px] py-[9px] outline-none lg:py-[9.5px]"
                {...register("gender", {
                  required: true,
                })}
              >
                <option hidden></option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
              <label className="pointer-events-none absolute right-[5px] top-auto -translate-y-[10px] scale-90 bg-white px-[5px] transition-all duration-300">
                جنسیت
              </label>
            </div>
            {errors && errors.gender && (
              <span className="right-[10px] top-full text-red">
                لطفا جنسیت را انتخاب نمایید
              </span>
            )}
          </div>
        </div>
        <div>
          <Controller
            control={control}
            name="birthDate"
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <div className="flex-grow text-[12px] lg:text-[14px]">
                <div className="relative rounded-[5px] border border-black/50 px-[10px] py-[7px] lg:py-[9.5px]">
                  <DatePicker
                    inputClass="outline-none w-full"
                    accentColor="#28a745"
                    onChange={(e) => onChange(e.value)}
                  />
                  <label className="pointer-events-none absolute right-[5px] top-auto -translate-y-[20px] scale-90 bg-white px-[5px] transition-all duration-300">
                    تاریخ
                  </label>
                </div>
                {errors && errors.birthDate && (
                  <span className="right-[10px] top-full text-red">
                    لطفا تاریخ تولد خود را وارد نمایید
                  </span>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckOutFormInputs;
