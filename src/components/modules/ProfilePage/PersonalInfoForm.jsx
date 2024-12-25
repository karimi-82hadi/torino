import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import toast from "react-hot-toast";

import TextField from "@/components/elements/TextField/TextField";
import Loading from "@/components/elements/Loading/Loading";

import { useUpdateProfile } from "@/services/mutations";

function PersonalInfoForm({ data, setIsEdit }) {
  const { fullName, gender, nationalCode, birthDate } = data;
  const queryClient = useQueryClient();
  const { isPending, mutate } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const successHandler = (data) => {
    toast.success(data?.data?.message);
    queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    setIsEdit(false);
  };

  const submitHandler = (form) => {
    if (isPending) return;

    form.nationalCode = +form.nationalCode;
    form.birthDate = new Date(form.birthDate).toISOString();

    mutate(
      { ...form },
      {
        onSuccess: (data) => successHandler(data),
        onError: (error) => toast.error(error.message),
      },
    );
  };

  useEffect(() => {
    setValue("fullName", fullName);
    setValue("nationalCode", nationalCode);
    setValue("gender", gender);
    setValue("birthDate", birthDate);
  }, []);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-[20px] grid grid-cols-1 gap-[20px] px-[20px] lg:grid-cols-3">
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
                    defaultValue={birthDate}
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
      <div className="border-black/20 pb-[20px] lg:border-t lg:py-[10px]">
        <div className="flex justify-end gap-[10px] px-[20px] *:w-1/2 *:max-w-[144px] *:rounded-[5px] *:border-2 *:border-primary-700 *:py-[6.5px] *:text-[16px] *:font-semibold *:outline-none">
          <button
            disabled={isPending}
            type="submit"
            className="flex justify-center bg-primary-700 text-white"
          >
            {isPending ? <Loading fill="#fff" /> : "تایید"}
          </button>
          <button disabled={isPending} onClick={() => setIsEdit(false)}>
            انصراف
          </button>
        </div>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
