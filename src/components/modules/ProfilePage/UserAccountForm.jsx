import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import TextField from "@/components/elements/TextField/TextField";
import Loading from "@/components/elements/Loading/Loading";

import { useUpdateProfile } from "@/services/mutations";

function UserAccountForm({ email, setIsEdit }) {
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
      { ...form },
      {
        onSuccess: (data) => successHandler(data),
        onError: (error) => toast.error(error.message),
      },
    );
  };

  useEffect(() => {
    setValue("email", email);
  }, []);

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="lg:w-1/2">
      <div className="flex w-full gap-[5px]">
        <TextField
          type="email"
          name="email"
          title="ایمیل"
          register={register}
          errors={errors}
          errMessage="لطفا ایمیل را به درستی وارد نمایید"
          minLength={20}
        />
        <div>
          <button
            disabled={isPending}
            type="submit"
            className="flex w-[96px] justify-center rounded-[5px] bg-primary-700 py-[8px] text-[16px] text-white lg:w-[122px] lg:py-[10.5px]"
          >
            {isPending ? <Loading fill="#fff" /> : "تایید"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserAccountForm;
