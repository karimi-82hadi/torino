import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import TextField from "@/components/elements/TextField/TextField";
import Loading from "@/components/elements/Loading/Loading";

import { useUpdateProfile } from "@/services/mutations";

function BankInfoForm({ data, setIsEdit }) {
  const { payment } = data;
  const { accountIdentifier, debitCard_code, shaba_code } = payment || {};
  const queryClient = useQueryClient();
  const { isPending, mutate } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const successHandler = (data) => {
    toast.success(data?.data?.message);
    queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    setIsEdit(false);
  };

  const submitHandler = (form) => {
    if (isPending) return;

    mutate(
      { payment: { ...form } },
      {
        onSuccess: (data) => successHandler(data),
        onError: (error) => toast.error(error.message),
      },
    );
  };

  useEffect(() => {
    setValue("accountIdentifier", accountIdentifier);
    setValue("debitCard_code", debitCard_code);
    setValue("shaba_code", shaba_code);
  }, []);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-[20px] grid grid-cols-1 gap-[20px] px-[20px] lg:grid-cols-3">
        <div>
          <TextField
            type="number"
            name="accountIdentifier"
            title="شماره کارت"
            register={register}
            errors={errors}
            errMessage="لطفا شماره کارت را به درستی وارد نمایید"
            minLength={16}
            maxLength={16}
          />
        </div>
        <div>
          <TextField
            type="number"
            name="debitCard_code"
            title="شماره حساب"
            register={register}
            errors={errors}
            errMessage="لطفا شماره حساب را به درستی وارد نمایید"
            minLength={12}
            maxLength={16}
          />
        </div>
        <div>
          <TextField
            type="number"
            name="shaba_code"
            title="شماره شبا"
            register={register}
            errors={errors}
            errMessage="لطفا شماره شبا را به درستی وارد نمایید"
            minLength={24}
            maxLength={24}
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

export default BankInfoForm;
