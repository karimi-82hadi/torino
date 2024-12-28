import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import CheckOutFormInputs from "@/components/modules/CheckOutFormInputs/CheckOutFormInputs";
import Loading from "@/components/elements/Loading/Loading";

import { e2p, sp } from "@/utils/numbers";
import { useCheckOut } from "@/services/mutations";

function CheckOutPage({ basketData }) {
  const { title, startDate, endDate, price } = basketData;
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isPending, mutate } = useCheckOut();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const successHandler = (data) => {
    toast.success(data?.data?.message);
    queryClient.invalidateQueries({ queryKey: ["user-tours"] });
    setTimeout(() => {
      router.push("/profile/my-tours");
    }, 2000);
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

  const calculateDate = () => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);

    const newDate = eDate - sDate;
    return Math.round(newDate / (1000 * 3600 * 24));
  };

  return (
    <div className="pb-[30px] lg:bg-[#f3f3f3] lg:pb-[80px] lg:pt-[30px]">
      <div className="container max-w-[1140px]">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col justify-between gap-x-[10px] gap-y-[30px] lg:flex-row"
        >
          <div className="lg:w-3/4">
            <CheckOutFormInputs
              register={register}
              errors={errors}
              control={control}
            />
          </div>
          <div className="divide-y divide-dashed divide-black/50 rounded-[10px] border border-black/10 bg-white p-[15px] lg:w-1/4">
            <div className="flex justify-between pb-[30px]">
              <h2 className="text-[24px] font-semibold">{title}</h2>
              <p className="text-[16px]">{e2p(calculateDate())} روز</p>
            </div>
            <div className="flex flex-col gap-[20px] pt-[30px]">
              <div className="flex justify-between">
                <p className="text-[16px]">قیمت نهایی</p>
                <p className="text-[28px] text-complementry">
                  {sp(price)}
                  <span className="mr-[10px] text-[14px] text-secondary/80">
                    تومان
                  </span>
                </p>
              </div>
              <button
                disabled={isPending}
                type="submit"
                className="flex w-full justify-center rounded-[10px] bg-primary-700 py-[16px] text-[24px] text-white"
              >
                {isPending ? <Loading fill="#fff" /> : "ثبت و خرید نهایی"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOutPage;
